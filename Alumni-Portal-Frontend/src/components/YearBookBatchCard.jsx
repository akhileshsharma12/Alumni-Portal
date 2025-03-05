import React from 'react';

const YearBookBatchCard = ({ batch, onClick }) => {
    if (!batch) {
        return null; // Return null if batch is undefined
    }

    const handleBatchClick = () => {
        onClick(batch);
    };

    return (
        <div
            className="p-4 text-center cursor-pointer border border-gray-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={handleBatchClick}
        >
            <h2 className="text-lg font-medium">Class of {batch.year}</h2>
            <p className="text-sm text-gray-500">{batch.members.length} Members</p>
        </div>
    );
};

export default YearBookBatchCard;