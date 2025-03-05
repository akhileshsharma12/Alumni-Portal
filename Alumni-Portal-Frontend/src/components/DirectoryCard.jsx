import React from 'react';

const DirectoryCard = ({ name, role, company, bio, education, experience, skills, image, onViewProfile }) => {
    return (
        <div className="border-2 border-purple-300 bg-purple-50 rounded-xl px-2 py-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-purple-400"
            />
            <h2 className="text-lg sm:text-xl text-black font-semibold mt-3">{name}</h2>
            <p className="text-sm text-purple-600 font-medium">{role}</p>
            <p className="text-xs text-gray-500">{company}</p>
            <button
                className="mt-3 px-4 py-1 border-2 border-purple-400 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                onClick={onViewProfile}
            >
                View Profile
            </button>

            {bio && (
                <div className="mt-3 text-left">
                    <p className="text-sm text-gray-700"><strong>Bio:</strong> {bio}</p>
                    <p className="text-sm text-gray-700"><strong>Education:</strong> {education}</p>
                    <p className="text-sm text-gray-700"><strong>Experience:</strong> {experience}</p>
                    <p className="text-sm text-gray-700"><strong>Skills:</strong> {skills.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default DirectoryCard;