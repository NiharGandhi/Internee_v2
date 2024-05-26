"use client";

import { BarChart, BookIcon, CalendarIcon, NetworkIcon, UserIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track if navbar is open

  // Function to toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] overflow-hidden">
      {/* Navbar */}
      <div className={`lg:hidden h-full flex-col border-r bg-[#6c5ce7] dark:border-gray-800 dark:bg-gray-950 absolute top-0 left-0 transform lg:translate-x-0 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        {/* Close button */}
        <button onClick={toggleNav} className="absolute top-3 right-3 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="grid gap-2 px-4 mt-14 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/users"
          >
            <NetworkIcon className="h-4 w-4" />
            Users
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/events"
          >
            <CalendarIcon className="h-4 w-4" />
            Events
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/resources"
          >
            <BookIcon className="h-4 w-4" />
            Resources
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/myProfile"
          >
            <UserIcon className="h-4 w-4" />
            Profile
          </Link>
        </nav>
      </div>
      {/* Mobile Navbar Toggle Button */}
      <div className="lg:hidden">
        <button onClick={toggleNav} className="p-3">
          {isNavOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {/* Sidebar Content */}
      <div className="h-full flex-col border-r bg-[#6c5ce7] dark:border-gray-800 dark:bg-gray-950 hidden lg:block">
        <div className="flex-1">
          <nav className="grid gap-2 px-4 py-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/users"
            >
              <NetworkIcon className="h-4 w-4" />
              Connections
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/events"
            >
              <CalendarIcon className="h-4 w-4" />
              Events
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="resources"
            >
              <BookIcon className="h-4 w-4" />
              Resources
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/myProfile"
            >
              <UserIcon className="h-4 w-4" />
              Profile
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex-1 lg:p-6 px-4 py-4">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>Current Users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">125</div>
                    <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events youre attending</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">8</div>
                    <CalendarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                  <CardDescription>Helpful resources for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">42</div>
                    <BookIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Users by Profile</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Your upcoming events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Internee Networking Event</h3>
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

export default Dashboard