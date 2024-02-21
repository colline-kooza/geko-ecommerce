import Link from 'next/link'
import React from 'react'
interface CategoryHeadProps {
    title: string;
  }
export default function CategoryHead({title}:CategoryHeadProps ) {
  return (
    <div className='lg:flex lg:flex-col w-full h-[50vh] bg-white hidden'>
     <div className='bg-[#024927] w-full h-[50%] '>
        <h1 className='lg:text-3xl font-light text-white flex items-center justify-center text-center py-4 '>{title}</h1>
     </div>
   <div className='grid lg:grid-cols-6   md:grid-cols-4  grid-cols-2  px-[5rem]'>
   <Link href="" className='flex flex-col hover:underline '>
   <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src='https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg' alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-sm">Sarah Smith</h2>
        <p className="font-semibold text-sm">Freelance Web Designer</p>
    </div>
   </Link>
   <Link href="" className='flex flex-col hover:underline '>
   <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src='https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg' alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-sm">Sarah Smith</h2>
        <p className="font-semibold text-sm">Freelance Web Designer</p>
    </div>
   </Link>
   <Link href="" className='flex flex-col hover:underline'>
   <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src='https://i.etsystatic.com/17665462/c/1941/1941/40/330/il/88b0e6/3970877247/il_300x300.3970877247_n9na.jpg' alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-sm">Sarah Smith</h2>
        <p className="font-semibold text-sm">Freelance Web Designer</p>
    </div>
   </Link>
   <Link href="" className='flex flex-col hover:underline'>
   <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src='https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-sm">Sarah Smith</h2>
        <p className="font-semibold text-sm">Freelance Web Designer</p>
    </div>
   </Link>
   <Link href="" className='flex flex-col hover:underline'>
   <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src='https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg' alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-sm">Sarah Smith</h2>
        <p className="font-semibold text-sm">Freelance Web Designer</p>
    </div>
   </Link>
   <Link href="" className='flex flex-col hover:underline'>
   <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src='https://i.etsystatic.com/9353657/r/il/ccdf94/3423095141/il_300x300.3423095141_khth.jpg' alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold text-sm">Sarah Smith</h2>
        <p className="font-semibold text-sm">Freelance Web Designer</p>
    </div>
   </Link>
   </div>
    </div>
  )
}
