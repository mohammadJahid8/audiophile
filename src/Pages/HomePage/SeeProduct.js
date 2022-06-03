import React from 'react';
import circle from '../../images/home/pattern-circles.svg'
import speaker from '../../images/home/image-speaker-zx9.png'
import './SeeProduct.css'

const SeeProduct = () => {
    return (
        <div
            style={{ backgroundImage: `url(${circle})` }}
            className="bg-[#d87d4a] mb-12 bg-no-repeat pt-24  text-white bg-circle">

            {/* <div className> */}
            <div className="flex px-20 lg:gap-44 gap-6 pb-6 lg:pb-0 justify-center items-center flex-col lg:flex-row">
                {/* <div> */}
                <img src={speaker} alt="" className="w-[26rem]" />
                {/* </div> */}
                <div>
                    <h1 className="text-5xl font-bold">ZX9 <br />speaker</h1>
                    <p className="py-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <a
                        href="/"
                        aria-label=""
                        className="btn bg-black pb-8 pt-5 px-7 rounded-none tracking-wide border-none"
                    >See Product</a>
                </div>
            </div>
            {/* </div> */}
        </div>

    );
};

export default SeeProduct;