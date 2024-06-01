import { db } from "@/lib/db";
import { hasSubscription } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await db.user.findFirst({
        where: {
            userId: userId
        }
    })

    const hasSubscribed = await hasSubscription();

    return NextResponse.json(hasSubscribed);
}