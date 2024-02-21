import React from 'react'

export default function EditBtn() {
  return (
    <div>
      <Link href={`/dashboard/update/${cat.id}`} className="cursor-pointer text-xs font-bold sm:text-sm md:text-base text-green-600 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
</Link>
    </div>
  )
}
