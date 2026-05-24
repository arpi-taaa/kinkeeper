import React from 'react';
import Banner from '../Components/Banner';
import Stats from '../Components/Stats';
import FriendCards from '../Components/FriendCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <FriendCards></FriendCards>
        </div>
    );
};

export default Home;