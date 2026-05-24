import React, { useEffect, useState } from 'react';
import { MdAddCall, MdOutlineMessage, MdDeleteOutline } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi2';

const Timeline = () => {
    const [logs, setLogs] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const storedLogs = JSON.parse(localStorage.getItem('timeline_logs')) || [];
        setLogs(storedLogs);
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'call':
                return <MdAddCall className="text-2xl text-gray-600" />;
            case 'text':
                return <MdOutlineMessage className="text-2xl text-gray-600" />;
            case 'video':
                return <FaVideo className="text-2xl text-gray-600" />;
            default:
                return null;
        }
    };

    const handleClearHistory = () => {
        localStorage.removeItem('timeline_logs');
        setLogs([]);
    };

    const filteredLogs = logs.filter(log => {
        if (activeFilter === 'all') return true;
        return log.type === activeFilter;
    });

    return (
        <div className="bg-[#F4F6F8] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <h1 className="text-4xl font-bold text-[#1E293B]">Timeline</h1>
                    
                    {logs.length > 0 && (
                        <button 
                            onClick={handleClearHistory}
                            className="btn btn-ghost text-red-500 hover:bg-red-50 font-semibold text-xs min-h-0 h-9 rounded-xl normal-case gap-1.5 px-3 border border-transparent hover:border-red-100 transition-colors self-start sm:self-auto"
                        >
                            <MdDeleteOutline className="text-base" />
                            Clear History
                        </button>
                    )}
                </div>

                <div className="dropdown mb-6">
                    <div tabIndex={0} role="button" className="btn bg-white hover:bg-gray-50 border-gray-200 text-gray-400 font-normal text-sm shadow-sm min-h-0 h-11 w-52 justify-between rounded-xl normal-case px-4">
                        <span className={activeFilter !== 'all' ? 'text-gray-700 font-medium capitalize' : ''}>
                            {activeFilter === 'all' ? 'Filter timeline' : activeFilter}
                        </span>
                        <HiChevronDown className="text-base opacity-60 text-gray-400" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow-md bg-white border border-gray-100 rounded-xl w-52 z-1 mt-1 text-xs gap-0.5">
                        {['all', 'call', 'text', 'video'].map((filter) => (
                            <li key={filter}>
                                <button 
                                    onClick={() => {
                                        setActiveFilter(filter);
                                        if (document.activeElement) document.activeElement.blur();
                                    }}
                                    className={`rounded-lg capitalize py-2.5 font-medium ${activeFilter === filter ? 'bg-[#0036d7] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {filter === 'all' ? 'All Interactions' : filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {filteredLogs.length === 0 ? (
                    <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm">
                        <p className="text-gray-500 font-medium">No interactions found.</p>
                        <p className="text-gray-400 text-xs mt-1">
                            {activeFilter === 'all' 
                                ? "Go to a friend's details profile to initiate a check-in action."
                                : `There are no history entries categorized under "${activeFilter}".`
                            }
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {filteredLogs.map((log) => (
                            <div key={log.id} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-all">
                                
                                <div className="bg-[#F8FAFC] border border-gray-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                    {getIcon(log.type)}
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-[#475569] text-sm">
                                        <span className="font-semibold text-[#1E293B] capitalize">{log.type}</span> with {log.title.split(' with ')[1] || 'Friend'}
                                    </h3>
                                    <span className="text-xs text-gray-400 font-medium mt-0.5">{log.date}</span>
                                </div>

                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Timeline;