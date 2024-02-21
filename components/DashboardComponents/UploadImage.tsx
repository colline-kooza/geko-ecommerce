"use client"
import { UploadDropzone } from '@/utils/Uplaodthing';
import React , { useState } from 'react'
import { HiPencilSquare } from 'react-icons/hi2';

export default function SingleUplaodImage({ title ,label , imageUrl , setImageUrl , setUploadedName}:any) {

  return (
    <div className="col-span-2 flex flex-col mb-4">
    <div className='flex justify-between items-center'>
    <h2 className="font-medium mb-2">{title}</h2>
     {
      imageUrl?(
        <button
        className="text-white inline-flex gap-2 items-center bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-sm px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xs"
         onClick={() => setImageUrl('')}
       >
        <HiPencilSquare /> Change {title}
       </button>
      ):""
     }
    </div>
      {imageUrl ? (
        <>
          <img src={imageUrl} alt="tour Image" className="max-w-full max-h-40 mb-2 rounded-lg mt-4 object-contain" />
        </>
      ) : (
        <UploadDropzone endpoint="categoryUploader"
            onClientUploadComplete={(res: { url: string; name: string }[]) => { 
            setImageUrl(res[0].url);
            setUploadedName(res[0].name);
            alert('Upload Completed');
        }}
    />
    
      )}
</div>
  )
}
