import React from 'react';
import banner from '../../images/home/image-hero.jpg'

const Banner = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${banner})` }}
                className=" h-full">

                <div className="">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24 lg:py-60">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <p className='text-gray-400 tracking-[.6rem] uppercase text-base pb-5'>new product</p>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-wide text-white sm:text-6xl sm:leading-none uppercase ">
                                    XX99 mark II  <br className="hidden md:block" />
                                    headphones
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;