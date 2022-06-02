import React from 'react';
import headphones from '../../images/shared/image-headphones.png';
import earphones from '../../images/shared/image-earphones.png';
import speakers from '../../images/shared/image-speakers.png';


const Shop = () => {
    return (
        <div className=''>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                <div className="rounded border-gray-300  dark:border-gray-700   bg-[#f1f1f1]">
                    <div className="flex justify-center">
                        <div className="w-72 -mt-28">
                            <img src={headphones} alt="" />
                            <h2 className='-mt-12 text-center uppercase tracking-wider font-bold text-xl'>Headphones</h2>
                        </div>
                    </div>
                </div>


                <div className="rounded border-gray-300  dark:border-gray-700   bg-[#f1f1f1]">
                    <div className="flex justify-center">
                        <img src={speakers} alt="" className="w-72 -mt-24" />
                    </div>
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700   bg-[#f1f1f1]">
                    <div className="flex justify-center">
                        <img src={earphones} alt="" className="w-72 -mt-16" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;