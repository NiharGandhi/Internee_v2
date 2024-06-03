"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
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
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';
import { XIcon } from 'lucide-react';

const SearchInternshipsPage = ({ internships } : { internships : any }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [internshipsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedOrganization, setSelectedOrganization] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [types, setTypes] = useState<string[]>([]);
    const [organizations, setOrganizations] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);

    // Extract all unique values for types and organizations
    useEffect(() => {
        const allTypes: Set<string> = new Set();
        const allOrganizations: Set<string> = new Set();
        const allLocations: Set<string> = new Set();

        internships.forEach((internship: { InternshipType: string; user: { name: string, Location : string } }) => {
            // Extract types
            if (internship.InternshipType) {
                allTypes.add(internship.InternshipType);
            }
            // Extract organizations
            if (internship.user.name) {
                allOrganizations.add(internship.user.name);
            }
            // Extract Location
            if (internship.user.Location) {
                allLocations.add(internship.user.Location);
            }
        });

        setTypes(Array.from(allTypes));
        setOrganizations(Array.from(allOrganizations));
        setLocations(Array.from(allLocations));
    }, [internships]);

    const filteredInternships = internships.filter((internship: { name: string; InternshipType: string; user: { name: string, Location : string }; InternshipDescription: string }) =>
        internship.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedType === '' || internship.InternshipType === selectedType) &&
        (selectedOrganization === '' || internship.user.name === selectedOrganization) &&
        (selectedLocation === '' || internship.user.Location === selectedLocation)
    );

    const indexOfLastInternship = currentPage * internshipsPerPage;
    const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
    const currentInternships = filteredInternships.slice(indexOfFirstInternship, indexOfLastInternship);

    const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleTypeChange = (value: React.SetStateAction<string>) => {
        setSelectedType(value);
        setCurrentPage(1);
    };

    const handleOrganizationChange = (value: React.SetStateAction<string>) => {
        setSelectedOrganization(value);
        setCurrentPage(1);
    };

    const handleLocationChange = (value: React.SetStateAction<string>) => {
        setSelectedLocation(value);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredInternships.length / internshipsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const clearFilters = () => {
        setSelectedType('');
        setSelectedOrganization('');
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
                        <BreadcrumbPage>Internships</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='font-bold text-4xl mt-2 px-10'>Internships</h1>
            <div className='py-4 px-8 space-y-4 space-x-4'>
                {/* Search Bar */}
                <Input
                    type="text"
                    placeholder="🔎 Search internships..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                {/* Filter Dropdowns */}
                <select
                    value={selectedType}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    className='filter-box'
                >
                    <option value="">All Types</option>
                    {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                <select
                    value={selectedOrganization}
                    onChange={(e) => handleOrganizationChange(e.target.value)}
                    className='filter-box'
                >
                    <option value="">All Organizations</option>
                    {organizations.map(org => (
                        <option key={org} value={org}>{org}</option>
                    ))}
                </select>
                <select
                    value={selectedLocation}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className='filter-box'
                >
                    <option value="">All Locations</option>
                    {locations.map(org => (
                        <option key={org} value={org}>{org}</option>
                    ))}
                </select>
                <Button variant="ghost" onClick={clearFilters}>Clear Filters</Button>
                {/* Internship Cards */}
                {currentInternships.map((internship: { id: React.Key | null | undefined; name: string; InternshipType: string; InternshipDescription: string; user: { id: string; name: string } }) => (
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
                            <Badge>{internship.InternshipType}</Badge>
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
                {/* Pagination Controls */}
                <div className="flex justify-center space-x-4 mt-4">
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
                    <span className='py-2'>Page {currentPage} of {Math.ceil(filteredInternships.length / internshipsPerPage)}</span>
                    <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredInternships.length / internshipsPerPage)}>Next</Button>
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

    const internships = await db.createInternship.findMany({
        include: {
            user: true,
        }
    });

    return {
        props: { internships },
    };
}

export default SearchInternshipsPage;
