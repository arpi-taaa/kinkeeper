import React from 'react';

const Stats = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center transition-transform">
                    <h2 className="text-4xl font-bold text-[#1B4332] mb-2">10</h2>
                    <p className="text-gray-500 font-medium text-sm">Total Friends</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center transition-transform">
                    <h2 className="text-4xl font-bold text-[#1B4332] mb-2">3</h2>
                    <p className="text-gray-500 font-medium text-sm">On Track</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center transition-transform">
                    <h2 className="text-4xl font-bold text-[#1B4332] mb-2">6</h2>
                    <p className="text-gray-500 font-medium text-sm">Need Attention</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center transition-transform">
                    <h2 className="text-4xl font-bold text-[#1B4332] mb-2">12</h2>
                    <p className="text-gray-500 font-medium text-sm">Interactions This Month</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;