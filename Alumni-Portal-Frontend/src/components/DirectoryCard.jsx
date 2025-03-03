import React from "react";

const DirectoryCard = ({ name, role, company, image }) => {
    return (
        <div className="border-2 border-purple-300 bg-purple-50 rounded-xl px-2 py-4 text-center w-full sm:w-50 lg:w-60 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-purple-400"
            />

            {/* Responsive Font Sizes */}
            <h2 className="text-lg sm:text-xl text-black font-semibold mt-3 sm:mt-4">{name}</h2>
            <p className="text-sm sm:text-lg text-purple-600 font-medium">{role}</p>
            <p className="text-xs sm:text-sm text-gray-500">{company}</p>

            <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-1 sm:py-2 border-2 border-purple-400 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm sm:text-base" onClick={() => document.getElementById('alumni-directory-view-profile').showModal()}>view Profile</button>


        </div>
    );
};

export default DirectoryCard;
