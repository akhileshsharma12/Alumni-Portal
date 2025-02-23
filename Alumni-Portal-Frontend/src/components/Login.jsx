import React, { useState } from 'react';
import main_logo from '../assets/ghrua-white.png';
import logo from '../assets/logo-ghru.webp';
import google from '../assets/google logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();
        console.log("Form Handling");
        console.log("Email = ", email);
        console.log("Password = ", password);

        setEmail('');
        setPassword('');

        setTimeout(() => {
            navigate('/home');
        }, 3000);

        toast('✅ Login Successful !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='bg-purple-800 h-full flex justify-center items-center '>


            <div className='bg-white pb-5 w-95 rounded-xl '>

                <div className='text-center flex p-6'>
                    <img className='h-10 mt-3 ml-9' src={logo} alt="" />
                    <span className='text-lg ml-10 text-purple-800'> Alumni <br /> Portal </span>
                </div>

                <form className="max-w-sm mx-auto px-8" onSubmit={(e) => {
                    handleForm(e);
                }}>
                    <div className="mb-4">
                        <label className="block mb-2 text-xl font-medium text-purple-900 ">Enter Email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                            placeholder="name@flowbite.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-xl font-medium text-purple-900">Enter Password</label>
                        <input
                            type="password" id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />


                        <p className='text-end text-gray-600 pt-2 text=[8px] underline'> Forgot Password </p>
                    </div>


                    <button type="submit" className="text-white w-full bg-purple-700 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Submit</button>

                    <p className='text-center my-3'> or sign in with  </p>

                    <div>
                        <button type="submit" className="text-black flex justify-center items-center gap-2 w-full border border-black  hover:bg-purple-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] px-5 py-2 text-center"> <img className='h-8' src={google} alt="" /> Continue With Google </button>
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

export default Login