import React from 'react';
import speaker from '../../images/home/image-speaker-zx7.jpg'

const SeeProduct1 = () => {
    return (
        <div>
            <div className="mb-8 uppercase ">
                <div
                    style={{ backgroundImage: `url(${speaker})` }}
                    className="h-[20rem] bg-no-repeat bg-cover bg-center flex justify-start items-center">
                    <div className='pl-28'>
                        <h2 className='tracking-wider text-3xl pb-6 font-bold'>ZX7 speaker</h2>
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

export default SeeProduct1;