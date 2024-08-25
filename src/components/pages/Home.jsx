import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import PHOTO from '../assests/profile-pic.png';
import DEFAULT_PHOTO from '../assests/cartoon.avif';
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';
import { FaEnvelope,FaArrowDown, FaGithub, } from 'react-icons/fa';
import { FiLinkedin, FiGithub } from 'react-icons/fi';


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
        className="bg-gradient-to-b from-[#e2e7f6] to-[#f6f0e7] min-h-[140vh] grid grid-flow-row place-items-center px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="image-container relative flex justify-center">
          <motion.img
            src={PHOTO}
            alt="Default"
            className="default-image h-40 w-40 md:h-52 md:w-52 mt-20 md:mt-40 object-cover brightness-95 z-40 border-0 drop-shadow-md rounded-full shadow-lg shadow-indigo-500/50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ opacity: 0 }}
          />
          <motion.img
            src={DEFAULT_PHOTO}
            alt="Profile"
            className="profile-image h-40 w-40 md:h-52 md:w-52 mt-20 md:mt-40 object-cover brightness-95 z-40 border-0 drop-shadow-md absolute rounded-full shadow-lg shadow-indigo-500/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ opacity: 1 }}
          />
        </div>

        <motion.div
          className="content-box mt-5 md:mt-10 p-4 flex items-center justify-center rounded-r-xl text-center"
          initial={{ y: '100vh' }}
          animate={{ y: '0vh' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-section p-4 rounded-b-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="miltonian-tattoo-regular text-indigo-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Kavin Kumar P
            </h1>
            <br />

            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'UI/UX Designer',
                1000,
                'ML Researcher',
                1000,
                'Content Creator',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="type-animation-text pridi-regular text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl"
              repeat={Infinity}
            />

            <style jsx>{`
              .type-animation-text {
                display: inline-block;
                line-height: 1.5;
                margin: 0.5rem 0;
                padding: 0 0.5rem;
                border-bottom: 2px solid #D1D5DB;
              }
            `}</style>
          </motion.div>
        </motion.div>

        <div className="scroll-icon-container mt-8 md:mt-16 flex justify-center">
  <motion.div
    className="scroll-icon flex flex-col items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="h-10 w-10 rounded-full border-2 border-indigo-500 flex items-center justify-center opacity-50">
      <FaArrowDown className="text-indigo-500 text-xl" />
    </div>
    <div className="ping-animation mt-2 flex items-center justify-center">
      <div className="w-3 h-3 bg-indigo-700 rounded-full animate-ping"></div>
    </div>
  </motion.div>
</div>

        <div className="quote-container mt-5 md:mt-10 mx-4 md:mx-8 text-center mb-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={isTextVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c4fb7] text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-center w-full"
          >
            "Success is best when it's shared."
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-black mt-4 px-4 sm:px-6 md:px-10 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={isTextVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            As a computer science student specializing in{' '}
            <span className="highlight bg-indigo-200">web development</span>, I'm
            excited to join a team as a software developer. I have a deep passion
            for creating visually engaging and user-friendly applications, and
            I'm committed to staying at the forefront of new technologies. My aim
            is to{' '}
            <span className="highlight bg-green-200">adapt and architect</span>{' '}
            inventive solutions that drive the company forward,{' '}
            <span className="highlight bg-yellow-200">fostering growth and success.</span>
          </motion.p>
        </div>

        <div className="contact-container mt-0 mb-20 flex flex-col md:flex-row md:justify-center md:space-x-8">
          <a href="https://www.linkedin.com/in/kavinpalanisamy" target="_blank" rel="noopener noreferrer">
          <motion.div
              className="contact-item bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300 mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="text-indigo-700 text-4xl hover:text-indigo-500 transition duration-300" />
              <div className="contact-info">
                <h2 className="text-xl font-semibold text-gray-800">Linked In</h2>
                <p className="text-gray-600">
                  Follow and connect for updates.
                  <br />
                  <span className="text-sky-500">Kavin Kumar P</span>
                </p>
              </div>
            </motion.div>
          </a>
            
          <motion.div
            className="contact-item bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="mailto:kavinpalanisamy242003@gmail.com">
              <FaEnvelope className="text-indigo-700 text-4xl hover:text-indigo-500 transition duration-300" />
            </a>
            <div className="contact-info">
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">
                Reach out to me via email.
                <br />
                <span className="text-sky-500">kavinpalanisamy242003@gmail.com</span>
              </p>
            </div>
          </motion.div>
          <a href="https://github.com/kavinkumar24" target="_blank" rel="noopener noreferrer">
          <motion.div
              className="contact-item bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300 mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="text-indigo-700 text-4xl hover:text-indigo-500 transition duration-300" />
              <div className="contact-info">
                <h2 className="text-xl font-semibold text-gray-800">GitHub</h2>
                <p className="text-gray-600">
                  Follow me for updated projects.
                  <br />
                  <span className="text-sky-500">kavinkumar24</span>
                </p>
              </div>
            </motion.div>
            </a> 
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;
