"use client";

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BarChart, BookIcon, CalendarIcon, NetworkIcon, UserIcon, UsersIcon } from 'lucide-react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import useEvents from '@/hooks/useEvents';
import EventCard from '@/components/EventCard';
import { isBefore } from 'date-fns';

interface Event {
    id: string;
    title: string;
    dateTime: string;
}

interface EventsPageProps {
    events: Event[];
}



const EventsPage: React.FC<EventsPageProps> = () => {
    const { events, loading, error } = useEvents();

    const currentDate = new Date();
    const pastEvents = events.filter(event => isBefore(new Date(event.dateTime), currentDate));
    const upcomingEvents = events.filter(event => !isBefore(new Date(event.dateTime), currentDate));

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
                            <div className="container mx-auto px-4">
                                <div>
                                    {upcomingEvents.length > 0 ? (
                                        <EventCard events={upcomingEvents} title='Upcoming Events' desc='Events you may be interested in' upcomingEventsActive pastEventsActive={false}/>
                                    ) : (
                                        <p className="text-sm text-gray-500 dark:text-gray-400">No upcoming events available.</p>
                                    )}
                                </div>
                            </div>
                            <div className="container mx-auto px-4">
                                <div>
                                    {pastEvents.length > 0 ? (
                                        <EventCard events={pastEvents} title='Past Events' desc='Events you may have been interested in' upcomingEventsActive={false} pastEventsActive/>
                                    ) : (
                                        <p className="text-sm text-gray-500 dark:text-gray-400">No past events available.</p>
                                    )}
                                </div>  
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default EventsPage