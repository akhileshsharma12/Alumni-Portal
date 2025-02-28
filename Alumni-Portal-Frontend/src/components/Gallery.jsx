import React from 'react';
import antaragni from '../assets/antaragni-1.webp';
import karwaan from '../assets/karwaan-24-7.webp';
import shivajiJayanti from '../assets/shivaji-jayanti.webp';
import ganeshChaturthi from '../assets/ganesh-chaturthi-festival.jpg';

const Gallery = () => {

    const images = [
        antaragni,
        karwaan,
        shivajiJayanti,
        ganeshChaturthi,
        karwaan,
        antaragni,
        shivajiJayanti,
    ];

    return (
        <div className="px-2">
            <h5 className=" text-black font-medium text-3xl pl-2 my-4 lg:text-4xl lg:my-3 cursor-pointer">
                Memories
            </h5>
            <div className='flex justify-center items-center'>
                <hr className='border border-gray-400 mb-4 w-[98%] ' />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery;