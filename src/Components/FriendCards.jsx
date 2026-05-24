import React, { useEffect, useState, useRef } from 'react';
import FriendCard from './FriendCard';
import { GridLoader } from 'react-spinners';

const FriendCards = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetch('/friends.json')
            .then((res) => {
                if (!res.ok) throw new Error("File not found");
                return res.json();
            })
            .then((data) => {
                setFriends(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Safe fetch error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-10">
                <GridLoader color="#0036d7" size={15} margin={2} />
                <p className="text-gray-500 font-medium text-sm animate-pulse">Loading your circle...</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h3 className='text-2xl font-semibold mb-4'>Your Friends</h3>
            {friends.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {friends.map((friend) => (
                        <FriendCard key={friend.id} friend={friend} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    No friend data found.
                </div>
            )}
        </div>
    );
};

export default FriendCards;