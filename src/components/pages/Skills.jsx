import React from 'react';
import Navbar from './Navbar';

function Skills() {
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
            <h4 class="text-md font-bold mb-2">Project Intern</h4>
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
    </div>
  );
}

export default Skills;
