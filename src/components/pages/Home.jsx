import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import PHOTO from '../assests/profile-pic (3).png';
import { useState } from 'react';
import { useEffect } from 'react';
function Home() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 10 ; 
      setIsTextVisible(window.scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <Navbar />
      <motion.div
        className="bg-gradient-to-b from-[#e2e7f6] to-[#f6f0e7] min-h-[140vh] grid grid-flow-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="image-container relative">
          <motion.img
            src={PHOTO}
            alt="image_"
            className="image relative top-10 md:top-32 md:left-1/4 left-[22%]  transform -translate-x-1/2 md:transform-none h-52 w-52 object-cover brightness-100 z-40 border-0 drop-shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </div>

        <motion.div
          className="content-box absolute md:inset-1/3 inset-y-1/2 inset-x-0 md:w-96 w-full flex items-center justify-center border-[15px] border-[#7275F2] p-4 transform -translate-y-1/2 md:transform-none h-32 md:h-52 rounded-r-xl shadow-lg"
          initial={{ y: '100vh' }}
          animate={{ y: '0vh' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-section p-4 rounded-b-xl top-0 absolute md:left-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="miltonian-tattoo-regular text-indigo-700 text-4xl font-bold">
              Kavin Kumar P
            </h1>
            <p className="text-sm text-black pridi-regular">
              Full Stack Developer | UI/UX Designer | ML Researcher
            </p>
          </motion.div>
        </motion.div>

        <div className="quote-container mt-20 mx-8 text-center absolute top-2/3 md:top-96">
        <motion.p
            className="text-black mt-4 text-7xl"
            initial={{ opacity: 0 }}
            animate={isTextVisible ? { opacity: 1 } : { opacity: 0.3 }} 
            transition={{ duration: 0.5 }}>» </motion.p>
        <motion.h1  
        initial={{ opacity: 0 }}
        animate={isTextVisible ? { opacity: 1 } : { opacity: 0 }} 
        transition={{ duration: 1}}
         className="text-4xl font-bold text-[#1c4fb7] flex flex-col md:flex-row items-start md:items-center justify-center w-full"> "Success is best when it's shared."  </motion.h1>

          <motion.p
            className="text-lg text-black mt-4"
            initial={{ opacity: 0 }}
            animate={isTextVisible ? { opacity: 1 } : { opacity: 0 }} 
            transition={{ duration: 1 }}
          >
            As a computer science student specializing in{' '}
            <span className="highlight bg-indigo-200">web development</span>, I'm
            excited to join a team as a software Developer. I have a deep passion
            for creating visually engaging and user-friendly applications, and
            I'm committed to staying at the forefront of new technologies. My aim
            is to{' '}
            <span className="highlight bg-green-200">adapt and architect </span>
            inventive solutions that drive the company forward,{' '}
            <span className="highlight bg-yellow-200">fostering growth and
              success.</span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
