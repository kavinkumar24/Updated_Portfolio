import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between mx-auto items-center h-14 px-10 w-full md:px-20 lg:md:px-16 text-zinc-00 z-50 bg-gradient-to-b from-gray-200 to-gray-100  border-t-2 border-indigo-300'>
      <h1>Copyright <span className='text-blue-600 text-base font-bold'>©</span> Kavin Kumar P</h1>
      <h1 className='text-base text-red-500'>2024 to 2035</h1>
    </div>
  )
}
