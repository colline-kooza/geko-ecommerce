"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";


export default function FormHeader({ title , link }:any) {
  const router = useRouter();
  return (
    <div className='text-white py-5 px-8 rounded-lg flex items-center justify-between bg-zinc-950'>
      <h2 className="font-bold text-lg">{title}</h2>
      <Link href={link}>
        <IoMdArrowRoundBack className='w-6 h-6' />
      </Link>
    </div>
  );
}
