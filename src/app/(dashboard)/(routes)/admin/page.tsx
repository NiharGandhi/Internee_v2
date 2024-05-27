"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth, getAuth } from '@clerk/nextjs/server';
import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Admin = () => {
  return (
    <div>
      <Link href={"/admin/eventManagement"}>
        <Button>Add Event</Button>
      </Link>
    </div>
  )
}

export default Admin