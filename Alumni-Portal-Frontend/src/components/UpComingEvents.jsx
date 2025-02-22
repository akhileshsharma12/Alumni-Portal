import React from "react";

const UpComingEvents = () => {
    return (
        <div className="border border-gray-300 shadow-lg w-full max-w-md rounded-lg px-5 py-4 bg-white">

            {/* Profile Link */}
            <h5 className=" text-black font-medium text-xl cursor-pointer">
                Upcoming Events
            </h5>

            <p className="py-3"> Footprint 2025 – A Walk Down Memory Lane!  🎉 </p>

            <span className="text-purple-800"> Saturday 15 Feb, 2025 </span>

            <p className="text-right text-purple-800 underline font-medium mt-10 cursor-pointer hover:text-purple-600">
                View More
            </p>
        </div> 
    );
};

export default UpComingEvents;
