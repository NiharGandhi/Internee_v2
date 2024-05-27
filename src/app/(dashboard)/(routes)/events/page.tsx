"use client";

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BarChart, BookIcon, CalendarIcon, NetworkIcon, UserIcon, UsersIcon } from 'lucide-react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import useEvents from '@/hooks/useEvents';
import EventCard from '@/components/EventCard';


const EventsPage = () => {

    const { events, loading, error } = useEvents();

    return (
        <div>
            <Breadcrumb className='mt-3 ml-10'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Events</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='font-bold text-4xl mt-2 px-10'>Events</h1>
            <div className="flex flex-col">
                <main className="flex-1 lg:p-6 px-4 py-4">
                    <div className="grid gap-6">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <EventCard events={events} />
                            <Card>
                                <CardHeader>
                                    <CardTitle>Past Events</CardTitle>
                                    <CardDescription>Events that have previously occured</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">Networking Event</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">June 15, 2023 - 7:00 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">Career Development Workshop</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">July 10, 2023 - 6:30 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">Alumni Reunion</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">August 1, 2023 - 8:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default EventsPage