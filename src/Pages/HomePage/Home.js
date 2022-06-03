import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Navbar backgroundHome="bg-[#191919] text-white" />
            <Banner />
            <div className='container mx-auto px-16 my-44'>
                <Shop />
            </div>
        </div>
    );
};

export default Home;