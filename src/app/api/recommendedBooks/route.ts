import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const { name, author, link } = await req.json();

        if (!userId) {
            return new NextResponse("UnAuthorized", { status: 401 });
        }


        // If the user does not exist, create a new user
        const newRecommendedBook = await db.recommendedBooks.create({
            data: {
                name: name,
                author: author,
                link: link,
            },
        });

        return NextResponse.json(newRecommendedBook);

    } catch (error) {
        console.log("[ONLINE RESOURCE CREATION/UPDATE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const existingRecommendedBook = await db.recommendedBooks.findMany();

        if (!existingRecommendedBook) {
            return new NextResponse("Not Online Resources Found", { status: 404 });
        }

        return NextResponse.json(existingRecommendedBook);
    } catch (error) {
        console.error("[USER RETRIEVAL]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}