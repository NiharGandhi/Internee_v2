import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { db } from "./db";


export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2024-04-10',
});

export async function hasSubscription() {
    const { userId } = auth();

    if (userId) {
        const user = await db.user.findFirst({ where: { userId: userId } });

        if (!user?.stripe_customer_id) {
            return 0
        }

        const subscriptions = await stripe.subscriptions.list({
            customer: String(user?.stripe_customer_id)
        })

        return subscriptions.data.length > 0;
    }

    return false;
}

export async function createCheckoutLink(customer: string) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: process.env.RETURN_URL + "/dashboard",
        cancel_url: process.env.RETURN_URL + "/dashboard",
        customer: customer,
        line_items: [
            {
                price: 'price_1PMnvHImZQQ97MylyMHTFy28',
                quantity: 1
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

export async function generateCustomerPortalLink(customerId: string) {
    try {

        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: process.env.RETURN_URL + "/myProfile",
        });

        // console.log()

        return portalSession.url;
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

export async function createCustomerIfNull() {
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
        return user2?.stripe_customer_id;
    }

}