"use client";

import React, { useEffect, useState } from 'react';

import { db } from '@/lib/db';

import { auth } from '@clerk/nextjs/server';

import { redirect } from 'next/navigation';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbPage, 
    BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import FallBack from "../../../../../../public/fallback.png";

const SearchOrganizationsPage = ({ companies } : { companies : any }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [companiesPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [locations, setLocations] = useState<string[]>([]);

    // Extract all unique values for locations
    useEffect(() => {
        const allLocations: Set<string> = new Set();

        companies.forEach((company: { Location: string }) => {
            if (company.Location) {
                allLocations.add(company.Location);
            }
        });

        setLocations(Array.from(allLocations));
    }, [companies]);

    const filteredCompanies = companies.filter((company: { name: string; Location: string; CompanyDescription: string }) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedLocation === '' || company.Location === selectedLocation)
    );

    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

    const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleLocationChange = (value: React.SetStateAction<string>) => {
        setSelectedLocation(value);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredCompanies.length / companiesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const clearFilters = () => {
        setSelectedLocation('');
        setCurrentPage(1);
    };

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
            <h1 className='font-bold text-4xl mt-2 px-10'>Organizations</h1>
            <div className='py-4 px-8 space-y-4 space-x-4'>
                {/* Search Bar */}
                <div className='flex items-center space-x-2'>
                    <Input
                        type="text"
                        placeholder="🔎 Search organizations..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                {/* Filter Dropdown */}
                <div className='space-x-2'>
                    <select
                        value={selectedLocation}
                        onChange={(e) => handleLocationChange(e.target.value)}
                        className='filter-box'
                    >
                        <option value="">All Locations</option>
                        {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    <Button variant="ghost" onClick={clearFilters}>Clear Filters</Button>
                </div>
                {/* Company Cards */}
                {currentCompanies.map((company: { id: React.Key | null | undefined; name: string; Location: string; CompanyDescription: string; CompanyLogoUrl: string; }) => (
                    <div key={company.id} className='py-2'>
                        <Link href={`/organizations/${company.id}`}>
                            <Card className=''>
                                <CardHeader className='font-bold text-4xl'>
                                    <div className='flex'>
                                        <Image
                                            src={company?.CompanyLogoUrl || FallBack}
                                            alt='Logo'
                                            width={50}
                                            height={50}
                                            className='h-[50px]'
                                        />
                                        <div className='ml-4'>
                                            <CardTitle>{company.name}</CardTitle>
                                            <CardDescription>
                                                {company.Location}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <p className='text-muted-foreground'>About Us:</p>
                                    </div>
                                    <p className='rounded-lg whitespace-pre-wrap'>
                                        {company.CompanyDescription}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
                {/* Pagination Controls */}
                <div className="flex justify-center space-x-4 mt-4">
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
                    <span className='py-2'>Page {currentPage} of {Math.ceil(filteredCompanies.length / companiesPerPage)}</span>
                    <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredCompanies.length / companiesPerPage)}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const companies = await db.company.findMany();

    return {
        props: { companies },
    };
}

export default SearchOrganizationsPage;
