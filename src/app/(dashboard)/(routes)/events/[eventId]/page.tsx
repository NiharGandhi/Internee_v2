import React from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const EventIdPage = async ({
    params
} : {
    params: { id: string }
}) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const event = await db.events.findFirst({
        where: {
            id: params.id
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
                      <BreadcrumbLink href="/events">Events</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>{event?.title}</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>

          <div className='py-4 px-8'>
              <Card>
                  <CardHeader>
                      <CardTitle className='font-bold flex'>
                          {event?.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className='flex flex-col mt-4 justify-center space-y-2 mb-4'>
                          {event?.description !== 'null' && (
                              <>
                                  <div>
                                      <h2 className='font-semibold'>Description:</h2>
                                      <ScrollArea className='h-[270px] lg:h-[100px] whitespace-pre-wrap font-light'>
                                          {event?.description}
                                      </ScrollArea>
                                  </div>
                                  <Separator />
                              </>
                          )}
                          <div className='flex'>
                              <h2 className='font-semibold mr-2'>Graduation Date:</h2>
                              {event?.dateTime ? event.dateTime.toDateString() : 'N/A'}
                          </div>
                          <Separator />
                      </div>
                  </CardContent>
              </Card>
          </div>
    </div>
  )
}

export default EventIdPage