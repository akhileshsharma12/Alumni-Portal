import React from 'react';
import main_logo from '../assets/ghrua-white.png';

const Footer = () => {

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className='bg-white pt-10'>
            <footer className="footer bg-[#5c0f8b] text-base-content p-7">
                <div className='mt-20'>
                    <aside>
                        <img className='h-[53px]' src={main_logo} alt="logo" />
                    </aside>
                </div>
                <nav>
                    <h1 className="footer-title text-xl font-[italic]"> Important Link </h1>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Applay Now </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Admission Procedure </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Programs Offered </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Blogs </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Hobby Clubs </a>
                </nav>
                <nav>
                    <h1 className="footer-title text-xl font-[italic]"> Portals </h1>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Alumni Portal </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> NSP </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> NAC </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> SGRKF </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> GHRSCF </a>
                </nav>
                <nav>
                    <h1 className="footer-title text-xl font-[italic]"> GHRU Amravati </h1>
                    <a className="link link-hover text-[#FFFFFF] text-md"> G.H.Raisoni Nagar, Anjangaon Bari Road, Amravati 44471(MH) </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> 9022363277 / 9022207529  </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> info@ghtua.edu.in </a>

                    <div className='w-full mt-8 flex gap-5 justify-end'>
                        <i className="fa-brands fa-facebook text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                        <i className="fa-brands fa-instagram text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                        <i className="fa-brands fa-x-twitter text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                        <i className="fa-brands fa-instagram text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                    </div>
                </nav>

            </footer>
            <div className='text-center bg-[#5c0f8b] pb-7'>
                <p> © {currentYear} All Rights Reserved. Design & Developed by <span className='text-red-400'> Techboosters </span> </p>
            </div>
        </div>
    )
}

export default Footer;