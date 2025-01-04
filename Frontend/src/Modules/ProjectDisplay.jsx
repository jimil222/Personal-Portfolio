import React from 'react';
import Project1 from '../assets/bg removal img.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import { motion } from 'framer-motion';

const ProjectDisplay = () => {
  // Variants for entering animations
  const variantsRight = {
    hidden: { opacity: 0, x: 100 }, // Start from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const variantsLeft = {
    hidden: { opacity: 0, x: -100 }, // Start from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="max-w-screen-2xl px-6 sm:px-24 mx-auto relative pb-8 sm:pb-16 bg-[#111827]">
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-semibold px-4 py-2 w-max mx-auto text-center text-[#42c6a1] sm:border-b-2 border-[#42c6a1]">
        Latest Works
      </h2>

      {/* First Project */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantsRight}
        className="flex flex-col sm:flex-row mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
        viewport={{ once: true }}
      >
        <a href="https://github.com/jimil222/Bg-Removal-Site" className="flex w-full relative justify-center sm:justify-start" target='_blank'>
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgb(66,198,161)]"
              src={Project1}
              alt="Bg removal"
            />
            {/* Tooltip with message icon style */}
            <div className="absolute top-[-50px] sm:top-[-60px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-lg shadow-lg transition-opacity duration-200">
              <span>Github Repository Link</span>
              {/* Tooltip arrow */}
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
          </div>
        </a>

        <div className="w-full text-center mt-6 sm:mt-0">
          <h3 className="text-[#459bd5] font-bold text-2xl sm:text-4xl mb-2">Bg Removal</h3>
          <span className="text-[#459bd5] italic text-base md:text-lg">(Advanced Background Removal Website)</span>
          <p className="text-justify text-sm sm:text-base mt-4 text-white leading-relaxed">
            Experience the power of a feature-rich <strong>Background Removal Website</strong> built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project integrates advanced image processing capabilities through a securely implemented third-party API, ensuring precise background removal with optimal performance and data confidentiality. Demonstrating expertise in scalable full-stack development, secure API integration, and user-centric design, this application delivers an intuitive and seamless user experience.
          </p>
          <ul className="flex flex-wrap gap-3 mt-6 justify-center">
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#REACT JS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#TAILWIND CSS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#NODE JS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#MONGODB</li>
          </ul>
        </div>
      </motion.div>


      {/* Second Project */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantsLeft}
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
        viewport={{ once: true }}
      >
        <div className="order-2 sm:order-1 w-full text-center">
          <h3 className="text-[#ffe578] font-bold text-2xl sm:text-4xl mb-2">AI Trip Planner</h3>
          <span className="text-[#ffe578] italic text-base md:text-lg">(Your Personalized Trip Planner)</span>
          <p className="text-justify text-sm sm:text-base mt-4 text-white leading-relaxed">
            Plan your perfect trip with ease using <strong>AI Trip Planner</strong>. Built with a sleek and responsive interface using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, this project helps users plan personalized trips by providing location suggestions, navigation links, and hotel recommendations. It reflects my ability to integrate APIs and create seamless, interactive web applications for an enhanced user experience.
          </p>

          <ul className="flex flex-wrap gap-3 mt-6 justify-center">
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#ReactJS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#TailwindCSS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#Firebase</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#GoogleAPIs</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#GeminiAPI</li>
          </ul>
        </div>

        <a href="https://github.com/jimil222/AI-trip-Planner" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start" target='_blank'>
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(66,198,161)]"
              src={Project2}
              alt="AI trip planner"
            />
            {/* Tooltip with message icon style */}
            <div className="absolute top-[-50px] sm:top-[-60px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-lg shadow-lg transition-opacity duration-200">
              <span>Github Repository Link</span>
              {/* Tooltip arrow */}
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
          </div>
        </a>
      </motion.div>

      {/* Third Project */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantsRight}
        className="flex flex-col sm:flex-row mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
        viewport={{ once: true }}
      >
        <a href="https://github.com/jimil222/Bg-Removal-Site" className="flex w-full relative justify-center sm:justify-start" target='_blank'>
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgb(66,198,161)]"
              src={Project3}
              alt="Bg removal"
            />
            {/* Tooltip with message icon style */}
            <div className="absolute top-[-50px] sm:top-[-60px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-lg shadow-lg transition-opacity duration-200">
              <span>Github Repository Link</span>
              {/* Tooltip arrow */}
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
          </div>
        </a>

        <div className="w-full text-center mt-6 sm:mt-0">
          <h3 className="text-[#459bd5] font-bold text-2xl sm:text-4xl mb-2">Hotel Room Booking System</h3>
          <span className="text-[#459bd5] italic text-base md:text-lg">(Hotel Room Booking Website)</span>
          <p className="text-justify text-sm sm:text-base mt-4 text-white leading-relaxed">
            Developed a responsive and user-friendly landing page to navigate a room booking list featuring multiple room options. Integrated a seamless room booking system where users can book rooms and receive confirmation emails using Nodemailer. Implemented robust admin functionalities for adding or removing rooms, marking payments as completed, and managing user checkouts.
          </p>

          <ul className="flex flex-wrap gap-3 mt-6 justify-center">
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#REACT JS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#TAILWIND CSS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#NODE JS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#EXPRESS JS</li>
            <li className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">#MYSQL</li>
          </ul>
        </div>
      </motion.div>

    </section>
  );
};

export default ProjectDisplay;
