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
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft } from 'lucide-react';
import FallBack from "../../../../../public/fallback.png";



const AllOrganizationPage = async () => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const companies = await db.company.findMany();

    return (
        <div>
            <Breadcrumb className='mt-3 ml-10'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Organizations</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {companies.map((company) => (
                <div key={company.id} className='px-4 py-2'>
                    <Link href={`/organizations/${company.id}`}>
                        <Card className='px-4 py-2'>
                            <CardHeader className='font-bold text-4xl'>{company.name}</CardHeader>
                            <Badge className='ml-6'>{company.Location}</Badge>
                            <CardDescription className='rounded-lg whitespace-pre-wrap ml-6 mt-4'>{company.CompanyDescription}</CardDescription>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default AllOrganizationPage;