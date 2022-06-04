import React from 'react';
import gear from '../../images/shared/image-best-gear.jpg'

const BottomHero = () => {
    return (
        <div>
            <div class="mt-36">
                <div class="hero-content flex-col lg:flex-row-reverse gap-[5rem]">
                    <img src={gear} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold uppercase pb-4">Bringing you the <br /><span className='text-[#d87d4a]'>best</span> audio gear</h1>
                        <p class="py-6 text-gray-500 text-base">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHero;