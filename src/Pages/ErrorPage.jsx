import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="mb-6">
                <img src="/error-404.png" className='w-100' alt="" />
            </div>

            <h1 className="text-6xl font-black text-[#1B4332] mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Oops! Seems like, <br />This link is a ghost.
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
                The page you're looking for doesn't exist or has been moved. 
            </p>

            <Link 
                to="/" 
                className="bg-[#1B4332] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#2d5a47] transition-all transform hover:-translate-y-1"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;