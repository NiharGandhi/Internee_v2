import { db } from "@/lib/db";
import { createCheckoutLink } from "@/lib/stripe";
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
    } else {
        try {
            const checkOutLink = await createCheckoutLink("" + user?.stripe_customer_id);

            return NextResponse.json(checkOutLink);
        } catch (error) {
            console.log("Error: ", error)
            return new NextResponse("[CHECKOUT LINK API ERROR]", { status: 404 });
        }
    }
}