"use client"

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
import { CalendarIcon, DeleteIcon, LinkIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
    name: z.string().min(2),
    description: z.string().min(1),
    link: z.string().optional(),
})

const Loader = () => (
    <div className="flex justify-center items-center h-screen">
        {/* Insert your loader SVG here */}
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.764l4.065 2.329-1.346 2.338-4.119-2.371zM12 20c3.866 0 7-3.134 7-7h-4c0 2.761-2.239 5-5 5s-5-2.239-5-5H0c0 4.962 4.037 9 9 9z"></path>
        </svg>
    </div>
);

const AddProjectsPage = () => {

    const { toast } = useToast();

    const [userData, setUserData] = useState<any>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // State to track loading

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("/api/addProjects");
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
        setLoading(false);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",// or another default
            link: "",
        },
    });

    useEffect(() => {
        if (userData) {
            form.reset({
                name: userData.name,
                description: userData.description,
                link: userData.link,
            });
        }
    }, [form, userData]);

    // Button rendering logic
    const renderButtons = () => {
            return <Button className='ml-1' onClick={() => onSubmit(form.getValues())}>Save</Button>;
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

    const handleDelete = async (index: any) => {
        try {
            const projectId = userData[index].id; // Assuming the project ID is stored in userData

            const response = await axios.delete(`/api/addProjects/${projectId}`);

            toast({
                title: "Congratulations",
                description: "Profile Deleted Successfully.",
            })

            window.location.reload();

        } catch (error) {
            console.error("Error deleting project:", error);
            toast({
                title: "Error",
                description: "An error occurred while deleting the project.",
            });
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
                            <BreadcrumbPage>Edit Projects</BreadcrumbPage>
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
                                                <Input placeholder="Internee" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
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
                                                <Input placeholder="Rochester Institute of Technology" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Currently Studing in or Recently Graduated From
                                            </FormDescription>
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
                                                <Input placeholder="Rochester Institute of Technology" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Currently Studing in or Recently Graduated From
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                            </form>
                        </Form>
                        {renderButtons()}
                    </div>
                    <div className='w-full lg:w-1/2 py-9'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Projects</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {userData !== null && (
                                    <div className='grid grid-cols-1 gap-4 mt-4'>
                                        {userData.map((project: any, index: number) => (
                                            <div key={index} className="flex items-center gap-4">
                                                {project.link ? ( // Check if project has a link
                                                    <> {/* Wrap in Link if project has a link */}
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                            <Link href={project.link}>
                                                                <LinkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-semibold">{project.name}</h3>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                                                        </div>
                                                    </>
                                                ) : ( // Render just the div if project does not have a link
                                                    <>
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                            <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-semibold">{project.name}</h3>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                                                        </div>
                                                    </>
                                                )}
                                                <div className='ml-auto'>
                                                    <Button onClick={() => handleDelete(index)} variant={"destructive"}><Trash2Icon className='w-4 h-4' /></Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProjectsPage