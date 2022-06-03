import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import SeeProduct from './SeeProduct';
import SeeProduct1 from './SeeProduct1';
import SeeProduct2 from './SeeProduct2';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Navbar backgroundHome="bg-[#191919] text-white" />
            <Banner />
            <div className='container mx-auto px-16'>
                <Shop />
                <SeeProduct />
                <SeeProduct1 />
                <SeeProduct2 />

            </div>
        </div>
    );
};

export default Home;