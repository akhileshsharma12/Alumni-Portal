import React from 'react'
import Jobs from './Jobs'

const JobPositions = () => {

    const gradientTextStyle = {
        background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    

    return (
        <div className='bg-purple-100 py-7'>

            <h2 className='heading text-[#5C0F8B] text-center text-4xl font-[italic] font-bold' style={gradientTextStyle}> Open Job Positions </h2>

            <div className='mt-10 px-4 sm:px-8 md:px-20'>
                <Jobs textToShow="View More" />
                <Jobs textToShow="View More" />
                <Jobs textToShow="View More" />
            </div>

            <div className='mt-10'>
                <button class="gradient-button bg-purple-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mx-auto block animate-bounce">
                    View More
                </button>
            </div>
        </div>
    )
}

export default JobPositions