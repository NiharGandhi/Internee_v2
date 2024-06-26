import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const existingUsers = await db.user.findMany();

        if (!existingUsers) {
            return NextResponse.json("No Users Yet")
        }

        return NextResponse.json(existingUsers);
    } catch (error) {
        console.error("[ALL USERS RETRIEVAL]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
