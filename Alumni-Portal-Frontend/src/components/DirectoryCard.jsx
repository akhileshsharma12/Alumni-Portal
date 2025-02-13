import React from "react";

const DirectoryCard = ({ name, role, company, image }) => {
    return (
        <div className="border-2 border-purple-300 rounded-xl p-4 text-center w-60 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="w-20 h-20 mx-auto rounded-full border-2 border-purple-400"
            />
            <h2 className="text-2xl text-black font-semibold mt-4">{name}</h2>
            <p className="text-purple-600 text-lg font-medium">{role}</p>
            <p className="text-gray-500 text-sm">{company}</p> 
            <button className="mt-5 px-5 py-2 border-2 border-purple-400 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                View Profile
            </button>
        </div>
    );
};

export default DirectoryCard;
