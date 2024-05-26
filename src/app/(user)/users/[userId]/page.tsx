import Header from '@/components/header';
import { db } from '@/lib/db';
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


const UserPublicPage = async ({
    params
}: {
    params: { userId: string }
}) => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const user = await db.user.findUnique({
        where: {
            id: params.userId,
        }
    })


    return (
        <div>
            <Header />
            <Breadcrumb className='mt-2 ml-10'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{user?.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='py-4 px-8'>
                <Card>
                    <CardHeader>
                        <CardTitle className='font-bold'>{user?.name}</CardTitle>
                        <CardDescription>{user?.InstitutionName}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Badge>{user?.skills}</Badge>
                        <div className='flex flex-col py-2 justify-center'>
                            <div>
                                Education Level: {user?.EducationLevel}
                            </div>
                            <div>
                                Graduation Date: {user?.GraduationDate ? user.GraduationDate.toDateString() : 'N/A'}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Popover>
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
                        </Popover>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default UserPublicPage