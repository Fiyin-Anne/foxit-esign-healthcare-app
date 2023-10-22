'use client'
 
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='main-container w-4/5 flex flex-col justify-center items-center space-y-4'>
      <h1 className='text-4xl font-medium'>Something went wrong! &#129488;</h1>
        <button className='btn btn-primary' onClick={() => reset()}>Try again</button>
    </div>
  )
}