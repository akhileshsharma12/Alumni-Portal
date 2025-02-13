import React from "react";
import Hero_img from "../assets/ghrua-croped.jpg";

const HomeMain = () => {
    return (
        <div className="relative w-full h-[55vh] md:h-[55vh] lg:h-[55vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
            style={{ backgroundImage: `url(${Hero_img})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-4xl px-">
                <h1 className="text-3xl sm:text-3xl md:text-4xl font-mono leading-snug">
                    <span className="text-lg sm:text-xl md:text-2xl">Welcome to</span> <br />
                   GH Raisoni University Alumni Portal
                </h1>
            </div>
        </div>
    );
}

export default HomeMain;
