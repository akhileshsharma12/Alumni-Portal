import React from 'react';
import img1 from '../assets/antaragni-1.webp';
import img2 from '../assets/convocation-cere-1.webp';
import img3 from '../assets/karwaan-24-7.webp';
import img4 from '../assets/shivaji-jayanti.webp';
import img5 from '../assets/ganesh-chaturthi-festival.jpg';

const Memories = () => {
    const gradientTextStyle = {
        background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="font-sans text-center bg-white py-10 px-5">
            <h2 className="text-4xl font-bold italic text-center mb-8" style={gradientTextStyle}>
                Our Memories
            </h2>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                
                <div className="relative w-full h-110 bg-purple-100 rounded-lg overflow-hidden group">
                    <img className="w-full h-full object-cover rounded-lg" src={img5} alt="Memory 1" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white text-lg font-bold mb-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                            Ganesh Chaturthi Festival
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="relative w-full h-36 md:h-40 lg:h-52 bg-amber-100 rounded-lg overflow-hidden group">
                        <img className="w-full h-full object-cover rounded-lg" src={img3} alt="Memory 2" />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-white text-lg font-bold mb-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                                Karwaan Cultural Fest
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-36 md:h-40 lg:h-52 bg-amber-100 rounded-lg overflow-hidden group">
                        <img className="w-full h-full object-cover rounded-lg" src={img2} alt="Memory 3" />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-white text-lg font-bold mb-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                                Convocation Ceremony
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-110 bg-purple-100 rounded-lg overflow-hidden group">
                    <img className="w-full h-full object-cover rounded-lg" src={img4} alt="Memory 4" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white text-lg font-bold mb-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                            Shivaji Jayanti Celebration
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Memories;
