import React from 'react';


const SeeProduct2 = () => {
    return (
        <div>
            <div className=" grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                <div className="group group-hover:bg-opacity-60 transition duration-500  bg-gray-100 sm:p-28 py-36  px-10 flex justify-center items-center">
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


    );
};

export default SeeProduct2;