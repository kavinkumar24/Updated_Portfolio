import React, { useState, useEffect } from 'react';
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from 'react-router';
import sign from '../assests/sign.jpg';
import sign_mobile from '../assests/sign_copy.jpg';

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 170);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const navigate_to_skills = () => {
    navigate('/skills');
  };

  return (
    <div className={`flex justify-between items-center h-24 w-full px-4 text-zinc-800 md:fixed z-50 bg-[#e2e7f6] ${isScrolled ? 'shadow-md' : ''}`}>
        <div className={`w-28 left-0`}>
          {window.innerWidth < 768 ? (
            <h1 className="text-4xl font-bold text-indigo-700 left-10">KK</h1>
          ) : (
            <img src={sign} alt="sign_logo" width="20%" className='w-28' />
          )}
        </div>
      <div className='flex'>
        {/* Uncomment and add functionality to the search input if needed */}
        {/* <input className='bg-slate-100 p-2 rounded-lg focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300' placeholder='Search' type='text' />
        <div className='bg-zinc-500 p-3 rounded-sm'>
          <CiSearch className='text-neutral-100' />
        </div> */}
      </div>
      <div className='flex justify-between fixed right-0 z-50'>
        <ul className='hidden md:flex md:items-center gap-[0vw] mr-16'>
          <li className='p-4 mx-8 bg-indigo-500 text-white w-20 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer'>Home</li>
          <li className='p-4 mx-8 bg-indigo-500 text-white w-20 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer' onClick={navigate_to_skills}>Skills</li>
          <li className='p-4 mx-8 bg-indigo-500 text-white w-20 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer'>Projects</li>
          <li className='p-4 mx-8 bg-indigo-500 text-white h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {showMenu ? <IoCloseCircle size={30} /> : <CiMenuFries size={30} />}
      </div>
      {showMenu && (
        <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-700 md:hidden z-50'>
          <img src={sign_mobile} alt="sign_logo" width="20%" className="w-28 left-0" />
          <ul className='pt-2 uppercase'>
            <li className='p-4 border-b border-indigo-300 text-black'>Home</li>
            <li className='p-4 border-b border-indigo-300 text-black'>Skills</li>
            <li className='p-4 border-b border-indigo-300 text-black'>Projects</li>
            <li className='p-4 border-b border-indigo-300 text-black'>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
