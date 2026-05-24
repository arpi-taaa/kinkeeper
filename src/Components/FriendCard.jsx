import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
    if (!friend) return null;

    const { id, name, status, tags, picture, days_since_contact } = friend;

    const statusStyles = {
        "on-track": "bg-green-500 text-white",
        "overdue": "bg-[#EF4444] text-white",
        "almost due": "bg-yellow-500 text-white"
    };

    return (
        <Link to={`/friend/${id}`} className="block">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center h-full">
                <div className="mb-2">
                    <img
                        src={picture}
                        alt={name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 shadow-sm"
                    />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{name}</h3>
                <p className="text-[#64748B] text-xs mb-2">{days_since_contact}d ago</p>
                <div className="flex flex-col gap-1 items-center">
                    <div className="flex flex-wrap justify-center gap-1 max-w-full">
                        {Array.isArray(tags) && tags.map((tag, idx) => (
                            <span key={idx}
                                className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide bg-[#DCFCE7] text-[#074820] whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span className={`px-3 py-2 rounded-full text-xs font-medium capitalize shadow-sm ${statusStyles[status] || "bg-gray-100 text-gray-600"}`}>
                        {status}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;