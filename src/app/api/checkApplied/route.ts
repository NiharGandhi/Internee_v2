import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    console.log("GET URL: ", req.url)
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("userId");
    const internshipId = searchParams.get("internshipId");

    if (!id || !internshipId) {
        return new NextResponse("UNAUTHORIZED", { status: 401 })
    }

    try {
        const applied = await db.application.findFirst({
            where: {
                userId: id,
                internshipId: internshipId,
            }
        })

        return NextResponse.json(applied);
    } catch (error) {
        console.log("[APPLY CHECK API ERROR]", error)
    }   
}

export async function POST(req: Request) {

    const { id, internshipId } = await req.json();
    console.log("APPLIED ID: ",id);
    console.log("APPLIED INTID: ",internshipId);

    console.log("POST");

    if (!id || !internshipId) {
        return new NextResponse("UNAUTHORIZED", { status: 401 })
    }

    const user = await db.user.findUnique({
        where: {
            id: id,
        }
    })

    if (!user) {
        console.log("UNAUTHORIZED", { status: 401 })
    }

    try {
        const applied = await db.application.create({
            data: {
                userId: id,
                internshipId: internshipId,
            }
        })

        console.log("APPLIED: ", applied);

        return NextResponse.json(applied);
    } catch (error) {
        console.log("[APPLY CHECK API ERROR]", error)
    }
}