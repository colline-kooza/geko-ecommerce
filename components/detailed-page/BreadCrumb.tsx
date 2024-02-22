import React from "react";

export default function BreadCrumb({currentPage }:any) {
  return (
    <div className='flex items-center justify-center mt-3'>
      <ol
        className='flex items-center whitespace-nowrap'
        aria-label='Breadcrumb'
      >
        <li className='inline-flex items-center'>
          <a
            className='flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500'
            href='/'
          >
            Home
          </a>
          <svg
            className='flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </li>
        <li
          className='inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200'
          aria-current='page'
        >
         {currentPage}
        </li>
      </ol>
    </div>
  );
}
