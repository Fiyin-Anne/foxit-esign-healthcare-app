'use client'

import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="hero min-h-[calc(100vh-60px)] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">About the App</h1>
                    <p className="py-9">This sample healthcare application demonstrates how to use the Foxit eSign API to create applications that focus on healthcare electronic signature workflows.</p>
                    <button className="btn btn-primary">
                        <Link
                            href="/"
                            rel="noopener noreferrer"
                        >Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
