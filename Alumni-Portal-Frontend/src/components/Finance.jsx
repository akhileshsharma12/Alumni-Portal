import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Finance = () => {
  const gradientTextStyle = {
    background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const socialLinks = [
    { href: 'https://www.facebook.com/ghruofficial/?locale=hi_IN', icon: <FaFacebook size={30} /> },
    { href: 'https://twitter.com', icon: <FaTwitter size={30} /> },
    { href: 'https://www.instagram.com/ghruofficial/?hl=en', icon: <FaInstagram size={30} /> },
    { href: 'https://linkedin.com', icon: <FaLinkedin size={30} /> },
  ];

  return (
    <>
      <h1 className='px-3 pb-3 mt-6 lg:mt-2 text-3xl font-semibold border-b border-gray-500'>Donation</h1>
      <div className='mt-20 text-center flex flex-col items-center'>
        <motion.div
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className='mb-6'
        >
          <FaTools size={100} className='text-gray-500' />
        </motion.div>

        <motion.h2
          className='text-3xl sm:text-4xl font-bold italic mb-4'
          style={gradientTextStyle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Website Under Construction
        </motion.h2>

        <motion.p
          className='px-10 mt-4 text-gray-700'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We're working hard to bring you a better experience. Please check back soon for updates!
        </motion.p>

        <motion.p
          className='px-10 mt-4 text-gray-600'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          In the meantime, feel free to explore our other resources and connect with us on social media.
        </motion.p>

        <div className='flex justify-center gap-4 mt-8'>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 hover:text-purple-700 transition-colors'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Finance;
