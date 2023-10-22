'use client'

import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomError = ({ retry = '/' }) => {
    return (
        <div className='main-container w-4/5 flex flex-col justify-center items-center space-y-4'>
            <h1 className='text-4xl font-medium'>Something went wrong! &#129488;</h1>
            <div className="card-actions justify-evenly">
                <Link
                    href='/'
                    className="btn btn-primary"
                >Go Home</Link>
                <Link
                    href={retry}
                    className="btn btn-ghost"
                >Try Again</Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CustomError;
