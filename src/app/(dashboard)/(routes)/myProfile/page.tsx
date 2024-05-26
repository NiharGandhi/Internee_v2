"use client"

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";

import { format } from "date-fns";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

import { useToast } from '@/components/ui/use-toast';

import { CalendarIcon } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2).max(50),
    institutionName: z.string().min(2).max(150),
    educationLevel: z.enum(["High School", "Bachelors", "Masters"], {
        required_error: "You need to select a Education Level.",
    }),
    yearOfGrad: z.date({
        required_error: "A Graduation Daate is required.",
    }),
    skills: z.string().min(2).max(150),
    skill: z.string({
        required_error: "Please select a language.",
    }).min(1),
    email: z.string().email(),
})

const MyProfile = () => {
    const router = useRouter();

    const { toast } = useToast();

    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("/api/users");
                console.log(response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            institutionName: "",// or another default
            yearOfGrad: new Date(), // or a sensible default date
            skill: "en",
            email: "",
        },
    });

    useEffect(() => {
        if (userData) {
            form.reset({
                name: userData.name,
                institutionName: userData.InstitutionName,
                educationLevel: userData.EducationLevel,
                yearOfGrad: new Date(userData.GraduationDate),
                skills: userData.skills,
                email: userData.email,
            });
        }
    }, [form, userData]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/users", values);
            router.push(`/users/${response.data.id}`);
            toast({
                title: "Congratulations",
                description: "Profile Created Successfully.",
            })
        } catch {
            // toast.error("Something went wrong while creating")
            console.log("[ERROR] Something went wrong while creating User");
        }
    }


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
                            <BreadcrumbPage>Resources</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='text-4xl font-bold font-sans'>
                    Your Profile
                </h1>
                <div className='flex flex-col lg:flex-row md:flex-row'>
                    <div className='w-full lg:w-1/3 md:w-1/2 py-4'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                    name="educationLevel"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Education Level</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="High School" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            High School
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Bachelors" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Bachelors
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Masters" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Masters</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
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
                                    name="yearOfGrad"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Graduation Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
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
                            </form>
                        </Form>
                    </div>
                    <div className='w-full py-4 lg:px-10 md:px-10'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="intern@gmail.com" {...field} />
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
                                                <Input placeholder="Internee" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />
                                <Button type="submit">Save</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile