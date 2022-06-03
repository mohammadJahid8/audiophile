import React from 'react';

const SeeProduct2 = () => {
    return (
        <div>
            <div className="mx-auto container px-6 xl:px-0 py-12">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center">
                        <div className="">
                            <img className="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
                            <img className="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                            <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                                <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                        <div className="group group-hover:bg-opacity-60 transition duration-500  bg-gray-100 sm:p-28 py-36 px-10 flex justify-center items-center">
                            <img className="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/3BbZvtQ/pexels-andrea-piacquadio-3757055-removebg-preview-1.png" alt="sofa-3" />
                            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            </div>
                        </div>

                        <div className="group group-hover:bg-opacity-60 transition duration-500  bg-gray-100 sm:p-28 py-36 px-10 flex justify-center items-center">
                            <img className="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/3BbZvtQ/pexels-andrea-piacquadio-3757055-removebg-preview-1.png" alt="sofa-3" />
                            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SeeProduct2;