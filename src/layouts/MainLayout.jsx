import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <NavBar />
            <main className="grow">
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;