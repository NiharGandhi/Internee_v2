"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
}
    from '@/components/ui/breadcrumb';

import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, DeleteIcon, DownloadCloudIcon, EllipsisVertical, FileIcon, LinkIcon, MenuIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FileUpload } from '@/components/file-upload';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import Image from 'next/image';
import FallBack from "../../../../../../../public/fallback.png";

const formSchema = z.object({
    name: z.string().min(2),
    description: z.string().min(1),
    link: z.string().optional(),
    imageUrl: z.string().optional(),
});

const Loader = () => (
    <div className="flex justify-center items-center h-screen">
        {/* Insert your loader SVG here */}
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.764l4.065 2.329-1.346 2.338-4.119-2.371zM12 20c3.866 0 7-3.134 7-7h-4c0 2.761-2.239 5-5 5s-5-2.239-5-5H0c0 4.962 4.037 9 9 9z"></path>
        </svg>
    </div>
);

const ProjectEditPage = ({
    params
} : {
    params: { projectId: string }
}) => {

    const { toast } = useToast();

    const [projectData, setProjectData] = useState<any>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // State to track loading

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const urlId = params.projectId
    console.log("URL ID: " + urlId);

    useEffect(() => {
        const fetchUserData = async () => {
            console.log("Fetching user data")
            try {
                const response = await axios.get(`/api/editProjects/${urlId}`)
                console.log("RESPONSE", response.data);
                setProjectData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
        setLoading(false);
    }, [urlId]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",// or another default
            link: "",
            imageUrl: "",
        },
    });

    useEffect(() => {
        if (projectData) {
            form.reset({
                name: projectData.name,
                description: projectData.description,
                link: projectData.link,
                imageUrl: projectData.imageUrl,
            });
        }
    }, [form, projectData]);

    const fallbackImageUrl = FallBack; 

    // Resume URL rendering logic
    const renderProjectImage = () => {
        if (!projectData || !projectData.imageUrl) {
            if (isEditing) {
                return <FileUpload endpoint="projectImage" onChange={handleResumeUpload} />;
            } else {
                return (
                    <div className='flex items-center justify-center h-16 bg-slate-100 rounded-md text-slate-400'>
                        <FileIcon className='h-5 w-5 text-slate-400 mr-2' />
                        No Resume Uploaded. Upload Now!!!
                    </div>
                );
            }
        } else if (projectData) {
            if (isEditing) {
                return <FileUpload endpoint="projectImage" onChange={handleResumeUpload} />;
            } else {
                return (
                    <Link href={projectData.imageUrl}>
                        <div className="flex items-center justify-center p-3 w-full bg-purple-100 border-purple-200 border text-purple-700 rounded-md">
                            <Image
                                src={projectData.imageUrl || fallbackImageUrl}
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                width={"550"}
                                height={"310"}
                            />
                        </div>
                    </Link>
                );
            }
        } else {
            return (
                <div className='flex items-center justify-center h-16 bg-slate-100 rounded-md text-slate-400'>
                    <FileIcon className='h-5 w-5 text-slate-400 mr-2' />
                    No Image Uploaded. Upload Now!!!
                </div>
            );
        }
    };

    // Handle resume upload
    const handleResumeUpload = (url?: string) => {
        if (url) {
            form.setValue("imageUrl", url);
            onSave();
        }
    };

    // Button rendering logic
    const renderButtons = () => {
        if (isEditing) {
            return (
                <>
                    <Button type="button" onClick={toggleEdit}>Cancel</Button>
                    <Button className='ml-1' onClick={onSave}>Save</Button>
                </>
            );
        } else {
            return <Button type="button" onClick={toggleEdit}>Edit</Button>;
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/addProjects", values);
            toast({
                title: "Congratulations",
                description: "Project Created Successfully.",
            })

            window.location.reload();

        } catch {
            toast({
                title: "Error",
                description: "Error while Creating Project .",
            })
            console.log("[ERROR] Something went wrong while creating Project");
        }
    }

    const onSave = async () => {
        try {
            const values = form.getValues(); // Retrieve form values
            const response = await axios.put("/api/addProjects", values);
            // router.push(`/users/${response.data.id}`);
            toast({
                title: "Congratulations",
                description: "Profile Updated Successfully.",
            })
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    
    // Render loader while data is being fetched
    if (loading) return <Loader />;

  return (
      <>
          <div className='py-4 px-6'>
              <Breadcrumb className='mb-4'>
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/myProfile">My Profile</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbPage>Add Projects</BreadcrumbPage>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Breadcrumb>
              <h1 className='text-4xl font-bold font-sans'>
                  Add Projects
              </h1>
              <div className='flex flex-col lg:flex-row '>
                  <div className='lg:w-1/2 lg:pr-4 flex flex-col space-y-6'>
                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className='flex-col py-6 lg:flex-col space-y-6'>
                              <FormField
                                  control={form.control}
                                  name="name"
                                  render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>Name</FormLabel>
                                          <FormControl>
                                              <Input placeholder="Internee" {...field} disabled={!isEditing}/>
                                          </FormControl>
                                          <FormMessage />
                                      </FormItem>

                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="description"
                                  render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>Description</FormLabel>
                                          <FormControl>
                                              <Input placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing...." {...field} disabled={!isEditing} />
                                          </FormControl>
                                          <FormMessage />
                                      </FormItem>

                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="link"
                                  render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>Link</FormLabel>
                                          <FormControl>
                                              <Input placeholder="www.google.com" {...field} disabled={!isEditing} />
                                          </FormControl>
                                          <FormMessage />
                                      </FormItem>

                                  )}
                              />
                              <div>
                                  <FormField
                                      control={form.control}
                                      name="imageUrl"
                                      render={({ field }) => (
                                          <FormControl>
                                              <FormItem>
                                                  <FormLabel>Project Image</FormLabel>
                                                  <FormControl>
                                                      {renderProjectImage()}
                                                  </FormControl>
                                                  <FormMessage />
                                              </FormItem>
                                          </FormControl>
                                      )}
                                  />
                              </div>
                          </form>
                      </Form>
                      {renderButtons()}
                  </div>
              </div>
          </div>
      </>
  )
}

export default ProjectEditPage