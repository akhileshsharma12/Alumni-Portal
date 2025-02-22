import React from "react";
import Hero2 from "./Hero2";
import ProfileCard from "./ProfileCard";
import UpComingEvents from "./UpComingEvents";

const HomeMain = () => {
    return (
        <div className="w-full md:w-[80%] min-h-screen py-13 lg:py-15 bg-white">
           <Hero2 />

           <div className="m-5 flex flex-col md:flex-row gap-15 md:gap-30">
            <ProfileCard />
            <UpComingEvents />
           </div>
        </div>
    );
};

export default HomeMain;
