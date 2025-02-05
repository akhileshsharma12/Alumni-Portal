import React from 'react';
import Hero_img from '../assets/ghrua-croped.jpg';

const Hero = () => {
    return (
        <>
            <div
                className="hero "
                style={{
                    height: '60vh',
                    backgroundImage: `url(${Hero_img})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-serif font-bold"> GH Raisoni University Alumni Portal <br /> Stay Connected, Stay Inspired! </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;