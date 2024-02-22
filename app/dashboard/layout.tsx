import React, { ReactNode } from 'react';
import Sidebar from '@/components/dashboard/SideBar';

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className='bg-slate-50 text-black w-full flex min-h-screen'>
   <div className='lg:w-[20%] lg:block hidden'>
   <Sidebar />
   </div>
      <div className='lg:w-[90%] p-4 w-full'>
        {children}
      </div>
    </div>
  );
}
