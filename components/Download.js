'use client'

import Link from 'next/link';
import Success from './Success';

import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Download = ({ downloadUrl }) => {
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = async () => {
        setIsDownloaded(true);
    };
    
    if (isDownloaded) {
        return <Success title='Downloading!' subtext='Download in progress...' retry='/patients/request-record' />
    }

    return (
        <div className='h-[calc(100vh-55px)] bg-gray-200 w-full flex justify-center items-center'>
            <div className="card w-96 h-64 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Your file is ready!</h2>
                <p>Click the button to download the form.</p>
                <div className="card-actions justify-end">
                <Link
                    href={downloadUrl}
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={handleDownload}
                >Download File</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Download;