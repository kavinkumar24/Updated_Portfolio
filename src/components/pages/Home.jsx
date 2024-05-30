import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import PHOTO from '../assests/profile-pic (3).png';
import DEFAULT_PHOTO from '../assests/cartoon.avif';
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';

function Home() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 10;
      setIsTextVisible(window.scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <motion.div
        className="bg-gradient-to-b from-[#e2e7f6] to-[#f6f0e7] min-h-[140vh] grid grid-flow-row place-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="image-container relative flex justify-center">
          <motion.img
            src={DEFAULT_PHOTO}
            alt="Default"
            className="default-image h-52 w-52 mt-40 ml-0 md:h-52 md:w-52 object-cover brightness-95 z-40 border-0 drop-shadow-md rounded-full shadow-lg shadow-indigo-500/50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ opacity: 0 }}
          />
          <motion.img
            src={PHOTO}
            alt="Profile"
            className="profile-image h-52 w-52 mt-40 ml-0 md:h-52 md:w-52 object-cover brightness-95 z-40 border-0 drop-shadow-md absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ opacity: 1 }}
          />
        </div>

        <motion.div
          className="content-box mt-10 md:mt-0 p-4 flex items-center justify-center rounded-r-xl"
          initial={{ y: '100vh' }}
          animate={{ y: '0vh' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-section p-4 rounded-b-xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="miltonian-tattoo-regular text-indigo-700 text-4xl md:text-6xl font-bold">
              Kavin Kumar P
            </h1>
            <br></br>
            <TypeAnimation
      sequence={[
        
        'Full Stack Developer',
        1000, 
        'UI/UX designer',
        1000,
        'ML researcher',
        1000,
        'Content creator',
        1000
      ]}
      wrapper="span"
      speed={50} className='pridi-regular text-gray-700 text-sm border-b-2 p-2 border-gray-300'
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </motion.div>
        </motion.div>

        <div className="quote-container mt-20 mx-8 text-center mb-40">
          <motion.p
            className="text-black mt-4 text-7xl"
            initial={{ opacity: 0 }}
            animate={isTextVisible ? { opacity: 1 } : { opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            »
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={isTextVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#1c4fb7] flex flex-col md:flex-row items-start md:items-center justify-center w-full"
          >
            "Success is best when it's shared."
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-black mt-4"
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
            <span className="highlight bg-yellow-200">fostering growth and success.</span>
          </motion.p>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Home;
