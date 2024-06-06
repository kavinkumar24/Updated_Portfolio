import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { FiLinkedin,FiGithub, FiMail, FiPhone, FiCode} from 'react-icons/fi';
import Footer from './Footer';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1r2di1d', 'template_sfz5cme', form.current, 'zjmoB3D1wEucCTPFO')
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div className='bg-gradient-to-b from-[#e2e7f6]'>
    <Navbar />
    
    <div className="mx-4 flex flex-col items-center md:flex-row min-h-screen justify-between md:mx-40 mb-10">
      <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow-lg md:mt-20">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Message me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full px-3 py-2 text-sm  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-gray-200 "
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              name="from_email"
              className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full h-10 px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-gray-200 "
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      
      <div className="w-full max-w-md p-8 rounded-lg mt-10 md:mt-20">

        <div className=' max-w-md p-8 space-y-20 w-3/2'>
          <div className='flex flex-col'>
            <div className='bg-white shadow-md flex flex-row space-x-10 p-4 mb-4 w-full rounded-md'>
            <div className='p-2 bg-blue-700 rounded-full text-white shadow-md hover:scale-90'>
              <FiLinkedin />
            </div>
            <div className='text-center justify-center mx-auto mt-1'>
              <a href = "https://www.linkedin.com/in/kavinpalanisamy" target="_blank" rel="noreferrer" className='hover:text-indigo-700 hover:underline'>Linked IN</a>
            </div>
            </div>

            <div className='bg-white shadow-md flex flex-row space-x-10 p-4 mb-4 w-full rounded-md'>
            <div className='p-2  bg-blue-700 rounded-full text-white shadow-md hover:scale-90'>
              <FiMail />
            </div> 
            <div className='text-center justify-center mx-auto mt-1'>
            <a href="mailto:kavinpalanisamy242003@gmail.com" title='kavinpalanisamy242003@gmail.com' className='hover:text-indigo-700 hover:underline'>Gmail</a>
            </div>
            </div>

            <div className='bg-white shadow-md flex flex-row space-x-10 p-4 mb-4 rounded-md'>
            <div className='p-2  bg-blue-700 rounded-full text-white shadow-md hover:scale-90' >
              <FiPhone />
            </div>
            <h1>9345695264</h1>
            </div>

            <div className='bg-white shadow-md flex flex-row space-x-10 p-4 mb-4 rounded-md'>
            <div className='p-2  bg-blue-700 rounded-full text-white shadow-md hover:scale-90'>
              <FiGithub />
            </div>
            <a href="https://github.com/kavinkumar24/" className='hover:text-indigo-700 hover:underline'>GitHub</a>
            </div>


            <div className='bg-white shadow-md flex flex-row space-x-10 p-4 mb-4 rounded-md'>
            <div className='p-2  bg-blue-700 rounded-full text-white shadow-md hover:scale-90'>
              <FiCode />
            </div>
            <a href="https://leetcode.com/kavinpalanisamy/" className='hover:text-indigo-700 hover:underline'>Leetcode</a>
            </div>


          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
