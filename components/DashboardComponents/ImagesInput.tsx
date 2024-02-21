"use client";
import React from "react";
import Image from "next/image";
import { RiEditFill } from "react-icons/ri";
import { HiPencilSquare } from "react-icons/hi2";
import { UploadDropzone } from "@/utils/Uplaodthing";

export default function ImagesInput({
  label,
  images = [],
  setImages,
  className = "col-span-full",
  endpoint,
}: any) {
  const changeImage = (index: any) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    // console.log(`Changing image at index ${index}`);
  };

  return (
    <div className={className}>
      <div className='flex flex-col items-start justify-between mb-4'>
        <label
          htmlFor='course-image'
          className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
        >
          {label}
        </label>

        {images.length > 0 && (
          <div className='flex flex-col mb-4 sm:flex-row md:items-center sm:gap-8 gap-4'>
            <button
              className='text-white inline-flex gap-2 md:items-center bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg lg:text-sm px-5 py-4 sm:py-2.5 text-center md:text-xs justify-center sm:justify-normal'
              onClick={() => setImages([])}
            >
              <RiEditFill /> Change All Images
            </button>
            <span className='font-bold'>
              You can also click on the image to make remove it
            </span>
          </div>
        )}
        <div className='w-full'>
          {images.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {images.map((imageUrl: any, index: any) => (
                <div
                  key={index}
                  className='relative cursor-pointer'
                  onClick={() => changeImage(index)}
                >
                  <button
                    className='text-zinc-950 font-semibold inline-flex gap-2 items-center border border-black focus:outline-none rounded-lg lg:text-sm px-5 py-2.5 text-center mb-4 text-xs'
                    onClick={() => changeImage(index)}
                  >
                    <HiPencilSquare /> Remove Image
                  </button>
                  <Image
                    src={imageUrl}
                    alt={`Product image ${index + 1}`}
                    width={300}
                    height={200}
                    className='object-cover w-full rounded-lg max-h-52'
                  />
                </div>
              ))}
            </div>
          ) : (
            <UploadDropzone
              endpoint={endpoint}
              onClientUploadComplete={(res) => {
                const newImages = res.map((item) => item.url);
                setImages([...images, ...newImages]);
                // console.log("Files: ", newImages);
                // console.log("Images/Image have uploaded successfully");
              }}
              onUploadError={(error) => {
                // console.log("Images failed uploading");
                console.log(`ERROR! ${error.message}`);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
