import React from "react";
import Hero2 from "./Hero2";
import ProfileCard from "./ProfileCard";
import UpComingEvents from "./UpComingEvents";

const HomeMain = () => {
    return (
        <div className=" w-[80%] min-h-screen py-10 bg-white ">
           <Hero2 />

           <div className="m-5  flex gap-30">
            <ProfileCard />
            <UpComingEvents />
           </div>
        </div>
    );
};

export default HomeMain;
