import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import main_logo from '../assets/ghrua-white.png';
import logo from '../assets/logo-ghru.webp';
import google from '../assets/google logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useRole } from '../store/RoleProvider';
import { useUser } from '../store/UserProvider';
import API from '../api/backend.api.jsX';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {

    const navigate = useNavigate();
    const { role, setRole } = useRole();
    const { user, setUser } = useUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const loginCredentials = {
            email: data.email,
            password: data.password
        };

        try {
            const res = await API.post('/api/user/login', loginCredentials, { withCredentials: true });

            if (res.status === 200) {


                toast.success('Login Successful !', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    onClose: async () => {
                        const user = await API.get('/api/user/get-user', { withCredentials: true });
                        await setRole(user.data.user.role);
                        await setUser({
                            id: user.data.user.id,
                            name: user.data.user.fullname,
                            role: user.data.user.role,
                            verified: user.data.user.verified
                        });
                        navigate(`/${user.data.user.role}/home`);
                    }
                });
            }

        } catch (error) {
            console.error(error);

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
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='bg-purple-800 h-full flex justify-center items-center '>
            <div className='bg-white pb-5 w-95 rounded-xl '>
                <div className='text-center flex p-6'>
                    <img className='h-10 mt-3 ml-9' src={logo} alt="" />
                    <span className='text-lg ml-10 text-purple-800'> Alumni <br /> Portal </span>
                </div>

                <form className="max-w-sm mx-auto px-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 text-xl font-medium text-purple-900 ">Enter Email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                            placeholder="name@flowbite.com"
                            required
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-400 text-sm'>This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-xl font-medium text-purple-900">Enter Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder='Password'
                                {...register("password", { required: true })}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                            </button>
                        </div>
                        {errors.password && <span className='text-red-400 text-sm'>This field is required</span>}

                        <p className='text-end text-gray-600 pt-2 text=[8px] underline'> Forgot Password </p>
                    </div>

                    <button type="submit" className="text-white w-full bg-purple-700 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Submit</button>

                    <p className='text-center my-3'> or sign in with  </p>

                    <div>
                        <button type="button" className="text-black flex justify-center items-center gap-2 w-full border border-black  hover:bg-purple-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] px-5 py-2 text-center"> <img className='h-8' src={google} alt="" /> Continue With Google </button>
                    </div>

                    <Link to='/sign_in'>
                        <h4 className='text-purple-800 text-center mt-2'> Create an Account </h4>
                    </Link>
                </form>

                <ToastContainer />
            </div>
        </div>
    )
}

export default Login;