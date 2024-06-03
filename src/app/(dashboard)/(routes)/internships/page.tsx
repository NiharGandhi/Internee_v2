import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

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
import Header from '@/components/header';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { format } from 'date-fns';



const InternshipsPage = async () => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const internships = await db.createInternship.findMany({
        include: {
            user: true,
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
                        <BreadcrumbPage>Internships</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='font-bold text-4xl mt-2 px-10'>Internships</h1>
            <div className='py-4 px-8'>
                {internships.map(internship => (
                    <Card key={internship.id} className='mb-4'>
                        <CardHeader>
                            <CardTitle className='font-bold'>{internship.name}</CardTitle>
                            <CardDescription>
                                <Link href={`/organizations/${internship.user.id}`}>
                                    {internship.user.name}
                                </Link>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className='flex flex-col lg:flex-row lg:space-x-2'>
                                <h3 className='font-semibold'>Description:</h3>
                                <p className='text-md'>{internship.InternshipDescription}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link className='ml-auto' href={`/internships/${internship.id}`}>
                                <Button>
                                    Explore
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default InternshipsPage;