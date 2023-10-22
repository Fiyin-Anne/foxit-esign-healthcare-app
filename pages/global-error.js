'use client'
import NavBar from './components/NavBar';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body>
        <NavBar />
        <div className='main-container w-4/5 flex flex-col justify-center items-center space-y-4'>
          <h1 className='text-4xl font-medium'>Something went wrong! &#129488;</h1>
          <button className='btn btn-primary' onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}