import { db } from "@/lib/db";
import { hasSubscription } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const hasSubscribed = await hasSubscription();

        return NextResponse.json(hasSubscribed);
    } catch (error) {
        console.log("[CHECK SUBSCRIPTION ERROR] " + error);
        return new NextResponse("[INTERNAL SERVER ERROR for CUSTOMER CHECK]" + error);
    }

    
}