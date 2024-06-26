"use client";

import Link from 'next/link';
import { useTheme } from "next-themes"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useEvents from '@/hooks/useEvents';
import useOnlineResources from '@/hooks/useOnlineResource';
import useRecommendedBooks from '@/hooks/useRecommendedBooks';
import useUsefulTool from '@/hooks/useTool';

import { Button } from '@/components/ui/button';
import { CardTitle, 
  CardDescription, 
  CardHeader, 
  CardContent, 
  Card 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from '@/components/ui/label';

import EventCard from '@/components/EventCard';
import ResourceCard from '@/components/ResourceCard';

import NumberTicker from '@/components/magicui/number-ticker';

import { 
  BookIcon, 
  BriefcaseBusinessIcon, 
  Building2Icon, 
  CalendarIcon, 
  LucideCheckCheck, 
  Moon, 
  NetworkIcon, 
  Sun, 
  UserIcon, 
  UsersIcon 
} from 'lucide-react';
import { Loader } from '@/components/Loader';

const Dashboard = () => {
  const { setTheme } = useTheme()

  const { events, loading, error } = useEvents();
  const { onlineResources, loadingRes, errorRes } = useOnlineResources();
  const { recommendedBooks, loadingBooks, errorBooks } = useRecommendedBooks();
  const { usefulTools, loadingTools, errorTools } = useUsefulTool();

  const [userData, setUserData] = useState<any>(null);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track if navbar is open
  const [users, setUsers] = useState([]);
  const [subscription, setSubscription] = useState<boolean>(false);
  const [checkOutLink, setCheckOutLink] = useState("");
  const [loaded, setLoaded] = useState(true);

  // Function to toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    // Fetch users data from API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/allUsers');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const createUserStripeId = async () => {
      try {
        const response = await axios.get("/api/stripeCreateCustomer")
      } catch (error) {
        console.log("ERROR CREATING CURSTOMER [STRIPE]", error);
      }
    }
    createUserStripeId();
  }, []);

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        const response = await axios.get("/api/checkSubscription");
        setSubscription(response.data);
      } catch (error) {
        console.error("Error fetching subscription data:", error);
      }
    }
    fetchSubscriptionData();
  }, [])

  useEffect(() => {
    const fetchCheckOutLink = async () => {
      try {
        const response = await axios.get("/api/stripeCheckoutLink");
        setCheckOutLink(response.data);
        setLoaded(false);
      } catch (error) {
        console.log("Checkout Link Error", error);
      }
    }
    fetchCheckOutLink();
  }, [])


  if (loading || loaded || loadingRes || loadingBooks || loadingTools) return <div><Loader /></div>;
  if (error || errorRes || errorBooks || errorTools) return <div>{error}</div>;

  if (userData === null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">Please complete your profile to access the app&apos;s features.</p>
        <Link href="/myProfile">
          <Button>My Profile</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] overflow-hidden">
      {/* Mobile Navbar */}
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
            href="/organizations"
          >
            <Building2Icon className="h-4 w-4" />
            Organizations
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/internships"
          >
            <BriefcaseBusinessIcon className="h-4 w-4" />
            Internships
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/internships/appliedInternships"
          >
            <LucideCheckCheck className="h-4 w-4" />
            Applied Internships
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
            My Profile
          </Link>
          <div className='mt-4'>
            {!subscription && (
              <Link href={"" + checkOutLink}>
                <Button
                  className='w-full'
                  variant="upgrade"
                >
                  Upgrade to PRO
                </Button>
              </Link>
            )}
          </div>
          <Label className='mt-4'>Theme:</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className='w-full'>
              <Button variant="outline" size="icon" className="mt-auto">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='w-full'>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              Users
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/organizations"
            >
              <Building2Icon className="h-4 w-4" />
              Organizations
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/internships"
            >
              <BriefcaseBusinessIcon className="h-4 w-4" />
              Internships
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/internships/appliedInternships"
            >
              <LucideCheckCheck className="h-4 w-4" />
              Applied Internships
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
              My Profile
            </Link>
            <div className='mt-4'>
              {!subscription && (
                <Link href={"" + checkOutLink}>
                  <Button
                    className='w-full'
                    variant="upgrade"
                  >
                    Upgrade to PRO
                  </Button>
                </Link>
              )}
            </div>
            <Label className='mt-4'>Theme:</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='w-full'>
                <Button variant="outline" size="icon" className="mt-auto">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className='w-full'>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    <div className="text-4xl font-bold">
                      <NumberTicker value={users.length} direction='up'></NumberTicker>
                    </div>
                    <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Events</CardTitle>
                  <CardDescription>Number of Events (Including those of past)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">
                      <NumberTicker value={events.length} direction='up'></NumberTicker>
                    </div>
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
                    <div className="text-4xl font-bold">
                      <NumberTicker value={onlineResources.length + usefulTools.length + recommendedBooks.length} direction='up'></NumberTicker>
                    </div>
                    <BookIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ResourceCard resources={onlineResources} title='Online Resouces' cardDesc='Useful links and resources for interns' />
              <EventCard events={events} title='Upcoming Events' desc='Events you may be interested in' upcomingEventsActive pastEventsActive={false}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard