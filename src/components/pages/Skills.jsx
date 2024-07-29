import React from 'react';
import Navbar from './Navbar';
import { FiCode,FiGrid, FiBookOpen,FiVideo } from 'react-icons/fi';
import { useEffect } from 'react';
import Html from '../assests/Skills/languages/html.png'
import Css from '../assests/Skills/languages/css-3.png'
import Js from '../assests/Skills/languages/js-file.png'
import Reactjs from '../assests/Skills/Frameworks/atom.png'
import Java from '../assests/Skills/languages/java.png'
import Python from '../assests/Skills/languages/python.png'
import C_img from '../assests/Skills/languages/c-document.png'
import cpp from '../assests/Skills/languages/cpp.png'
import Nodejs from '../assests/Skills/Frameworks/programing.png'
import sql from '../assests/Skills/languages/sql.png'
import Streamlit from '../assests/Skills/Frameworks/streamlit.png'
import vuejs from '../assests/Skills/Frameworks/vuejs.png'
import C1 from '../assests/Certificates/certificate1.png'
import C2 from '../assests/Certificates/certificate2.png'
import C3 from '../assests/Certificates/certificate3.png'
import C4 from '../assests/Certificates/certifcate4.png'
import C5 from '../assests/Certificates/certificate5.png'
import C6 from '../assests/Certificates/certificate6.png'
import C7 from '../assests/Certificates/certificate7.png'
import C8 from '../assests/Certificates/certificate8.png'
import git from '../assests/Skills/Tools/github.png'
import figma from '../assests/Skills/Tools/figma.png'
import vs from '../assests/Skills/Tools/logo.png'
import db from '../assests/Skills/Tools/database.png'
import Footer from './Footer';
import C9 from '../assests/Certificates/certificate9.png'

function Skills() {
//   const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
  }, []);

  const images = [
    {src:C1,link:'https://drive.google.com/file/d/1ePyIYX-qClz9eUurpO1iy1Yyak2pvLjA/view?usp=sharing'},
    {src:C2,link:'_blank'},
    {src:C3,link:'https://coursera.org/share/154f701585c5325ebcdd9aa8b1f713ca'},
    {src:C4,link:'https://coursera.org/share/a6f2bf58f0e5766e3147e9bda024861a'},
    {src:C5,link:'https://coursera.org/share/54601825774322ccc8d3bc93491e6700'},
    {src:C6,link:'https://coursera.org/share/72d3d823e884e81eb09916a66025a630'},
    {src:C7,link:''},
    {src:C8,link:'https://learn.nvidia.com/certificates?id=gieBN2hWTz27oZZYARxQ2Q'},
    {src:C9, link:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=B062912FD9B07A524609D3EFAAFF64715C4A3CFFECCC9CBE57C569FE2F41C4CE'}
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
          
          <div className="container mx-auto px-2 py-8 md:py-32 md:-mb-12">
              <h1 className='mx-auto md:px-40 text-3xl font-bold mb-4 text-zinc-700'>Experience</h1>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-6 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[100%] md:h-[90%]">
                      <h4 className="text-md font-bold mb-2">Project Intern</h4>
                      <h3 className="text-sm font-light mb-2">Coimbatore</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2023 (3 months)</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">Strackit Private Limited</h2>
                      <p className="text-base text-justify mt-4">During my internship, I've gained invaluable knowledge and skills, particularly in <span className="highlight bg-green-200">React.js</span> and backend development with <span className="highlight bg-green-200">GraphQL (Apollo).</span> I also learned about <span className="highlight bg-green-200">Scrum</span> and <span className="highlight bg-green-200">sprint planning</span>, which enhanced my ability to work effectively in an Agile environment. Being hired as a software developer in this domain is a testament to my dedication and belief in myself. I'm incredibly grateful for taking the necessary steps to turn my dream into reality.</p>
                        
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-6 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[65%]">
                      <h4 className="text-md font-bold mb-2">Project Intern</h4>
                      <h3 className="text-sm font-light mb-2">Chennai</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2023 (1 month)</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Stellar academy</h2>
                      <p className="text-base text-justify mt-4">During my internship, I built a <span className="highlight bg-red-200">React application</span> while simultaneously learning <span className="highlight bg-red-200">PostgreSQL</span> for the backend database. Working in a team of three, I gained valuable experience in effective communication and collaboration, which facilitated the smooth completion of our projects.</p>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-6 rounded-md w-full mx-auto mb-4 md:mb-0 md:w-[75%]">
                      <h4 className="text-md font-bold mb-2">Web Developer</h4>
                      <h3 className="text-sm font-light mb-2">Trichy</h3>
                      <h3 className="text-sm font-semibold text-[#007bff]">2023-2024 (6 months)</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl md:text-4xl font-bold">Trio devs Digital Services</h2>
                      <p className="text-base text-justify mt-4">As an intern specializing in <span className="highlight bg-yellow-100">React.js</span> and web development tools, I developed and tested a dynamic website based on customer needs, and following the <span className="highlight bg-yellow-100">Software Development Life Cycle (SDLC)</span> in a virtual collaboration environment. This experience enhanced my expertise in building interactive web apps with a focus on accountability and usability.</p>
                  </div>
              </div>
          </div>
          

          <div className="container mx-auto px-4 md:-py-10">
              <h1 className='mx-auto md:px-40 text-3xl font-bold mb-4 text-zinc-700'>Education</h1>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-3 rounded-md w-[75%] mx-auto mb-4 md:mb-0 md:w-[85%]">
                        <h4 className="text-md font-bold mb-2 text-center">UG</h4>
                        <h3 className="text-sm font-light mb-2 text-center">Sathyamangalam</h3>
                        <h3 className="text-sm font-semibold text-[#007bff] text-center">2021-2025</h3>
                    </div>
                    <div className='ml-0 md:ml-16'>
                        <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">Bannari Amman Institute of Technology</h2>
                        <p className="text-base text-justify mt-4">I'm currently pursuing a <span className="highlight bg-violet-200">B.Tech in Computer Technology</span> at Bannari Amman Institute of Technology, where I am in my final year (7th semester). Throughout my studies, from the 1st semester to now, I have been learning all the core concepts of computer science, which has greatly enhanced my understanding of various problems.</p>
                    </div>
                </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-[75%] mx-auto mb-4 md:mb-0 md:w-[45%]">
                      <h4 className="text-md font-bold mb-2 text-center">HSC</h4>
                      <h3 className="text-sm font-light mb-2 text-center">Dharapuram</h3>
                      <h3 className="text-sm font-semibold text-[#007bff] text-center">2019 - 2021</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">P.M.H.S.S</h2>
                      <p className="text-base text-justify mt-4">I did my schooling at P.M.H.S.S in Dharapuram, where I completed my 12th and learned some basic core subjects in Biology, Maths and Physics along with some life skills.</p>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl justify-between mb-8 md:mb-6 md:w-3/4 mx-auto flex flex-col items-center md:flex-row">
                  <div className="bg-[#eeeeee] p-2 rounded-md w-[75%] mx-auto mb-4 md:mb-0 md:w-[45%]">
                      <h4 className="text-md font-bold mb-2 text-center">SSLC & HSC</h4>
                      <h3 className="text-sm font-light mb-2 text-center">Dharapuram</h3>
                      <h3 className="text-sm font-semibold text-[#007bff] text-center">2019 - 2021</h3>
                  </div>
                  <div className='ml-0 md:ml-16'>
                      <h2 className="text-[#3275ba] text-2xl font-bold md:text-4xl">P.M.H.S.S</h2>
                      <p className="text-base text-justify mt-4">I did my schooling at P.M.H.S.S in Dharapuram, where I completed my 10th and build a strong foundation in Mathematics which help me to tackle complex problems.</p>
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
                             <a
                            key={index}
                            href={image.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group"
                            >
                        <img
                            src={image.src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform scale-100 md:group-hover:scale-110 *:md:hover:z-50"
                        />
                        </a>
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
