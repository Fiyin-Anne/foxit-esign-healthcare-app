'use client'

import Link from 'next/link';
 
export default function Custom500() {
  return (
    <div className='main-container w-4/5 flex flex-col justify-center items-center space-y-4'>
      <h1 className='text-4xl font-medium'>500 - Server-side error occurred &#129300;</h1>
      <Link className='btn btn-primary' href="/">Return Home</Link>
    </div>
  )
}