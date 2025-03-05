import React, { useState } from 'react';
import antaragni from '../assets/antaragni-1.webp';
import karwaan from '../assets/karwaan-24-7.webp';
import shivajiJayanti from '../assets/shivaji-jayanti.webp';
import ganeshChaturthi from '../assets/ganesh-chaturthi-festival.jpg';
import alumniMeet from '../assets/aluminimeet9.avif';
import alumniMeet1 from '../assets/aluminimeet5.avif';
import alumniMeet2 from '../assets/aluminimeet13.avif';
import alumniMeet3 from '../assets/aluminimeet15.avif';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        antaragni,
        karwaan,
        shivajiJayanti,
        ganeshChaturthi,
        karwaan,
        alumniMeet1,
        alumniMeet2,
        alumniMeet3,
        alumniMeet
    ];

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setZoom(1);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    return (
        <div className="px-2">
            <h5 className="text-black font-medium text-3xl pl-2 my-4 lg:text-4xl lg:my-3 cursor-pointer">
                Memories
            </h5>
            <div className='flex justify-center items-center'>
                <hr className='border border-gray-400 mb-4 w-[98%]' />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Memory ${index + 1}`}
                        className="h-auto max-w-full rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(src)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white p-4 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected Memory"
                            className="h-auto max-w-full max-h-[80vh] max-w-[80vw] rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;