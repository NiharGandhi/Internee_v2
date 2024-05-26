import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BarChart, BookIcon, CalendarIcon, LinkIcon, NetworkIcon, PenToolIcon, UserIcon, UsersIcon } from 'lucide-react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from 'next/link';


const ResourcesPage = () => {
    return (
        <div>
            <Breadcrumb className='mt-3 ml-10'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Resources</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='font-bold text-4xl mt-2 px-10'>Resources</h1>
            <div className="flex flex-col">
                <main className="flex-1 lg:p-6 px-4 py-4">
                    <div className="grid gap-6">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Online Resources</CardTitle>
                                    <CardDescription>Useful links and resources for interns</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <LinkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="https://learning.linkedin.com/" target="_blank">
                                                        LinkedIn Learning
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Develop new skills with online courses
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <LinkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="https://www.coursera.org/" target="_blank">
                                                        Coursera
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Learn New skills and obtain certifications</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <LinkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="https://www.udemy.com/" target="_blank">
                                                        Udemy
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Learn New skills and obtain certifications
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recommended Books</CardTitle>
                                    <CardDescription>Books to help you grow and develop your career</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <BookIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        Atomic Habits
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">By James Clear</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <BookIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        The Lean Startup
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">By Eric Ries</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <BookIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        Mindset
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">By Carol Dweck</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <BookIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        How to Win Friends and Influence People
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">By Dale Carnegie</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Useful Tools</CardTitle>
                                    <CardDescription>Productivity and collaboration tools for interns</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <PenToolIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        Notion
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    All-in-one workspace for notes, tasks, and collaboration
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <PenToolIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        Trello
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Kanban-style project management tool</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <PenToolIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        Figma
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Collaborative design and prototyping tool
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                                <PenToolIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    <Link href="#" target="_blank">
                                                        Slack
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Instant messaging and team collaboration tool
                                                </p>
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

export default ResourcesPage