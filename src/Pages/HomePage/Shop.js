import React from 'react';
import headphones from '../../images/shared/image-headphones.png';
import earphones from '../../images/shared/image-earphones.png';
import speakers from '../../images/shared/image-speakers.png';


const Shop = () => {
    return (
        <div className=''>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                <div className="mb-28 rounded border-gray-300  dark:border-gray-700   bg-[#f1f1f1] pb-8">
                    <div className="flex justify-center">
                        <div className="w-72 -mt-28">
                            <img src={headphones} alt="" />
                            <h2 className='-mt-12 text-center uppercase tracking-wider font-bold text-xl'>Headphones</h2>
                            <p className=' text-center tracking-wider font-bold text-gray-500 hover:text-orange-300'>shop
                                <svg
                                    className="inline-block w-3 text-orange-300"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="mb-28 pb-8 rounded border-gray-300  dark:border-gray-700   bg-[#f1f1f1]">
                    <div className="flex justify-center">
                        <div className="w-72 -mt-28">
                            <img src={speakers} alt="" />
                            <h2 className='-mt-10 text-center uppercase tracking-wider font-bold text-xl'>Headphones</h2>
                            <p className=' text-center tracking-wider font-bold text-gray-500 hover:text-orange-300'>shop
                                <svg
                                    className="inline-block w-3 text-orange-300"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-28 pb-8 rounded border-gray-300  dark:border-gray-700   bg-[#f1f1f1]">
                    <div className="flex justify-center">
                        <div className="w-[300px] -mt-28">
                            <img src={earphones} alt="" />
                            <h2 className='-mt-8 text-center uppercase tracking-wider font-bold text-xl'>Headphones</h2>
                            <p className=' text-center tracking-wider font-bold text-gray-500 hover:text-orange-300'>shop
                                <svg
                                    className="inline-block w-3 text-orange-300"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;