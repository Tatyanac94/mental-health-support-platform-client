"use client";

import React, { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        document.title = "Mental Health Support Platform";
    }, []);

    return (
        <div className="p-4 bg-blue-50 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Your Safe Space</h1>
            <p className="text-lg text-gray-700 mb-6 text-center">
                Here, you can share your thoughts, connect with others, and find support. 
                This platform is designed to be a nurturing environment where you can feel heard and valued.
            </p>
            <div className="mb-8">
                {/* <img 
                    src="/path/to/your/image.jpg" 
                    alt="Tranquil scenery" 
                    className="rounded-lg shadow-md w-full max-w-md"
                /> */}
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-blue-600 underline">Get Started</h2>
                <p className="mb-2 text-black">
                    Discover your support categories by taking our <a href="/quiz" className="text-blue-500 underline">Quiz</a>.
                </p>
                <p className="mb-2 text-black">
                    Access valuable information and resources <a href="/resources" className="text-blue-500 underline">here</a>.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
