import React from 'react';
import Navbar from './Navbar';
import { FiCode,FiGrid, FiBookOpen,FiVideo } from 'react-icons/fi';
import { useEffect } from 'react';
import Html from '../assests/html.png'
import Css from '../assests/css-3.png'
import Js from '../assests/js-file.png'
import Reactjs from '../assests/atom.png'
import Java from '../assests/java.png'
import Python from '../assests/python.png'
import C_img from '../assests/c-document.png'
import cpp from '../assests/cpp.png'
import Nodejs from '../assests/programing.png'
import sql from '../assests/sql.png'
import Streamlit from '../assests/streamlit.png'
import vuejs from '../assests/vuejs.png'
import C1 from '../assests/certificate1.png'
import C2 from '../assests/certificate2.png'
import C3 from '../assests/certificate3.png'
import C4 from '../assests/certifcate4.png'
import C5 from '../assests/certificate5.png'
import C6 from '../assests/certificate6.png'
import C7 from '../assests/certificate7.png'
import C8 from '../assests/certificate8.png'
import git from '../assests/github.png'
import figma from '../assests/figma.png'
import vs from '../assests/logo.png'
import db from '../assests/database.png'
import Footer from './Footer';


function Skills() {
//   const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
  }, []);

  const images = [
    C1,
    C2,
    C3,
    C4,
    C5,
    C6,
    C7,
    C8
];
  const cards = [
      { icon: <FiGrid className="w-8 h-8 text-blue-500 mx-auto" />, text: "UI/UX designer" },
      { icon: <FiBookOpen className="w-8 h-8 text-green-500 mx-auto" />, text: "Content creator" },
      { icon: <FiCode className="w-8 h-8 text-red-500 mx-auto" />, text: "Full stack developer" },
      { icon: <FiVideo className="w-8 h-8 text-yellow-500 mx-auto" />, text: "Video Editor" }
  ];

  const cardsLang = [
      { image: Html, text: 'HTML' },
      { image: Css, text: 'CSS' },
      { image: Js, text: 'JS' },
      { image: Java, text: 'Java' },
      { image: Python, text: 'Python' },
      { image: C_img, text: 'C' },
      { image: cpp, text: 'C++' },
      {image:sql, text:'SQL'}
      
  ];
  const cardsframe = [
    { image: Reactjs, text: 'React Js' },
    { image: Nodejs, text: 'Node Js' },
    { image: Streamlit, text: 'Streamlit' },
    { image: vuejs, text: 'Vue Js' },
];
const cardstools = [
    {image:git, text:'Git'},
    {image:figma, text:'Figma'},
    {image:vs, text:'VS Code'},
    {image:db, text:'Mongo Db & Mysql'}
]

  // const handlePrev = () => {
  //   const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const handleNext = () => {
  //   const newIndex = (currentIndex + 1) % images.length;
  //   setCurrentIndex(newIndex);
  // };
  return (
      <div className='bg-gradient-to-b from-[#e2e7f6] via-[#f6f0e7] to-[#e2e7f6] min-h-screen'>
          <Navbar />
          
          <div className="container mx-auto px-4 py-8 md:py-40">
              <h1 className='mx-auto md:px-40 text-3xl font-bold mb-4 text-zinc-700'>Experience</h1>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
                      <h4 className="text-md font-bold mb-2">Project Intern</h4>
                      <h3 className="text-sm font-light mb-2">Coimbatore</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2023 (3 months)</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">Strackit Private Limited</h2>
                      <p className="text-base text-justify mt-4">In this Internship time period, I've learned many things, related to react, as a Software Engineer, They hire me as a software developer in react js with the database of mongodb I'm so grateful to myself for believing in myself and taking the necessary steps to make my dream a reality.</p>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
                      <h4 className="text-md font-bold mb-2">Project Intern</h4>
                      <h3 className="text-sm font-light mb-2">Chennai</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2023 (1 month)</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Stellar academy</h2>
                      <p className="text-base text-justify mt-4">During this Internship period, I built the react application and I'm new to PostgreSql for backend Database so I learned it side by side, In those periods I worked in a team of 3, were I can learn how to communicate with team members to complete the projects easily.</p>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
                      <h4 className="text-md font-bold mb-2">Web Developer</h4>
                      <h3 className="text-sm font-light mb-2">Trichy</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2023-2024 (6 months)</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Trio devs Digital Services</h2>
                      <p className="text-base text-justify mt-4">During this Internship period, I built the react application and I'm new to PostgreSql for backend Database so I learned it side by side, In those periods I worked in a team of 3, where I learned how to communicate with team members to complete the projects easily.</p>
                  </div>
              </div>
          </div>

          <div className="container mx-auto px-4 md:py-0">
              <h1 className='mx-auto md:px-40 text-3xl font-bold mb-4 text-zinc-700'>Education</h1>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
                      <h4 className="text-md font-bold mb-2">SSLC & HSC</h4>
                      <h3 className="text-sm font-light mb-2">Dharapuram</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2019 - 2021</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">P.M.H.S.S</h2>
                      <p className="text-base text-justify mt-4">I did my schooling at P.M.H.S.S in Dharapuram, where I completed my 10th, 11th, and 12th standards and learned some basic core subjects (Maths and Physics) along with some life skills.</p>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
                        <h4 className="text-md font-bold mb-2">Undergraduate (CT)</h4>
                        <h3 className="text-sm font-light mb-2">Sathyamangalam</h3>
                        <h3 className="text-sm font-semibold text-[#007bff]">2021-2025</h3>
                    </div>
                    <div className='ml-0 md:ml-16'>
                        <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">Bannari Amman Institute of Technology</h2>
                        <p className="text-base text-justify mt-4">I'm pursuing B.Tech in Computer Technology at Bannari Amman Institute of Technology, where I have been learning all the core concepts of computer science from the 1st semester to the 8th semester, which has enhanced my understanding of various problems.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-0">
                <div className="p-4 rounded-2xl justify-between mb-0 md:mb-0 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                    <div className="container mx-auto px-4 md:py-10">
                        <h1 className='text-3xl font-bold mb-8 text-center text-zinc-700'>Professional Skills</h1>
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

                <div className="p-4 rounded-2xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                    <div className="container mx-auto px-2 md:py-4">
                        <h1 className="text-3xl font-bold mb-8 text-center text-zinc-700">Languages</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 justify-items-center">
                            {cardsLang.map((card, index) => (
                                <div key={index} className="flex flex-col items-center pb-0 mb-0">
                                    <div className="bg-white rounded-3xl shadow-2xl w-20 h-20 overflow-hidden p-4 hover:scale-95">
                                        <img src={card.image} alt={card.text} className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="text-base font-semibold mt-4 text-center">{card.text}</h2>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>


                <div className="p-4 rounded-2xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                    <div className="container mx-auto px-2 md:py-4">
                        <h1 className="text-3xl font-bold mb-8 text-center text-zinc-700">Frameworks</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 justify-items-center">
                            {cardsframe.map((card, index) => (
                                <div key={index} className="flex flex-col items-center pb-0 mb-0">
                                    <div className="bg-white rounded-3xl shadow-2xl w-20 h-20 overflow-hidden p-4 hover:scale-95">
                                        <img src={card.image} alt={card.text} className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="text-base font-semibold mt-4 text-center">{card.text}</h2>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-2xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                    <div className="container mx-auto px-2 md:py-4">
                        <h1 className="text-3xl font-bold mb-8 text-center text-zinc-700">Tools</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 justify-items-center">
                            {cardstools.map((card, index) => (
                                <div key={index} className="flex flex-col items-center pb-0 mb-0">
                                    <div className="bg-white rounded-3xl shadow-2xl w-20 h-20 overflow-hidden p-4 hover:scale-95">
                                        <img src={card.image} alt={card.text} className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="text-base font-semibold mt-4 text-center">{card.text}</h2>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>

      <div className="p-4 rounded-2xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                    <div className="container mx-auto px-2 md:py-4">
                        <h1 className="text-3xl font-bold mb-8 text-center text-zinc-700">Certificates</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="group relative">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform scale-100 group-hover:scale-150 hover:z-50"
            />
          </div>
        ))}
      </div>
    </div>
        </div>
    </div>

    <Footer />

        </div>
    );
}

export default Skills;
