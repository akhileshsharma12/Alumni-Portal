import React from "react";
import avatar_img from '../assets/avatar.jpeg'; 
import { useUser } from "../store/UserProvider";

const ProfileCard = () => {
    const { user } = useUser();
    return (
        <div className="border border-gray-300 shadow-lg w-full max-w-md rounded-lg px-5 py-4  bg-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Profile Image */}
                <img
                    //src={avatar_img} // Add your image URL here
                    src = {`https://ui-avatars.com/api/?name=${user.name}background=FFFFFF&color=080e4d`}
                    alt="Profile"
                    className="h-24 w-24 bg-purple-200 rounded-full border-2 border-purple-600"
                />

                {/* Profile Details */}
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
                    <span className="text-purple-700 text-lg font-medium">Alumni, Class of 2024</span>
                    <br />
                    <span className="text-gray-600">Bachelor of Computer Applications, BCA</span>
                </div>
            </div>

            {/* Profile Link */}
            <p className="text-right text-purple-800 underline font-medium mt-10 cursor-pointer hover:text-purple-600">
                Go to your Profile
            </p>
        </div>
    );
};

export default ProfileCard;