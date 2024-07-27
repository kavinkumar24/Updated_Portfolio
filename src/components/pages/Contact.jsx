import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiCode } from 'react-icons/fi';
import Footer from './Footer';
import { motion } from 'framer-motion';

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
    <div className='bg-gradient-to-b from-[#e2e7f6] min-h-screen'>
      <Navbar />
      <div className="container mx-auto px-7 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 lg:mt-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Message me</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-gray-200"
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
                  className="w-full h-28 px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-gray-200"
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
          <div className="space-y-6">
            <ContactCard
              icon={<FiLinkedin className="text-indigo-700 text-3xl hover:text-indigo-500 transition duration-300" />}
              title="LinkedIn"
              description="its__me__kavin__"
              href="https://www.linkedin.com/in/kavinpalanisamy"
            />
            <ContactCard
              icon={<FiMail className="text-indigo-700 text-3xl hover:text-indigo-500 transition duration-300" />}
              title="Gmail"
              description="kavinpalanisamy242003@gmail.com"
              href="mailto:kavinpalanisamy242003@gmail.com"
            />
            <ContactCard
              icon={<FiPhone className="text-indigo-700 text-3xl hover:text-indigo-500 transition duration-300" />}
              title="Phone"
              description="9345695264"
              href="tel:9345695264"
            />
            <ContactCard
              icon={<FiGithub className="text-indigo-700 text-3xl hover:text-indigo-500 transition duration-300" />}
              title="GitHub"
              description="kavinkumar24"
              href="https://github.com/kavinkumar24"
            />
            <ContactCard
              icon={<FiCode className="text-indigo-700 text-3xl hover:text-indigo-500 transition duration-300" />}
              title="Leetcode"
              description="kavinpalanisamy"
              href="https://leetcode.com/kavinpalanisamy/"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

const ContactCard = ({ icon, title, description, href }) => (
  <motion.div
    className="bg-white p-4 rounded-lg w-full shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300 md:w-[80%] mx-auto"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
    </a>
  </motion.div>
);

export default Contact;
