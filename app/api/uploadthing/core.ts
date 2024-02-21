import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  categoryUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {}
  ),
  productImages: f({
    image: { maxFileSize: "8MB", maxFileCount: 6 },
  }).onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    // console.log("Metadata", metadata);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
