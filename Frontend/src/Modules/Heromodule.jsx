import React, { useRef } from 'react';
import '../styles/reset.css';
import logo from '../assets/logo.png'
import pic from '../assets/Profilepic.png'
import Aboutme from '../Components/Aboutme';
import Latestworks from '../Components/Latestworks';
import Logo from '../Components/Logo';
import Phoneicon from '../Components/Phoneicon';
import Whatsappicon from '../Components/Whatsappicon';
import LogoImage from '../Components/LogoImage';
import Linkedinlogo from '../Components/Linkedinlogo';
import Twitterlogo from '../Components/Twitterlogo';
import Instagramlogo from '../Components/Instagramlogo';
import Maillogo from '../Components/Maillogo';
import Githublogo from '../Components/Githublogo';
import { useState } from 'react';
import ParticlesComponent from '../Components/ParticlesComponent';
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import 'animate.css';
import SkillsSection from './Skillsection';
import ProjectDisplay from './ProjectDisplay';
import ContactForm from './ContactForm';

const Heromodule = () => {
  const [showpopups, setshowpopups] = useState(false)
  const projectDisplayRef = useRef(null); // Create a ref for ProjectDisplay

  const scrollToProjectDisplay = () => {
    if (projectDisplayRef.current) {
      projectDisplayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      <div className="h-screen w-screen m-0 p-0 text-white font-nunito">
        <ParticlesComponent />
        <section className='flex flex-col justify-between h-screen'>
          <header className='flex justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto'>
            <Logo />
          </header>
          <div className='flex -mt-10 relative'>
            <div className='w-full h-full max-w-5xl mx-auto overflow-hidden'>
              {/* Text section */}
              <div className="relative">
                <div className="animate__animated animate__bounceInDown">

                  <h1 className='sm:text-[64px] text-[40px] font-spartan font-semibold whitespace-nowrap'>Jimil <span
                    className="bg-gradient-to-l  bg-clip-text text-transparent border border-transparent"
                    style={{
                      WebkitTextStroke: '2px #fff', // This is for the text outline
                    }}
                  >Soni</span></h1>
                  <p className='font-merriweather italic text-sm mb-8'>MERN Stack Developer</p>
                </div>
                <Aboutme onClick={() => setshowpopups(true)} />
              </div>
              <LogoImage />
            </div>
            <ul className="ml-auto space-y-6 cursor-pointer absolute right-8 border-0 md:border-2 border-[rgba(255,255,255,0.094)] bg-transparent md:bg-[rgba(255,255,255,0.1)] md:backdrop-blur-[10px] p-3 rounded-lg fadeinright max-w-full">
              <li className="hover:scale-125 transition-transform duration-300 ">
                <a href="https://www.linkedin.com/in/jimil-v-soni-3382b42b0/" target="_blank"><Linkedinlogo /></a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <a href="https://x.com/Jimil_14" target="_blank">
                  <Twitterlogo />
                </a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <a href="https://www.instagram.com/jimilsoni.js/" target="_blank">
                  <Instagramlogo />
                </a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jimil4117@gmail.com" target="_blank">
                  <Maillogo />
                </a>
              </li>
              <li className="hover:scale-125 transition-transform duration-300 ">
                <a href="https://github.com/jimil222">
                  <Githublogo />
                </a>
              </li>
            </ul>
          </div>
          <div className='relative self-center after:content-[""] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]'>
            <Latestworks onClick={scrollToProjectDisplay} />
          </div>
        </section>
          {
            showpopups&&<div className="popupdiv fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-lg bg-gray-800 text-white rounded-lg shadow-lg ">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-gray-700 p-4">
                <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
                <button
                  className="flex items-center justify-center h-8 w-8 p-0 text-white hover:bg-gray-700 hover:rounded-full duration-200"
                  onClick={() => setshowpopups(false)}
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden="true" className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="pt-6 p-4">
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#4DB33D] flex items-center justify-center">
                      <DiMongodb className="w-12 h-12 text-white cursor-pointer" />
                    </div>
                    <span className="mt-1 font-bold text-[#4DB33D] ">M</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#000000] flex items-center justify-center">
                      <SiExpress className="w-10 h-10 text-white cursor-pointer" />
                    </div>
                    <span className="mt-1 font-bold">E</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#61DAFB] flex items-center justify-center">
                      <DiReact className="w-12 h-12 text-[#282C34] cursor-pointer" />
                    </div>
                    <span className="mt-1 font-bold text-[#61DAFB]">R</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#68A063] flex items-center justify-center">
                      <DiNodejsSmall className="w-12 h-12 text-white cursor-pointer" />
                    </div>
                    <span className="mt-1 font-bold text-[#68A063]">N</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">MERN Stack Developer</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  I'm a passionate MERN stack developer with expertise in MongoDB, Express.js, React, and Node.js.
                  I love creating robust and scalable web applications that solve real-world problems.
                </p>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base">
                    <strong className="text-gray-200">MongoDB:</strong> Expert in NoSQL database design and management
                  </p>
                  <p className="text-sm sm:text-base">
                    <strong className="text-gray-200">Express.js:</strong> Proficient in building server-side applications and APIs
                  </p>
                  <p className="text-sm sm:text-base">
                    <strong className="text-gray-200">React:</strong> Skilled in creating dynamic and responsive user interfaces
                  </p>
                  <p className="text-sm sm:text-base">
                    <strong className="text-gray-200">Node.js:</strong> Experienced in server-side JavaScript and asynchronous programming
                  </p>
                </div>
              </div>
            </div>
          </div>
          }
      </div>
      <div ref={projectDisplayRef} className="min-h-screen w-screen m-0 p-0">
        <ProjectDisplay />
      </div>


      <div className="min-h-screen w-screen m-0 p-0 ">
        <SkillsSection />
      </div>

      <div className="min-h-screen w-screen m-0 p-0 ">
        <ContactForm />
      </div>







    </>
  );
};

export default Heromodule;
