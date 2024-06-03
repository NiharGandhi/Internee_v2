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
import SearchInternshipsPage from './_components/SearchInternships';



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
            <SearchInternshipsPage internships={internships} />
        </div>
    );
}

export default InternshipsPage;