import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';
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