import React from 'react'
import Navbar from '../pages/Navbar'
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { FiGithub , FiEye, FiArrowRightCircle} from 'react-icons/fi';
import Footer from '../pages/Footer'
// Images for projects
import P1_1 from '../assests/Project1/p1.ii.png'
import P1_2 from '../assests/Project1/p1.v.png'
import P1_3 from '../assests/Project1/p1.iv.png'
import P1_4 from '../assests/Project1/p1.iii.png'
import P2_1 from '../assests/Project2/P2.i.png'
import P2_2 from '../assests/Project2/P2.ii.png'
import P2_3 from '../assests/Project2/P2.iii.png'
import P2_4 from '../assests/Project2/P2.iv.png'
import P2_5 from '../assests/Project2/P2.v.png'
import P2_6 from '../assests/Project2/P2.vi.png'
import P3_1 from '../assests/Project3/P3_1.png'
import P3_2 from '../assests/Project3/P3_2.png'
import P4_1 from '../assests/Project4/P4_1.png'
import P4_2 from '../assests/Project4/P4_2.png'
import P4_3 from '../assests/Project4/P4_3.png'
import P4_4 from '../assests/Project4/P4_4.png'
import P4_5 from '../assests/Project4/P4_5.png'
import P4_6 from '../assests/Project4/P4_6.png'
import P4_7 from '../assests/Project4/P4_7.png'
import P4_8 from '../assests/Project4/P4_8.png'
const projects = [
  {
    title: "Personalized News Webpage",
    description: "The News website built using React includes various components and features to provide an engaging and personalized user experience. This webapp allows all the features like share, bookmark, newspaper layout download, chat bot, puzzles etc.",
    images: [P1_1, P1_2, P1_3, P1_4,P2_5],
    githublink:'https://github.com/kavinkumar24/Personalized_News_webpage.git',
    live:''
    
  },
  
  {
    title: "BUDGET BUDDY",
    description: "Developed a personal finance management web application using React Js, tailwind CSS, Node js, and MongoDB. It helps to track where the money is going and also implemented many features like Budget planning (yearly, monthly), Daily Notes, investing plans, etc",
    images: [P2_1, P2_2, P2_3, P2_4, P2_5,P2_6],
    githublink:'https://github.com/kavinkumar24/Finance_website.git',
    live:'https://finance-managment01.web.app/'
  },
  {
    title: "Sketch Booker",
    description: "This web application was built in streamlit framework, which uses a CNN technology in AI, It can used to convert the normal image into cartoon image and pencil sketched image, It has no limit for conversion and it give more accuracy",
    images: [P3_1, P3_2],
    githublink:'https://github.com/kavinkumar24/Sketch_booker.git',
    live:'https://kavinkumar24-sketch-booker-app-6harak.streamlit.app/'
  },
  {
    title: "Project tracking(tac)",
    description: "This  software  system  will  serve  as  a  portal  for  the  Technical  Approval Committee  (TAC),  enabling  students  to  submit  their  projects  and  receive their  rewards.  From  an  administrative  perspective,  this  system  will  provide  a comprehensive  analytical dashboard for project oversight",
    images: [P4_1, P4_2, P4_3, P4_4,P4_5,P4_6,P4_7,P4_8],
    githublink:'https://github.com/kavinkumar24/Tac_portal.git',
    live:''
  },
  
 
];

function Projects() {
  return (
    <div className='bg-gradient-to-b from-[#e2e7f6] via-[#f6f0e7] to-[#e2e7f6] min-h-screen'>
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-40">
        <h1 className='mx-auto md:px-0 text-3xl font-bold mb-4 text-zinc-700'>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="xl:h-80 bg-white p-3 rounded-2xl shadow-xl justify-between mb-4 md:mb-10 md:w-5/6 mx-auto flex flex-col items-center md:flex-row">
            <div className="bg-[#eeeeee] p-2 rounded-md w-full mx-auto mb-4 md:mb-0 md:min-w-96 md:h-56 lg:h-58 h-48 xl:w-40">
              <Carousel withControls height={500} withIndicators>
                {project.images.map((image, imgIndex) => (
                  <Carousel.Slide key={imgIndex}>
                    <img src={image} alt={`Project_${index + 1}_img_${imgIndex + 1}`} className='w-96 object-contain' />
                  </Carousel.Slide>
                ))}
              </Carousel>
               
              <div className='text-nowrap pt-2 italic text-green-800 md:pt-4 flex-nowrap float-left'><FiArrowRightCircle /> </div>
            </div>
            <div className='ml-0 md:ml-16'>
              <h2 className="text-[#3275ba] text-2xl font-bold md:text-5xl mb-4 sirin-stencil-regular">{project.title}</h2>
              <p className="text-xl text-justify gupter-regular">{project.description}</p>
              <div className='flex flex-row'>
              <a 
                href={project.githublink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#3275ba] text-white px-4 py-2 rounded-md mt-4 inline-block hover:scale-90 hover:shadow-lg"
              >
                <div className='flex items-center'>
                  View Project 
                  <div className='bg-white rounded-full p-2 ml-2'>
                  <FiGithub className='ml-0 mt-1 text-black text-center justify-center' />
                  </div>
                  
                </div>
              </a>
              {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-400 shadow-lg text-white px-2 py-4 mt-4 inline-block hover:scale-90 hover:shadow-lg ml-2 rounded-md"
              >
                <FiEye className='mt-0'/>
              </a>
            )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Projects
