import React, { useState, useEffect } from 'react';
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from 'react-router';
import sign from '../assests/sign.jpg';
import sign_mobile from '../assests/sign_copy.jpg';
import { FiHome, FiBook, FiBriefcase, FiPhone } from 'react-icons/fi';
function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const[loading,setLoading] = useState(false)

  const handleNav = () => {
    setShowMenu(!showMenu);
  };
  const navigate_contact = () =>{
    setLoading(true)
    setTimeout(() => {  
     setLoading(false)
     navigate('/contact')
    }, 2000);
    
  }

  const navigate_home = () =>{
    setLoading(true)
    setTimeout(() => {  
     setLoading(false)
     navigate('/')
    }, 2000);
  }
  const navigate_projects =  () =>{
    setLoading(true)
    setTimeout(() => {  
     setLoading(false)
     navigate('/projects')
    }, 2000);
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 170);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const navigate_to_skills = () => {
    setLoading(true)
    setTimeout(() => {  
     setLoading(false)
     navigate('/skills');
    }, 2000);
    
  };

  return (
    <div className={`flex justify-between items-center h-24 w-full px-4 text-zinc-800 md:fixed z-50 bg-[#e2e7f6] ${isScrolled ? 'shadow-md' : ''}`}>
        <div className={`w-28 left-0`}>
          {window.innerWidth < 768 ? (
            
            <img src={sign} alt="sign_logo" width="15%" className='w-28' />

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
        <li class="p-4 mx-8 bg-indigo-500 text-white w-30 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer text-nowrap" onClick={navigate_home}>
        <div className="flex items-center"> <div className='text-[#322f2e]'>
          <div className='bg-zinc-100  p-1 rounded-lg'>
          <FiHome className='mr-1 ml-1' />
          </div>
          </div>&nbsp;Home
        </div>
      </li>

      <li class="p-4 mx-8 bg-indigo-500 text-white w-30 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer text-nowrap" onClick={navigate_to_skills}>
        <div className="flex items-center"> <div className='text-[#322f2e]'>
        <div className='bg-zinc-100  p-1 rounded-lg'>
          
          <FiBook className='mr-1 ml-1' />
          </div>
          </div>&nbsp;Skills

        </div>
      </li>
      <li class="p-4 mx-8 bg-indigo-500 text-white w-30 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer text-nowrap" onClick={navigate_projects}>
        <div className="flex items-center"> <div className='text-[#322f2e]'>
        <div className='bg-zinc-100  p-1 rounded-lg'>
          <FiBriefcase className='mr-1 ml-1' />
          </div>
          </div>&nbsp;Projects
        </div>
      </li>
      <li class="p-4 mx-8 bg-indigo-500 text-white w-30 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-indigo-600 shadow-xl hover:shadow duration-200 cursor-pointer text-nowrap" onClick={navigate_contact}>
        <div className="flex items-center"> <div className='text-[#322f2e]'>
         <div className='bg-zinc-100  p-1 rounded-lg'>
          <FiPhone className='mr-1 ml-1' />
          </div>
          </div>&nbsp;Contact
        </div>
      </li>
        </ul>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {showMenu ? <IoCloseCircle size={30} /> : <CiMenuFries size={30} />}
      </div>
      {showMenu && (
        <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-700 md:hidden z-50'>
          <img src={sign_mobile} alt="sign_logo" width="20%" className="w-28 left-0" />
          <ul className='pt-2 uppercase'>
          <li class="p-4 border-b border-indigo-300 text-black" onClick={navigate_home}>
        <div className="flex items-center"> <div className='text-[#322f2e]'><FiHome className='mr-2' /></div>&nbsp;Home
        </div>
      </li>
            <li className='p-4 border-b border-indigo-300 text-black'onClick={navigate_to_skills}><div className="flex items-center"> <div className='text-[#322f2e]'><FiBook className='mr-2' /></div>&nbsp;Skills
        </div></li>
            <li className='p-4 border-b border-indigo-300 text-black'onClick={navigate_projects}><div className="flex items-center"> <div className='text-[#322f2e]'><FiBriefcase className='mr-2' /></div>&nbsp;Projects
        </div></li>
            <li className='p-4 border-b border-indigo-300 text-black' onClick={navigate_contact}><div className="flex items-center"> <div className='text-[#322f2e]'><FiPhone className='mr-2' /></div>&nbsp;Contact
        </div></li>
          </ul>
        </div>
      )}

      {loading && (
          <div class="bg-white max-w-full max-h-full fixed px-96 inset-0 z-50">
          <div class="max-h-10 w-10 items-center justify-center pt-10 relative top-72 -left-52 md:top-60 md:left-52 animate-pulse rounded-full border-4 border-indigo-500	"></div>
          
        </div>
      )}
    </div>
  );
}

export default Navbar;
