import React, { useRef } from 'react';
import logo from '../assets/logo.png'
import pic from '../assets/Profilepic.png'
import Aboutme from '../Components/Aboutme';
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
import HeroBackground from '../Components/HeroBackground';
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di"
import { SiExpress, SiTailwindcss, SiJavascript, SiGit } from "react-icons/si"
import SkillsSection from './Skillsection';
import ProjectDisplay from './ProjectDisplay';
import { BsDownload } from "react-icons/bs"
import { FiDownload } from "react-icons/fi";
import ContactForm from './ContactForm';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

const Heromodule = () => {
  const [showpopups, setshowpopups] = useState(false)
  const projectDisplayRef = useRef(null);

  const scrollToProjectDisplay = () => {
    if (projectDisplayRef.current) {
      projectDisplayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="h-screen w-screen m-0 p-0 text-white font-nunito relative overflow-hidden">
        <HeroBackground />
        <section className='flex flex-col justify-between h-screen relative z-10'>
          {/* Header */}
          <header className='flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto animate-slide-up' style={{ animationDelay: '0.1s' }}>
            <Logo />
            <div className="flex items-center gap-4">
              {/* Status pill */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-[#42c6a1] pulse-dot" />
                Available for work
              </div>
              <div className="relative group cursor-pointer overflow-hidden w-[200px] h-[50px] flex flex-row items-center lg:flex-col transition-all duration-700">
                <a
                  href="https://drive.google.com/file/d/1QMuHnUjCWExaVCm1V6tJz-Rue8pQsAvm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center relative"
                >
                  <BsDownload className="text-xl lg:text-2xl text-white lg:transition-transform lg:duration-700 lg:group-hover:-translate-x-[300%]" />
                  <p className="text-white text-base lg:text-md font-semibold ml-2 lg:absolute lg:right-0 lg:top-0 lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center lg:transition-transform lg:duration-700 lg:translate-x-full lg:group-hover:translate-x-0">
                    Download CV
                  </p>
                </a>
              </div>
            </div>
          </header>

          {/* Main hero content */}
          <div className='flex -mt-10 relative'>
            <div className='w-full h-full max-w-5xl mx-auto overflow-hidden'>
              <div className="relative">
                {/* Name with staggered slide-up reveal */}
                <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#42c6a1] mb-2 font-semibold">Hello, I'm</p>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <h1 className='sm:text-[72px] text-[44px] font-spartan font-bold whitespace-nowrap leading-tight'>
                    Jimil <span className="text-shimmer">Soni</span>
                  </h1>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.55s' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="glow-line" />
                    <p className='font-merriweather italic text-sm text-gray-300'>MERN Stack Developer</p>
                  </div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.65s' }}>
                  <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
                    I build robust & scalable web applications with modern technologies. Turning ideas into elegant digital experiences.
                  </p>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.75s' }}>
                  <Aboutme onClick={() => setshowpopups(true)} />
                </div>

                {/* Floating tech badges */}
                <div className="hidden lg:block">
                  <div className="absolute -right-4 top-0 badge-float animate-slide-up" style={{ animationDelay: '1.1s' }}>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-gray-400">
                      <DiReact className="text-[#61DAFB] text-sm" /> React
                    </div>
                  </div>
                  <div className="absolute -right-12 top-16 badge-float animate-slide-up" style={{ animationDelay: '1.25s', animationDuration: '5s' }}>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-gray-400">
                      <DiNodejsSmall className="text-[#68A063] text-sm" /> Node.js
                    </div>
                  </div>
                  <div className="absolute -right-2 top-32 badge-float animate-slide-up" style={{ animationDelay: '1.4s', animationDuration: '4.5s' }}>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-gray-400">
                      <DiMongodb className="text-[#4DB33D] text-sm" /> MongoDB
                    </div>
                  </div>
                </div>
              </div>
              <LogoImage />
            </div>

            {/* Social links with staggered entrance */}
            <ul className="social-stagger ml-auto space-y-6 cursor-pointer absolute right-8 border border-white/10 bg-white/5 backdrop-blur-md p-3 rounded-xl max-w-full">
              <li className="animate-slide-up opacity-0 hover:scale-110 hover:text-[#42c6a1] transition-all duration-300">
                <a href="https://www.linkedin.com/in/jimil-v-soni-3382b42b0/" target="_blank"><Linkedinlogo /></a>
              </li>
              <li className="animate-slide-up opacity-0 hover:scale-110 hover:text-[#42c6a1] transition-all duration-300">
                <a href="https://x.com/Jimil_14" target="_blank">
                  <Twitterlogo />
                </a>
              </li>
              <li className="animate-slide-up opacity-0 hover:scale-110 hover:text-[#42c6a1] transition-all duration-300">
                <a href="https://www.instagram.com/jimilsoni.js/" target="_blank">
                  <Instagramlogo />
                </a>
              </li>
              <li className="animate-slide-up opacity-0 hover:scale-110 hover:text-[#42c6a1] transition-all duration-300">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jimil4117@gmail.com" target="_blank">
                  <Maillogo />
                </a>
              </li>
              <li className="animate-slide-up opacity-0 hover:scale-110 hover:text-[#42c6a1] transition-all duration-300">
                <a href="https://github.com/jimil222">
                  <Githublogo />
                </a>
              </li>
            </ul>
          </div>

          {/* Decorative rotating ring - bottom right area */}
          <div className="absolute bottom-32 right-24 w-40 h-40 hidden lg:block pointer-events-none">
            <div className="spin-slow w-full h-full rounded-full border border-dashed border-white/[0.06]" />
            <div className="absolute inset-4 spin-slow rounded-full border border-white/[0.04]" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
          </div>

          {/* Modern scroll indicator */}
          <div className='self-center mb-8 animate-slide-up' style={{ animationDelay: '0.9s' }}>
            <button
              onClick={scrollToProjectDisplay}
              className="flex flex-col items-center gap-2 group outline-none"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#42c6a1] transition-colors duration-300">
                Latest Works
              </span>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-[#42c6a1] transition-colors duration-300 scroll-indicator"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </section>
        {
          showpopups && <div className="popupdiv fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
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
        <ExperienceSection />
      </div>


      <div className="min-h-screen w-screen m-0 p-0 ">
        <EducationSection />
      </div>

      <div className="min-h-screen w-screen m-0 p-0 ">
        <ContactForm />
      </div>
    </>
  );
};

export default Heromodule;
