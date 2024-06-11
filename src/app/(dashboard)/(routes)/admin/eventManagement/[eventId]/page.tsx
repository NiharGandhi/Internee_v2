"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";

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
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

import { CalendarIcon } from 'lucide-react';
import useEvents from '@/hooks/useEvents';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import AdminEventCard from '../_components/AdminEventCard';

const formSchema = z.object({
    title: z.string().min(2).max(50),
    dateOfEvent: z.date({
        required_error: "A Date is required.",
    }),
    description: z.string().min(2)
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

const EditEventManagement = ({
    params
} : { params : { eventId : string }}) => {

    const [eventData, setEventData] = useState<any>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const { toast } = useToast();

    const { events, loading, error } = useEvents();

    const eventUrlId = params.eventId;

    useEffect(() => {
        const fetchEventData = async () => {
            console.log("Fetching user data")
            try {
                const response = await axios.get(`/api/editEvents/${eventUrlId}`)
                console.log("RESPONSE", response.data);
                setEventData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchEventData();
    }, [eventUrlId]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            dateOfEvent: new Date(),
            description: ""
        },
    });

    useEffect(() => {
        if (eventData) {
            form.reset({
                title: eventData.title,
                description: eventData.description,
                dateOfEvent: eventData.dateTime,
            });
        }
    }, [form, eventData]);

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
            const response = await axios.post("/api/events", values);
            toast({
                title: "Event Added"
            })
            window.location.reload();
        } catch {
            // toast.error("Something went wrong while creating")
            console.log("[ERROR] Something went wrong while creating User");
        }
    };

    const onSave = async () => {
        try {
            const values = form.getValues(); // Retrieve form values
            const response = await axios.put(`/api/editEvents/${eventUrlId}`, values);
            toast({
                title: "Congratulations",
                description: "Profile Updated Successfully.",
            });
            window.location.reload();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    // Render loader while data is being fetched
    if (loading) return <Loader />;


    return (
        <div className='py-4 px-6'>
            <Breadcrumb className='mb-4'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/eventManagement">Event Management</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Edit Event</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='text-4xl font-bold font-sans'>
                Event Management
            </h1>
            <div className='flex flex-col lg:flex-row md:flex-row'>
                <div className='w-full lg:w-1/3 md:w-1/2 py-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Hackathon..." {...field} disabled={!isEditing} />
                                        </FormControl>
                                        <FormDescription>
                                            This is publicly displayed title.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dateOfEvent"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild disabled={!isEditing}>
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
                                            Your date of Event.
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
                                            <Textarea placeholder="The Event is about..." {...field} disabled={!isEditing} />
                                        </FormControl>
                                        <FormDescription>
                                            This is publicly displayed.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                    {renderButtons()}
                </div>
                <div className='w-full py-4 lg:px-10 md:px-10'>
                    <AdminEventCard events={events} title='Upcoming Events' desc='Events you may be interested in' upcomingEventsActive={true} pastEventsActive={false} />
                </div>
            </div>
        </div>
    );
};

export default EditEventManagement;
