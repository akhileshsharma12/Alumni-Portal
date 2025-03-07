import React from 'react';
import main_logo from '../assets/ghrua-white.png';

const Footer = () => {

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className='bg-white pt-10'>
            <footer className="footer bg-[#5c0f8b] text-base-content p-7 pl-6 lg:pl-10 ">
                <div className='mt-20 '>
                    <aside>
                        <img className='h-[58px]' src={main_logo} alt="logo" />
                    </aside>
                </div>
                <nav>
                    <h1 className="footer-title text-xl font-[italic] text-white"> Important Link </h1>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Apply Now </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Admission Procedure </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Programs Offered </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Blogs </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Hobby Clubs </a>
                </nav>
                <nav>
                    <h1 className="footer-title text-xl font-[italic] text-white"> Portals </h1>
                    <a className="link link-hover text-[#FFFFFF] text-md"> Alumni Portal </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> NSP </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> NAC </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> SGRKF </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> GHRSCF </a>
                </nav>
                <nav>
                    <h1 className="footer-title text-xl font-[italic] text-white"> GHRU Amravati </h1>
                    <a className="link link-hover text-[#FFFFFF] text-md"> G.H.Raisoni Nagar, Anjangaon Bari Road, Amravati 44471(MH) </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> 9022363277 / 9022207529  </a>
                    <a className="link link-hover text-[#FFFFFF] text-md"> info@ghtua.edu.in </a>

                    <div className='w-full mt-8 flex gap-5 justify-end'>
                        <a href="https://www.facebook.com/ghruofficial/?locale=hi_IN">
                            <i className="fa-brands fa-facebook text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                        </a>
                        <a href="https://www.instagram.com/ghruofficial/?hl=en">
                            <i className="fa-brands fa-instagram text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                        </a>
                        <a href="https://twitter.com/Raisoni.net">

                        </a>
                        <i className="fa-brands fa-x-twitter text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                        <i className="fa-brands fa-youtube text-[23px] text-white border border-red-600 p-2 rounded-full"></i>
                    </div>
                </nav>

            </footer>
            <div className='text-center bg-[#5c0f8b] pb-7'>
                <p className='text-white'> © {currentYear} All Rights Reserved. Design & Developed by <span className='text-red-400'> Techboosters </span> </p>
            </div>
        </div>
    )
}

export default Footer;