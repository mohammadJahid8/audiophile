import React from 'react';
import earphone from '../../images/home/image-earphones-yx1.jpg'

const SeeProduct2 = () => {
    return (
        <div>
            <div className=" grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center uppercase pb-5">
                <img className=" w-full" src={earphone} alt="sofa-3" />

                <div className="bg-gray-100 py-28 h-[329px] flex justify-start items-center">
                    <div className='pl-12 lg:pl-12 '>
                        <h2 className='tracking-wider text-3xl pb-6 font-bold'>yx1 earphones</h2>
                        <a
                            href="/"
                            aria-label=""
                            className="btn btn-outline pb-8 pt-5 px-7 rounded-none "
                        >See Product</a>
                    </div>
                </div>


            </div>

        </div>


    );
};

export default SeeProduct2;