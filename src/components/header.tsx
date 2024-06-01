import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import ShimmerButton from './magicui/shimmer-button'
import { hasSubscription } from '@/lib/stripe'


const Header = async () => {

    const hasSubscribed = await hasSubscription();
    
    return (
        <div className='bg-[#6c5ce7] dark:border-gray-800 dark:bg-gray-950 flex items-center justify-between py-2 px-4'>
            {hasSubscribed ? (
                <>
                    <Link href="/">
                        <h1 className='font-bold text-white text-4xl font-sans'>Internee <span className='text-gradient'>Pro</span></h1>
                    </Link>
                </>
            ) : (
                <>
                    <Link href="/">
                        <h1 className='font-bold text-white text-4xl font-sans'>Internee</h1>
                    </Link>
                </>
            )}

            <div className='flex items-center ml-auto'>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant="default">Sign In</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <Link
                        href="/dashboard"
                    >
                        <ShimmerButton className='py-1 mr-2'>Dashboard</ShimmerButton>
                    </Link>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Header