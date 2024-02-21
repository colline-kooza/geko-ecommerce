import React from 'react'

export default function Button({title,className}) {
  return (
    <button type="submit" className={`${className} text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>{title}</button>    
  )
}
