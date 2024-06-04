import { db } from "@/lib/db";
import { generateCustomerPortalLink, hasSubscription } from "@/lib/stripe";
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

    if (!user?.stripe_customer_id) {
        return NextResponse.json(null);
    }

    try {
        const portalLink = await generateCustomerPortalLink("" + user?.stripe_customer_id);

        return NextResponse.json(portalLink);   
    } catch (error) {
        console.log("Error: ", error)
        return new NextResponse("[PORTAL LINK API ERROR]", { status : 404});
    }
}