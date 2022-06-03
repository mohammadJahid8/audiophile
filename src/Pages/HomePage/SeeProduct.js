import React from 'react';
import circle from '../../images/home/pattern-circles.svg'
import speaker from '../../images/home/image-speaker-zx9.png'

const SeeProduct = () => {
    return (
        <div
            style={{ backgroundImage: `url(${circle})` }}
            className="bg-[#d87d4a] mb-96 bg-no-repeat pt-24 text-white">
            <div className>
                <div className="flex px-20 gap-56 justify-center items-center flex-col lg:flex-row">
                    <img src={speaker} alt="" className="w-[413px]" />
                    <div>
                        <h1 className="text-5xl font-bold">ZX9 <br />speaker</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SeeProduct;