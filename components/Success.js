'use client'

import Link from 'next/link';

const  Success = ({ title, subtext, retry }) => {
    return (
        <div className='h-[calc(100vh-55px)] bg-gray-200 w-full flex justify-center items-center'>
            <div className="card w-96 h-64 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{subtext}</p>
                    <div className="card-actions justify-evenly">
                    <Link 
                        href='/'
                        className="btn btn-primary"
                    >Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Success;