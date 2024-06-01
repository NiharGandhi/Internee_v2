import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = auth();

        if (userId) {
            const user = await db.user.findFirst({
                where: {
                    userId: userId
                }
            });

            if (!user?.stripe_customer_id) {
                const customer = await stripe.customers.create({
                    email: String(user?.email)
                })

                await db.user.update({
                    where: {
                        id: user?.id
                    },
                    data: {
                        stripe_customer_id: customer.id
                    }
                })
            }

            const user2 = await db.user.findFirst({ where: { userId: userId } });
            return NextResponse.json(user2?.stripe_customer_id);
        }   
    } catch (error) {
        console.log("[STRIPE CREATE CUSTOMER ERROR]", error);
        return new NextResponse("[INTERNAL ERROR - CREATE CUSTOMER STRIP]", { status : 404 });
    } 
}