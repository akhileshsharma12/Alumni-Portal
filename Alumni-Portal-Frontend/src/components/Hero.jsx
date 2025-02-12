import React from 'react';
import Hero_img from '../assets/ghrua-croped.jpg';

const Hero = (props) => {
    return (
        <div className="relative w-full h-[65vh] bg-cover bg-center flex items-center justify-center text-white text-center" 
            style={{ backgroundImage: `url(${Hero_img})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 max-w-4xl px-6">
                <h1 className="text-3xl md:text-5xl font-mono leading-snug">
                GH Raisoni University Alumni Portal  <br /> 
                    <span className="text-lg md:text-2xl">Stay Connected, Stay Inspired!</span>
                </h1>
            </div>
        </div>
    );
}

export default Hero;
