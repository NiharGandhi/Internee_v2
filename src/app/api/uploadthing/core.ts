import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth(); 
    if (!userId) {
        throw new Error("UNAUTHORIZED");
    } else {
        return { userId };
    }
}

export const ourFileRouter = {
    userResume: f({ pdf: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
        
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;