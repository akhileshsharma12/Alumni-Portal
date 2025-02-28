import React, { useState } from 'react';
import main_logo from '../assets/ghrua-white.png';
import logo from '../assets/logo-ghru.webp';
import google from '../assets/google logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import API from '../api/backend.api.jsX';
import { useForm } from "react-hook-form";

const SignIn = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const registerCredentials = {
            name : data.firstName + ' ' + data.lastName,
            email: data.email,
            password: data.password,
            role: data.role
        }
        try {
            const respose = await API.post('/api/user/register', registerCredentials);
            if (respose.status === 201){
                 toast.success('Registered Successfuly !', {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    onClose: () => {
                                        navigate("/login");
                                    }
                                });
            } 
        } catch (error) {
             toast.error(error.response.data.message, {
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
        <div className='bg-purple-800 h-full flex justify-center items-center '>


            <div className='bg-white pb-4 w-100 rounded-xl '>

                <div className='text-center flex p-6'>
                    <img className='h-10 mt-3 ml-9' src={logo} alt="" />
                    <span className='text-lg ml-10 text-purple-800'> Alumni <br /> Portal </span>
                </div>

                <form className="max-w-sm mx-auto px-8" id='register-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-5 mb-3'>
                        <div className="mb-2">
                            <label className="block mb-2 text-lg font-medium text-purple-900 ">First Name</label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                                placeholder="Name"
                                {...register("firstName", { required: true })}
                                
                            />
                            {errors.firstName && <span className='text-red-400 text-sm'>This field is required</span>}
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-lg font-medium text-purple-900 ">Last Name</label>
                            <input
                                type="text"
                                id="Last Name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                                placeholder="Surname"
                                {...register("lastName", { required: false })}
                            />
                            {errors.lastName && <span className='text-red-400 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className="mb-2 border border-gray-400 bg-gray-50 px-2 py-1 rounded-lg cursor-pointer flex w-fit justify-center items-center ">
                        <label className="block text-lg font-medium bg-gray-50 text-purple-900" for="role" > Role :</label>
                        <select
                            className=" outline-none border-none bg-gray-50  ml-2 px-1"
                            {...register("role")}
                        >
                            <option value="alumni" > Alumni </option>
                            <option value="student"> Student </option>
                            <option value="admin"> Admin </option>

                        </select>
                        {errors.role && <span className='text-red-400 text-sm'>This field is required</span>}
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-lg font-medium text-purple-900 ">Enter Email</label>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                            placeholder="name@flowbite.com"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-400 text-sm'>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-lg font-medium text-purple-900">Enter Password</label>
                        <input
                            type="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-400 text-sm'>This field is required</span>}
                    </div>


                    <button type="submit" className="text-white w-full bg-purple-700 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Submit</button>

                    <p className='text-center my-3'> or sign up with  </p>

                    <div>
                        <button type="submit" className="text-black flex justify-center items-center gap-2 w-full border border-black  hover:bg-purple-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] px-5 py-1 text-center"> <img className='h-8' src={google} alt="" /> Continue With Google </button>
                    </div>

                    <Link to='/login'>
                        <h4 className='text-purple-800 text-center mt-1'> Already have an Account </h4>
                    </Link>
                </form>

                <ToastContainer />

            </div>

        </div>
    )
}

export default SignIn;