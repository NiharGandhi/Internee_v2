import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: Request,) {
    try {
        const { userId } = auth();
        const { pathname } = parse(req.url);
        console.log(pathname)
        const eventId = pathname?.split("/").pop();

        if (!userId) {
            return new NextResponse("UNAUTHORIZED", { status: 500 })
        }

        const adminEvent = await db.events.findUnique({
            where: {
                id: eventId
            }
        })

        return NextResponse.json(adminEvent);
    } catch (error) {
        console.log("ERROR API", error);
    }
}

export async function PUT(req: Request,) {
    try {
        const { userId } = auth();

        const { pathname } = parse(req.url);
        console.log(pathname)
        const eventId = pathname?.split("/").pop();
        console.log(eventId);
        
        if (!userId) {
            return new NextResponse("UNAUTHORIZED", { status: 500 })
        }

        const { title, description, dateTime } = await req.json();

        const newEvent = await db.events.update({
            where: {
                id: eventId
            },
            data: {
                title: title,
                description: description,
                dateTime: dateTime,
            }
        })

        return NextResponse.json(newEvent);
    } catch (error) {
        console.log("ERROR API", error);
    }
}