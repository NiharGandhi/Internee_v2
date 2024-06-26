import { db } from '@/lib/db';

import { auth } from '@clerk/nextjs/server';

import { redirect } from 'next/navigation';

import React from 'react';

import SearchOrganizationsPage from './_components/SearchOrganizations';



const AllOrganizationPage = async () => {

    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }

    const companies = await db.company.findMany();

    return (
        <div>
            <SearchOrganizationsPage companies={companies} />
        </div>
    );
}

export default AllOrganizationPage;