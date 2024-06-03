import { db } from '@/lib/db';

import { auth } from '@clerk/nextjs/server';

import { redirect } from 'next/navigation';
import Link from 'next/link';

import React from 'react';

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbPage, 
    BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

import ApplicationStatusLabel from '@/components/ApplicationStatusLabel';



const InternshipsPage = async () => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const user = await db.user.findFirst({
        where: {
            userId: userId
        }
    })

    const appliedInternships = await db.application.findMany({
        where: {
            userId: user?.id
        },
        include: {
            internship: true
        }
    });

    return (
        <div>
            <Breadcrumb className='mt-3 ml-10'>
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
                        <BreadcrumbPage>Applied Internships</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='font-bold text-4xl mt-2 px-10'>Applied Internships</h1>
            <div className='py-4 px-8'>
                {appliedInternships.map(internships => (
                    <Link key={internships.id} href={`/internships/${internships.internship.id}`}>
                        <Card className='mb-4'>
                            <CardHeader>
                                <CardTitle className='font-bold'>{internships.internship.name}</CardTitle>
                                <CardDescription>{internships.internship.InternshipDescription}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                Status:
                                <ApplicationStatusLabel applicationId={internships.id} />
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default InternshipsPage;