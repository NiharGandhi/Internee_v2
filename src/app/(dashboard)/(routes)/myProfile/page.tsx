"use client"

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link';

import { format } from "date-fns";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm } from "react-hook-form";

import { cn } from '@/lib/utils';

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
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbPage, 
    BreadcrumbSeparator } 
from '@/components/ui/breadcrumb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from '@/components/ui/use-toast';
import { Separator } from "@/components/ui/separator"
import { Textarea } from '@/components/ui/textarea';

import { CalendarIcon, ChevronDown, DownloadCloudIcon, FileIcon } from 'lucide-react';

import { FileUpload } from '@/components/file-upload';
import ProfileProjectsDisplay from '@/components/profileProjectsDisplay';
import ProfileCertificatesDisplay from '@/components/profileCertificatesDisplay';


const formSchema = z.object({
    name: z.string().min(2).max(50),
    bio: z.string().min(10),
    institutionName: z.string().min(2).max(150),
    educationLevel: z.enum(["High School", "Bachelors", "Masters"], {
        required_error: "You need to select a Education Level.",
    }),
    yearOfGrad: z.date({
        required_error: "A Graduation Daate is required.",
    }),
    skills: z.string().min(2).max(150),
    email: z.string().email(),
    resumeUrl: z.string().min(1)
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

const MyProfile = () => {
    const router = useRouter();

    const { toast } = useToast();

    const [userData, setUserData] = useState<any>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // State to track loading
    const [projects, setProjects] = useState<any>(null);
    const [certificates, setCertificates] = useState<any>(null);
    const [manageLink, setManageLink] = useState("");
    const [subscription, setSubscription] = useState<boolean>(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

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

    console.log("SUBSCRIPTION: " + subscription);

    useEffect(() => {
        const fetchUserProjects = async () => {
            try {
                const response = await axios.get("/api/addProjects");
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserProjects();
    }, []);

    useEffect(() => {
        const fetchUserCertificates = async () => {
            try {
                const response = await axios.get("/api/addCertificates");
                setCertificates(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserCertificates();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("/api/users");
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchManageLink = async () => {
            try {
                const response = await axios.get("/api/stripeCustomerPortal");
                console.log("response link:" + response);
                setManageLink(response.data);
            } catch (error) {
                console.log("Portal Link Error", error);
            }
        }
        fetchManageLink();
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            bio: "",
            institutionName: "",// or another default
            yearOfGrad: new Date(), // or a sensible default date
            skills: "",
            email: "",
            resumeUrl: "",
        },
    });

    useEffect(() => {
        if (userData) {
            form.reset({
                name: userData.name,
                bio: userData.bio,
                institutionName: userData.InstitutionName,
                educationLevel: userData.EducationLevel,
                yearOfGrad: new Date(userData.GraduationDate),
                skills: userData.skills,
                email: userData.email,
                resumeUrl: userData.resume,
            });
        }
        setLoading(false);
    }, [form, userData]);

    // Resume URL rendering logic
    const renderResumeUrl = () => {
        if (!userData) {
            return <FileUpload endpoint="userResume" onChange={handleResumeUpload} />;
        } else if (userData) {
            if (isEditing) {
                return <FileUpload endpoint="userResume" onChange={handleResumeUpload} />;
            } else {
            return (
                <Link href={userData.resume}>
                    <div className="flex items-center justify-center p-3 w-full bg-purple-100 border-purple-200 border text-purple-700 rounded-md">
                        {userData.name}&apos;s Resume
                        <DownloadCloudIcon className='h-5 w-5 mr-2'/>
                    </div>
                </Link>
            );}
        } else {
            return (
                <div className='flex items-center justify-center h-16 bg-slate-100 rounded-md text-slate-400'>
                    <FileIcon className='h-5 w-5 text-slate-400 mr-2' />
                    No Resume Uploaded. Upload Now!!!
                </div>
            );
        }
    };


    // Handle resume upload
    const handleResumeUpload = (url?: string) => {
        if (url) {
            form.setValue("resumeUrl", url);
            onSave();
        }
    };

    // Button rendering logic
    const renderButtons = () => {
        if (userData) {
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
        } else {
            return <Button className='ml-1' onClick={() => onSubmit(form.getValues())}>Save</Button>;
        }
    };

    const renderEnhanceButton = () => {
        if (subscription) {
            return (
                <Button variant="upgrade" className='ml-1' onClick={handleEnhanceDescription} disabled={!isEditing && userData !== null}>Enhance Bio</Button>
            )
        }
    };

    const handleEnhanceDescription = async () => {

        if (subscription) {
            const bio = form.getValues().bio;
            if (!bio) {
                toast({
                    title: "Error",
                    description: "Bio is empty.",
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
                            content: "Enhance the following Bio for me (Only Give me the Description, without any styling, you can make them as pointer's if necessary): " + bio
                        }
                    ]
                }
            };

            try {
                const response = await axios.request(options);
                const enhancedText = response.data.choices[0].message.content; // Assuming the first response choice is chosen
                form.setValue("bio", enhancedText);
                toast({
                    title: "Success",
                    description: "Bio enhanced successfully.",
                });
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Error enhancing Bio.",
                });
                console.error("Error enhancing Bio:", error);
            }
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/users", values);
            router.push(`/users/${response.data.id}`);
            toast({
                title: "Congratulations",
                description: "Profile Created Successfully.",
            })
        } catch {
            toast({
                title: "Error",
                description: "Error while Creating Profile .",
            })
            console.log("[ERROR] Something went wrong while creating User");
        }
    }

    const onSave = async () => {
        try {
            const values = form.getValues(); // Retrieve form values
            const response = await axios.put("/api/users", values);
            window.location.reload();
            toast({
                title: "Congratulations",
                description: "Profile Updated Successfully.",
            })
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    if (loading) return <div><Loader /></div>;

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
                            <BreadcrumbPage>My Profile</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='flex'>
                    <h1 className='text-4xl font-bold font-sans'>
                        Your Profile
                    </h1>
                    <Link
                        className='ml-auto mt-4 lg:mt-0'
                        href={"" + manageLink}
                    >
                        <Button>Manage Subscription</Button>
                    </Link>
                </div>
                <div className='flex-col lg:flex-wrap'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex-col lg:flex lg:flex-row'>
                        <div className='w-full lg:w-1/2 md:w-1/2 py-4 space-y-6'>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Internee" {...field} disabled={!isEditing && userData !== null} />
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
                                    name="bio"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Bio</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Tell us about yourself" {...field} disabled={!isEditing && userData !== null} />
                                            </FormControl>
                                            <FormDescription>
                                                Tell us about yourself
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                                {renderEnhanceButton()}
                                <FormField
                                    control={form.control}
                                    name="educationLevel"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Education Level:</FormLabel>
                                            <FormControl>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button className="ml-2" disabled={!isEditing && userData !== null}>
                                                            {field.value || "Select education level"}
                                                            <ChevronDown className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuItem onClick={() => field.onChange("High School")}>
                                                            High School
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => field.onChange("Bachelors")}>
                                                            Bachelors
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => field.onChange("Masters")}>
                                                            Masters
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="institutionName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Institution Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Rochester Institute of Technology" {...field} disabled={!isEditing && userData !== null} />
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
                                    name="yearOfGrad"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Graduation Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild disabled={!isEditing && userData !== null}>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        captionLayout='dropdown'
                                                        fromYear={1900} 
                                                        toYear={3000}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>
                                                Your date of Graduation (Expected date if not graduated yet).
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='w-full py-4 lg:px-10 md:px-10 space-y-6'>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="intern@gmail.com" {...field} disabled={!isEditing && userData !== null} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="skills"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Skills</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Internee" {...field} disabled={!isEditing && userData !== null} />
                                            </FormControl>
                                            <FormDescription>Multiple Skils Separeted by commas (eg: photography, graphic Design)</FormDescription>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="resumeUrl"
                                    render={({ field }) => (
                                        <FormControl>
                                            <FormItem>
                                                <FormLabel>Resume</FormLabel>
                                                <FormControl>
                                                    {renderResumeUrl()}
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </FormControl>
                                    )}
                                />
                                {renderButtons()}
                            </div>
                        </form>
                    </Form>
                    <Separator />
                    <div>
                        <ProfileProjectsDisplay projects={projects} />
                        <ProfileCertificatesDisplay certificates={certificates}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile