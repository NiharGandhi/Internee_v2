import { PrismaClient } from "@prisma/client";
import { PrismaClient as RecruiterPrismaClient } from "../../prisma/recruiter";

declare global {
    var prisma: PrismaClient | undefined;
    var recruiter: RecruiterPrismaClient | undefined;
};

const db = globalThis.prisma || new PrismaClient();
const recruiterdb = globalThis.recruiter || new RecruiterPrismaClient();

export { db, recruiterdb };


if (process.env.NODE_ENV !== "production") globalThis.prisma = db;