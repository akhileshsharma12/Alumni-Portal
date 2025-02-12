import React from 'react';
import company1 from '../assets/aws-educate.webp';
import company2 from '../assets/bsnl.webp';
import company3 from '../assets/cisco.webp';
import company4 from '../assets/green-ladder.webp';
import company5 from '../assets/oracle-academy.webp';
import company6 from '../assets/palo-alto.webp';

const Collaborator = () => {
    const gradientTextStyle = {
        background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="bg-white px-4 sm:px-10 pt-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold italic" style={gradientTextStyle}>
                Our Collaborators
            </h2>

            {/* Horizontal Scrolling Section */}
            <div className="mt-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <marquee behavior="scroll" direction="">
                    <div className="flex gap-16 md:gap-16 px-4 sm:px-10 py-4">
                        <img className="h-14 sm:h-20 w-auto" src={company1} alt="AWS Educate" />
                        <img className="h-14 sm:h-20 w-auto" src={company6} alt="Palo Alto" />
                        <img className="h-14 sm:h-20 w-auto" src={company1} alt="AWS Educate" />
                        <img className="h-14 sm:h-20 w-auto" src={company2} alt="BSNL" />
                        <img className="h-14 sm:h-20 w-auto" src={company4} alt="Green Ladder" />
                        <img className="h-14 sm:h-20 w-auto" src={company3} alt="Cisco" />
                        <img className="h-14 sm:h-20 w-auto" src={company5} alt="Oracle Academy" />
                        <img className="h-14 sm:h-20 w-auto" src={company3} alt="Cisco" />
                        <img className="h-14 sm:h-20 w-auto" src={company6} alt="Palo Alto" />
                    </div>
                </marquee>
            </div>
        </div>
    );
};

export default Collaborator;
