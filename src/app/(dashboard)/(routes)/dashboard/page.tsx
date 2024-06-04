"use client";

import { BookIcon, CalendarIcon, CogIcon, NetworkIcon, StarIcon, UserIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import useEvents from '@/hooks/useEvents';
import EventCard from '@/components/EventCard';
import useOnlineResources from '@/hooks/useOnlineResource';
import ResourceCard from '@/components/ResourceCard';
import NumberTicker from '@/components/magicui/number-ticker';
import useRecommendedBooks from '@/hooks/useRecommendedBooks';
import useUsefulTool from '@/hooks/useTool';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    {/* Insert your loader SVG here */}
    <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.764l4.065 2.329-1.346 2.338-4.119-2.371zM12 20c3.866 0 7-3.134 7-7h-4c0 2.761-2.239 5-5 5s-5-2.239-5-5H0c0 4.962 4.037 9 9 9z"></path>
    </svg>
  </div>
);

const Dashboard = () => {
  const { setTheme } = useTheme()

  const { events, loading, error } = useEvents();
  const { onlineResources, loadingRes, errorRes } = useOnlineResources();
  const { recommendedBooks, loadingBooks, errorBooks } = useRecommendedBooks();
  const { usefulTools, loadingTools, errorTools } = useUsefulTool();

  const [isNavOpen, setIsNavOpen] = useState(false); // State to track if navbar is open
  const [users, setUsers] = useState([]);
  const [subscription, setSubscription] = useState<boolean>(false);
  const [checkOutLink, setCheckOutLink] = useState("");

  // Function to toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Fetch users data from API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/allUsers');
        const data = await response.json();
        // console.log(data);
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
      } catch (error) {
        console.log("Checkout Link Error", error);
      }
    }
    fetchCheckOutLink();
  }, [])


  if (loading) return <div><Loader /></div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] overflow-hidden">
      <Navigation />
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