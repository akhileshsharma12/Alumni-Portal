import React from 'react';
import FootPrintImg from '../assets/31760701737363467.jpg';

const HomeMain3 = () => {
    return (
        <div className="w-full md:w-[80%] min-h-screen py-25 px-5 bg-white">
            <div className='border-b border-gray-600'>
                <h1 className="text-3xl font-semibold pb-5 text-black"> Events </h1>
            </div>

            <div className="flex flex-col md:flex-row bg-gray-50 shadow-xl px-5 py-5 mt-10 rounded-lg">
                <figure className='flex justify-center md:justify-start'>
                    <img
                        src={FootPrintImg}
                        alt="Event"
                        className='w-48 h-48 md:w-56 md:h-56 rounded-lg border-2 border-purple-800 object-cover'
                    />
                </figure>
                <div className="flex flex-col justify-center mt-5 md:mt-0 md:ml-5">
                    <h2 className="text-lg md:text-xl font-semibold text-black "> Footprint 2025 - A Walk Down Memory Lane! 🎉 </h2>
                    <p className='text-sm md:text-lg mt-2'>
                        Let's walk down memory lane and relive the best years of our lives at G H Raisoni
                        University, <br /> Amravati. Laughter, memories, and great company await you at Footprint 2025!
                    </p>
                    <p className='text-black text-sm md:text-lg mt-2'>
                        <span className='font-semibold'> Date: </span> Saturday, 15th March 2025
                    </p>
                    <p className='text-black text-sm md:text-lg'>
                        <span className='font-semibold'> Time: </span> 11:00 AM onwards
                    </p>
                    <p className='text-black text-sm md:text-lg'>
                        <span className='font-semibold'> Venue: </span> Seminar Hall, Main Building, G H Raisoni University, Amravati
                    </p>
                    <div className="mt-4">
                        <button className="w-full md:w-auto px-6 py-2 bg-purple-800 text-white font-bold text-sm md:text-base rounded-lg hover:bg-purple-600">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeMain3;