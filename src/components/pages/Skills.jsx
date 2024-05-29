import React from 'react';
import Navbar from './Navbar';
import { FiUser, FiBriefcase, FiBook } from 'react-icons/fi'; 
import { FiDatabase, FiCode, FiPaintbrush, FiTerminal, FiReact,FiGrid, FiBookOpen,FiVideo  } from 'react-icons/fi';
import Html from '../assests/html.png'
import Css from '../assests/css-3.png'
import Js from '../assests/js-file.png'
import Reactjs from '../assests/atom.png'
import Java from '../assests/java.png'
import Python from '../assests/python.png'
import C_img from '../assests/c-document.png'
import cpp from '../assests/cpp.png'

function Skills() {
    const cards = [
        { icon: <FiGrid className="w-8 h-8 text-blue-500 mx-auto" />, text: "UI/UX designer" },
        { icon: <FiBookOpen className="w-8 h-8 text-green-500 mx-auto" />, text: "Content creator" },
        { icon: <FiCode className="w-8 h-8 text-red-500 mx-auto" />, text: "Full stack developer" },
        { icon: <FiVideo className="w-8 h-8 text-yellow-500 mx-auto" />, text: "Educational Background" }
      ];
      const cardsLang = [
        {
          image: Html, 
          text: 'HTML',
        },
        {
          image: Css,
          text: 'CSS',
        },
        {
          image: Js,
          text: 'JS',
        },
        {
          image: Reactjs,
          text: 'React Js',
        },
        {
          image:Java,
          text: 'Java',
        },
        {
          image:Python,
          text: 'Python',
        },
        {
          image:C_img,
          text: 'C',
        },
        {
          image:cpp,
          text: 'C++',
        }
        
      ];
  return (
    <div className='bg-gradient-to-b from-[#e2e7f6] to-[#f6f0e7] min-h-screen'>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 md:py-40">
      <h1 className='mx-auto md:px-40 text-3xl font-bold mb-4 text-zinc-700'>Experience</h1>

        <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 md: mx-auto flex flex-col items-center md:flex-row">
          <div class="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
    <h4 class="text-md font-bold mb-2">Project Intern</h4>
    <h3 class="text-sm font-light mb-2">Coimbatore</h3>
    <h3 class="text-sm font-semibold text-[#007bff]">2023 (3 months)</h3>
  </div>
            <div className='ml-0 md:ml-16'>
              <h2 className="text-[#3275ba] text-2xl font-bold text-nowrap md:text-4xl">Strackit Private Limited</h2>
              <p className="text-base justify-center text-justify mt-4">In this Internship time period, I've learned many things, related to react, as a Software Engineer, They hire me as a software developer in react js with the database of mongodb I'm so grateful to myself for believing in myself and taking the necessary steps to make my dream a reality.</p>
            </div>
          
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 md: mx-auto flex flex-col items-center md:flex-row">
        <div class="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
            <h4 class="text-md font-bold mb-2">Project Intern</h4>
            <h3 class="text-sm font-light mb-2">Chennai</h3>
            <h3 class="text-sm font-semibold text-[#007bff]">2023 (1 month)</h3>
        </div>
            <div className='ml-0 md:ml-16'>
              <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Stellar academy</h2>
              <p className="text-base justify-center text-justify mt-4">During this Internship period, I built the react application and I'm new to PostgreSql for backend Database so I learned it side by side, In those periods I worked in a team of 3, were I can learn how to commnicate with team members to complete the projects easily.</p>
            </div>
          </div>
        


          <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 md: mx-auto flex flex-col items-center md:flex-row">
        <div class="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
            <h4 class="text-md font-bold mb-2">Web Developer</h4>
            <h3 class="text-sm font-light mb-2">Trichy</h3>
            <h3 class="text-sm font-semibold text-[#007bff]">2023-2024 (6 months)</h3>
        </div>
            <div className='ml-0 md:ml-16'>
              <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Trio devs Digital Services</h2>
              <p className="text-base justify-center text-justify mt-4">During this Internship period, I built the react application and I'm new to PostgreSql for backend Database so I learned it side by side, In those periods I worked in a team of 3, were I can learn how to commnicate with team members to complete the projects easily.</p>
            </div>
          </div>

      </div>


      <div className="container mx-auto px-4 md:py-0">
      <h1 className='mx-auto md:px-40 text-3xl font-bold mb-4 text-zinc-700'>Education</h1>

        <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 md: mx-auto flex flex-col items-center md:flex-row">
          <div class="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
    <h4 class="text-md font-bold mb-2">SSLC & HSC</h4>
    <h3 class="text-sm font-light mb-2">Dharapuram</h3>
    <h3 class="text-sm font-semibold text-[#007bff]">2019 - 2021</h3>
  </div>
            <div className='ml-0 md:ml-16'>
              <h2 className="text-[#3275ba] text-2xl font-bold text-nowrap md:text-4xl">P.M.H.S.S</h2>
              <p className="text-base justify-center text-justify mt-4">I did my schoolings in P.M.H.S.S school in Dharapuram, were I can completed by 10th standard, 11th standard, 12th standards, and learned some basic core stuffs (Maths and Physics), and also learned some of life skills.
              
              
              </p>

            </div>
          
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 md: mx-auto flex flex-col items-center md:flex-row">
        <div class="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
            <h4 class="text-md font-bold mb-2">Undergraduate (CT)</h4>
            <h3 class="text-sm font-light mb-2">Sathyamangalam</h3>
            <h3 class="text-sm font-semibold text-[#007bff]">2021-2025</h3>
        </div>
            <div className='ml-0 md:ml-16'>
              <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Bannari Amman Institute of Technology</h2>
              <p className="text-base justify-center text-justify mt-4">I'm pursuing B.tech computer technology in Bannari Amman Institue of technology, we I have learning all the computer core concept from 1st sem to 8th sem which make my knowledge more enhanceability to understand the problems</p>
            </div>
          </div>
        

      </div>

      <div className=" mx-auto px-4 py-8 md:py-0">
      
    <div className="p-4 rounded-2xl justify-between mb-0 md:mb-0 md:w-3/4 md: mx-auto flex flex-col items-center md:flex-row">
    <div className="container mx-auto px-4 md:py-10">
        <h1 className='text-3xl font-bold mb-8 text-center'>Professional Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md h-36 hover:scale-95">
                <div className="flex items-center justify-center mb-4">{card.icon}</div>
                <h2 className="text-pretty mb-4 text-center">{card.text}</h2>
                
            </div>
            ))}
        </div>
        </div>
    </div>

   
        <div className="p-4 rounded-2xl justify-between mb-8 md:mb-6 md:w-3/4 md:mx-auto flex flex-col items-center md:flex-row">
      <div className="container mx-auto px-2 md:py-4">  <h1 className="text-3xl font-bold mb-8 text-center">Languages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 justify-items-center">  {cardsLang.map((card, index) => (
            <div key={index} className="flex flex-col items-center pb-0 mb-0">  <div className="bg-white rounded-3xl shadow-2xl w-20 h-20 overflow-hidden p-4 hover:scale-95">
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-base font-semibold mt-4 text-center">{card.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>


      <div className=" mx-auto px-4 py-8 md:py-0">
   
  
        </div>
      
    </div>
  );
}

export default Skills;
