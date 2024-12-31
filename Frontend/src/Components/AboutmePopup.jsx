import React from 'react'
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { useState } from 'react';
import 'animate.css';

const AboutmePopup = () => {
    const [showpopups, setshowpopups] = useState(false)
  return (
    <>
              <div className="popupdiv fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
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
    </>
  )
}

export default AboutmePopup
