import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { FaVideo } from 'react-icons/fa';
import { IoArchiveOutline } from 'react-icons/io5';
import { MdAddCall, MdDeleteOutline, MdOutlineMessage } from 'react-icons/md';
import toast from 'react-hot-toast';

const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/friends.json')
            .then((res) => res.json())
            .then((data) => {
                const foundFriend = data.find((f) => f.id === parseInt(id));
                setFriend(foundFriend);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-20 font-medium text-gray-600">Loading profile...</div>;
    if (!friend) return <div className="text-center py-20 font-medium text-gray-600">Friend profile not found.</div>;

    const { name, picture, status, tags, bio, days_since_contact, goal, next_due_date } = friend;

    const statusStyles = {
        "on-track": "bg-green-500 text-white",
        "overdue": "bg-[#EF4444] text-white",
        "almost due": "bg-yellow-500 text-white"
    };

    const handleCheckIn = (type) => {
        const newLog = {
            id: Date.now(),
            friendId: parseInt(id),
            type: type,
            title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        const existingLogs = JSON.parse(localStorage.getItem('timeline_logs')) || [];
        localStorage.setItem('timeline_logs', JSON.stringify([newLog, ...existingLogs]));

        toast.success(`${type} with ${friend.name}!`, {
            style: {
                border: '1px solid #0036d7',
                padding: '16px',
                // color: '#0036d7',
            },
            iconTheme: {
                primary: '#0036d7',
                // secondary: '#FFFAEE',
            },
        });
    };

    return (
        <div className=" bg-[#F4F6F8] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:grid-rows-1 items-stretch">
                    
                    <div className="lg:col-span-4 flex flex-col gap-4 h-full">
                        
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center grow justify-center">
                            <div className="mb-4">
                                <img 
                                    src={picture} 
                                    alt={name} 
                                    className="w-20 h-20 rounded-full object-cover border border-gray-200"
                                />
                            </div>
                            
                            <h2 className="text-xl font-bold text-[#1E293B] mb-2">{name}</h2>
                            
                            <div className="flex flex-col gap-1.5 items-center mb-4">
                                <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${statusStyles[status] || "bg-gray-100 text-gray-600"}`}>
                                    {status}
                                </span>
                                <div className="flex flex-wrap justify-center gap-1">
                                    {Array.isArray(tags) && tags.map((tag, idx) => (
                                        <span key={idx} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#DCFCE7] text-[#074820]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-[#475569] text-sm italic mb-1 px-2">
                                "{bio}"
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                                Preferred: email
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 mt-auto">
                            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 shadow-sm transition-colors flex items-center justify-center gap-2 text-sm">
                                <HiOutlineBellSnooze className="text-xl" />
                                Snooze 2 Weeks
                            </button>
                            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 shadow-sm transition-colors flex items-center justify-center gap-2 text-sm">
                                <IoArchiveOutline className="text-xl" />
                                Archive
                            </button>
                            <button className="w-full bg-white hover:bg-red-50 text-red-500 font-medium py-3 px-4 rounded-xl border border-gray-200 shadow-sm transition-colors flex items-center justify-center gap-2 text-sm">
                                <MdDeleteOutline className="text-xl" />
                                Delete
                            </button>
                        </div>

                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-4 h-full justify-between">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-30">
                                <h3 className="text-3xl font-bold text-[#1E293B] mb-1">{days_since_contact}</h3>
                                <p className="text-gray-400 text-xs font-medium">Days Since Contact</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-30">
                                <h3 className="text-3xl font-bold text-[#1E293B] mb-1">{goal}</h3>
                                <p className="text-gray-400 text-xs font-medium">Goal (Days)</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-30">
                                <h3 className="text-2xl font-bold text-[#1B4332] mb-1">
                                    {new Date(next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </h3>
                                <p className="text-gray-400 text-xs font-medium">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <h4 className="text-[#1E293B] font-semibold text-base mb-1">Relationship Goal</h4>
                                <p className="text-gray-500 text-sm">
                                    Connect every <strong className="text-gray-900 font-bold">{goal} days</strong>
                                </p>
                            </div>
                            <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium px-4 py-1.5 rounded-lg shadow-sm transition-colors">
                                Edit
                            </button>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 grow flex flex-col justify-center">
                            <h4 className="text-[#000000] font-semibold text-base mb-4">Quick Check-In</h4>
                            <div className="grid grid-cols-3 gap-4">
                                
                                <button 
                                    onClick={() => handleCheckIn('call')}
                                    className="bg-[#F8FAFC] border border-gray-100 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200 group shadow-sm"
                                >
                                    <MdAddCall className="text-2xl text-gray-600 group-hover:text-[#0036d7] transition-colors duration-200" />
                                    <span className="text-xs font-medium text-gray-600 group-hover:text-[#0036d7] transition-colors duration-200">Call</span>
                                </button>

                                <button 
                                    onClick={() => handleCheckIn('text')}
                                    className="bg-[#F8FAFC] border border-gray-100 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200 group shadow-sm"
                                >
                                    <MdOutlineMessage className="text-2xl text-gray-600 group-hover:text-[#0036d7] transition-colors duration-200" />
                                    <span className="text-xs font-medium text-gray-600 group-hover:text-[#0036d7] transition-colors duration-200">Text</span>
                                </button>

                                <button 
                                    onClick={() => handleCheckIn('video')}
                                    className="bg-[#F8FAFC] border border-gray-100 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200 group shadow-sm"
                                >
                                    <FaVideo className="text-2xl text-gray-600 group-hover:text-[#0036d7] transition-colors duration-200" />
                                    <span className="text-xs font-medium text-gray-600 group-hover:text-[#0036d7] transition-colors duration-200">Video</span>
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;