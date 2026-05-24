import React from 'react';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="py-16 bg-white text-center px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Keep Your Friendships Alive
            </h1>
            <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                Track your interactions, set goals, and never let a meaningful connection fade away.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d5a47] transition-colors shadow-lg">
                <IoIosAddCircleOutline className='text-xl'></IoIosAddCircleOutline>
                Add a Friend
            </button>
        </div>
    );
};

export default Banner;