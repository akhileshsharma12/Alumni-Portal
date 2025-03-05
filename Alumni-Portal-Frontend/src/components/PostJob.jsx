
import React, { useState } from "react";
import API from '../api/backend.api.jsX';
import { useForm } from "react-hook-form";
import { useUser } from "../store/UserProvider";
import { ToastContainer, toast } from 'react-toastify';

const PostJob = () => {
    const { user } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handlePost = async (data) => {
        const post = {
            user_id: user.id,
            title: data.title,
            company: data.company,
            overview: data.overview,
            type: data.type,
            vacancies: data.vacancies,
            location: data.location,
            apply_link: data.apply_link,
        };
        try {
            const response = await API.post("/job/post-job", post, { withCredentials: true });
            console.log(response);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onClose:  () => {
                 window.location.reload();
                }
            });

        } catch (error) {
            console.log(error);
            toast.error(response.data.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return (
        <>
            <div className="w-full md:w-[80%] py-5 pr-5 md:px-0">
                <form onSubmit={handleSubmit(handlePost)} className="w-full md:w-7/10 space-y-6  bg-white  rounded-lg ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-semibold">Job Title</label>
                            <input type="text" placeholder="Enter title here" className="w-full p-3 border border-gray-300 rounded-md" {...register("title", { required: true })} />
                        </div>
                        <div>
                            <label className="block font-semibold">Company</label>
                            <input placeholder="Enter company name here" className="w-full p-3 border border-gray-300 rounded-md" {...register("company", { required: true })} />
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold">Job Description</label>
                        <textarea className="w-full p-3 border border-gray-300 rounded-md h-32" {...register("overview", { required: true })} ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-semibold">Job Type</label>
                            <select {...register("type", { required: true })} className="w-full p-3 border border-gray-300 rounded-md">
                                <option value="On-Site">Onsite</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-semibold">No of Vacancies</label>
                            <select {...register("vacancies", { required: true })} className="w-full p-3 border border-gray-300 rounded-md">
                                {[...Array(10).keys()].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-semibold">Job Location</label>
                            <input type="text" {...register("location", { required: true })} placeholder="Enter Job Location" className="w-full p-3 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block font-semibold">Job Application URL</label>
                            <input type="text" {...register("apply_link", { required: true })} placeholder="Enter URL here" className="w-full p-3 border border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <button type="submit" className="bg-purple-700 text-white px-6 py-3 rounded-md w-full md:w-auto">Request Post</button>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default PostJob;
