import React from 'react';
import Banner from './Banner';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container mx-auto px-16 my-44'>
                <Shop />
            </div>
        </div>
    );
};

export default Home;