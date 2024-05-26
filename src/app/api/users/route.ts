import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const { name, institutionName, educationLevel, yearOfGrad, skills, email } = await req.json();

        if (!userId) {
            return new NextResponse("UnAuthorized", { status: 401 });
        }

        // Check if the user already exists
        const existingUser = await db.user.findUnique({
            where: { userId: userId },
        });

        if (existingUser) {
            // If the user exists, update the user data
            const updateUser = await db.user.update({
                where: {
                    userId: userId,
                },
                data: {
                    name: name,
                    EducationLevel: educationLevel,
                    InstitutionName: institutionName,
                    GraduationDate: yearOfGrad,
                    skills: skills,
                    email: email,
                }
            })
        } else {
            // If the user does not exist, create a new user
            const newUser = await db.user.create({
                data: {
                    userId: userId,
                    name: name,
                    EducationLevel: educationLevel,
                    InstitutionName: institutionName,
                    GraduationDate: yearOfGrad,
                    skills: skills,
                    email: email,
                },
            });

            return NextResponse.json(newUser);
        }
    } catch (error) {
        console.log("[USER CREATION/UPDATE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const existingUser = await db.user.findUnique({
            where: { userId: userId },
        });

        if (!existingUser) {
            return new NextResponse("User Not Found", { status: 404 });
        }

        return NextResponse.json(existingUser);
    } catch (error) {
        console.error("[USER RETRIEVAL]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
