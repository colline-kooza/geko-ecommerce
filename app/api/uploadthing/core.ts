import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 

export const ourFileRouter = {
  categoryUploader: f({ image: { maxFileSize: "1MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
  
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;