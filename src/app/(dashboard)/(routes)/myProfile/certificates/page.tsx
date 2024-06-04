"use client"

import React, { useEffect, useState } from 'react';
import axios from "axios";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
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
} from '@/components/ui/breadcrumb';
import { useToast } from '@/components/ui/use-toast';
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card';

import { CalendarIcon, EllipsisVertical, LinkIcon } from 'lucide-react';


import { Textarea } from "@/components/ui/textarea";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FileUpload } from '@/components/file-upload';


const formSchema = z.object({
    name: z.string().min(2),
    description: z.string().min(1),
    link: z.string().optional(),
    certificateUrl: z.string().optional(),
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

const AddCertificatesPage = () => {

    const { toast } = useToast();

    const router  = useRouter();

    const [userData, setUserData] = useState<any>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // State to track loading
    const [subscription, setSubscription] = useState<boolean>(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("/api/addCertificates");
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
        setLoading(false);
    }, []);

    useEffect(() => {
        const fetchSubscriptionData = async () => {
            try {
                const response = await axios.get("/api/checkSubscription");
                setSubscription(response.data);
            } catch (error) {
                console.error("Error fetching subscription data:", error);
            }
        }
        fetchSubscriptionData();
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",// or another default
            link: "",
            certificateUrl: "",
        },
    });

    useEffect(() => {
        if (userData) {
            form.reset({
                name: userData.name,
                description: userData.description,
                link: userData.link,
                certificateUrl: userData.certificateUrl,
            });
        }
    }, [form, userData]);

    // Resume URL rendering logic
    const renderCertificateAttachment = () => {
        return <FileUpload endpoint="userCertificate" onChange={handleAttachmentUpload} />;
    };


    // Handle resume upload
    const handleAttachmentUpload = (url?: string) => {
        if (url) {
            form.setValue("certificateUrl", url);
        }
    };

    // Button rendering logic
    const renderButtons = () => {
            return <Button className='ml-1' onClick={() => onSubmit(form.getValues())}>Save</Button>;
    };

    const renderEnhanceButton = () => {
        if (subscription) {
            return (
                <Button variant="upgrade" className='ml-1' onClick={handleEnhanceDescription} disabled={!isEditing && userData !== null}>Enhance Bio</Button>
            )
        }
    };

    const handleEnhanceDescription = async () => {
        const description = form.getValues().description;
        if (!description) {
            toast({
                title: "Error",
                description: "Description is empty.",
            });
            return;
        }

        const options = {
            method: 'POST',
            url: 'https://gpt-4o.p.rapidapi.com/chat/completions',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'e9a0d93d50mshe98a3e570cb3576p1bc973jsn3823a95811ea',
                'X-RapidAPI-Host': 'gpt-4o.p.rapidapi.com'
            },
            data: {
                model: 'gpt-4o',
                messages: [
                    {
                        role: 'user',
                        content: "Enhance the following description for my Certification, do keep it short and informative (Only Give me the Description, without any styling, you can make them as pointer's if necessary): " + description
                    }
                ]
            }
        };

        try {
            const response = await axios.request(options);
            const enhancedText = response.data.choices[0].message.content; // Assuming the first response choice is chosen
            form.setValue("description", enhancedText);
            toast({
                title: "Success",
                description: "Description enhanced successfully.",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Error enhancing description.",
            });
            console.error("Error enhancing description:", error);
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/addCertificates", values);
            toast({
                title: "Congratulations",
                description: "certificate Created Successfully.",
            })

            window.location.reload();
            
        } catch {
            toast({
                title: "Error",
                description: "Error while Creating certificate .",
            })
            console.log("[ERROR] Something went wrong while creating certificate");
        }
    }

    const onSave = async () => {
        try {
            const values = form.getValues(); // Retrieve form values
            const response = await axios.put("/api/addCertificates", values);
            // router.push(`/users/${response.data.id}`);
            toast({
                title: "Congratulations",
                description: "Profile Updated Successfully.",
            })
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleDelete = async (index: any) => {
        try {
            const certificateId = userData[index].id; // Assuming the certificate ID is stored in userData

            const response = await axios.delete(`/api/addCertificates/${certificateId}`);

            toast({
                title: "Congratulations",
                description: "Profile Deleted Successfully.",
            })

            window.location.reload();

        } catch (error) {
            console.error("Error deleting certificate:", error);
            toast({
                title: "Error",
                description: "An error occurred while deleting the certificate.",
            });
        }
    };

    const handleEdit = async (index: any) => {
        try {
            const certificateId = userData[index].id; // Assuming the certificate ID is stored in userData

            router.push(`/myProfile/certificates/${certificateId}`)

        } catch (error) {
            console.error("Error deleting certificate:", error);
            toast({
                title: "Error",
                description: "An error occurred while deleting the certificate.",
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
                            <BreadcrumbPage>Add Certificates</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='text-4xl font-bold font-sans'>
                    Add Certificates
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
                                            <FormLabel>Name of the Certification</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Internee" {...field} required/>
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
                                                <Textarea
                                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                                {renderEnhanceButton()}
                                <FormField
                                    control={form.control}
                                    name="link"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Link for Certificate</FormLabel>
                                            <FormControl>
                                                <Input placeholder="www.google.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                                <p className='text-gray-500 items-center justify-center'>or</p>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="certificateUrl"
                                        render={({ field }) => (
                                            <FormControl>
                                                <FormItem>
                                                    <FormLabel>Certificate Attachment</FormLabel>
                                                    <FormControl>
                                                        {renderCertificateAttachment()}
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
                    <div className='w-full lg:w-1/2 py-9'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Certificates</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {userData !== null && (
                                    <div className='grid grid-cols-1 gap-4 mt-4'>
                                        {userData.map((certificate: any, index: number) => (
                                            <div key={index} className="flex items-center gap-4">
                                                {certificate.link ? (
                                                    <>
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                            <Link href={certificate.link}>
                                                                <LinkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                                            </Link>
                                                        </div>
                                                        <div className='w-32 lg:w-96'>
                                                            <h3 className="text-lg font-semibold">{certificate.name}</h3>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{certificate.description}</p>
                                                        </div>
                                                    </>
                                                ) : ( // Render just the div if certificate does not have a link
                                                    <>
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                            <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                                        </div>
                                                        <div className='w-32 lg:w-96'>
                                                            <h3 className="text-lg font-semibold">{certificate.name}</h3>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{certificate.description}</p>
                                                        </div>
                                                    </>
                                                )}
                                                <div className='ml-auto space-x-1'>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
                                                        <DropdownMenuContent>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem onClick={() => handleEdit(index)}>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => handleDelete(index)} className='text-red-500'>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>

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

export default AddCertificatesPage