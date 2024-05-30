import Header from '@/components/header';
import { db, recruiterdb } from '@/lib/db';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link';
import { ArrowBigRight, CalendarIcon, DownloadCloudIcon, FileIcon, LinkIcon, PencilIcon } from 'lucide-react';


const SelectedInternshipPage = async ({
    params
}: {
    params: { internshipId: string }
}) => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const internship = await recruiterdb.createInternship.findUnique({
        where: {
            id: params.internshipId,
        }
    })

    const company = await recruiterdb.company.findUnique({
        where: {
            userId: internship?.userId
        }
    })

    return (
        <div>
            <Breadcrumb className='mt-2 ml-10'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/internships">Internships</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{internship?.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='py-4 px-8'>
                <Card>
                    <CardHeader>
                        <CardTitle className='font-bold'>{internship?.name}</CardTitle>
                        <CardDescription>{company?.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {internship?.Paid && (
                            <Badge>{internship.AmountPaid}</Badge>
                        )}
                        <div className='flex flex-col py-2 justify-center'>
                            <div>
                                Education Level: {internship?.EducationLevel}
                            </div>
                            <div>
                                Internship Description: {internship?.InternshipDescription}
                            </div>
                            <div>
                                Requirements: {internship?.InternshipRequirement}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        {/* <Popover>
                            <PopoverTrigger asChild>
                                <Button>Contact Me</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 px-4">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Email ID</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover> */}
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default SelectedInternshipPage