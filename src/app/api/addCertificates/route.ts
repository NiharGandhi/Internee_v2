// pages/api/projects.ts

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request,) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("UNAUTHORIZED", { status: 500 })
        }

        const { name, description, link, certificateUrl } = await req.json();

        const newCertificate = await db.certificate.create({
            data: {
                userId: userId,
                name: name,
                description: description,
                link: link,
                certificateUrl: certificateUrl
            }
        })

        return NextResponse.json(newCertificate);
    } catch (error) {
        console.log("ERROR API", error);
    }
}

export async function GET(req: Request,) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("UNAUTHORIZED", { status: 500 })
        }

        const usersCertificates = await db.certificate.findMany({
            where: {
                userId: userId
            }
        })

        return NextResponse.json(usersCertificates);
    } catch (error) {
        console.log("ERROR API", error);
    }
}