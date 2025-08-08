import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    const location = useLocation();

    return (
        <div>
            <Navbar />
            <Outlet />
            {location.pathname !== '/contact' && <Footer />}
        </div>
    );
};

export default Root;
