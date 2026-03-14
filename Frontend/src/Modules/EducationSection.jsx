import React, { useRef, memo } from "react"
import { motion, useInView } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"
import { ImFilesEmpty } from "react-icons/im"
import { VscRunCoverage, VscExtensions } from "react-icons/vsc"
import { GoRepoForked } from "react-icons/go"
import { IoSearch, IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"

const education = [
  {
    institution: "Marathwada Mitra Mandal's College of Engineering",
    degree: "BE - Artificial Intelligence and Data Science Engineering",
    gpa: "CGPA - 9.57",
    duration: "2023 - 2026",
    location: "Pune, Maharashtra",
    filename: "mmcoe.js",
    dirName: "mmcoe",
    varName: "engineering",
  },
  {
    institution: "All India Shri Shivaji Memorial Society's Polytechnic",
    degree: "Diploma - Information Technology",
    gpa: "Percentage - 87.36",
    duration: "2020 - 2023",
    location: "Pune, Maharashtra",
    filename: "aissms.js",
    dirName: "aissms",
    varName: "diploma",
  },
]

const lineNumbers = Array.from({ length: 12 }, (_, i) => i + 1)

const EducationSection = memo(() => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
        mass: 0.6,
      },
    },
  })

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#111827] overflow-hidden relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaGraduationCap className="text-4xl" />
          Education
        </motion.h2>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index % 2 === 0 ? "left" : "right")}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
                {/* Header - exact match to ProjectCard */}
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-700 px-3 py-1 rounded-t-lg border-t-2 border-blue-400">
                      <span className="text-white text-sm font-mono">
                        {edu.filename}
                      </span>
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Editor - exact match to ProjectCard */}
                <div className="flex h-96">
                  <div className="bg-gray-800 w-12 flex flex-col items-center py-3 border-r border-gray-700 text-white">
                    <ImFilesEmpty className="mb-3" />
                    <IoSearch className="mb-3" />
                    <VscRunCoverage className="mb-3" />
                    <div className="relative mb-3">
                      <GoRepoForked />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                        7
                      </div>
                    </div>
                    <VscExtensions className="mb-6" />
                    <div className="flex-1"></div>
                    <CgProfile className="text-gray-400 mb-3" />
                    <IoSettingsOutline className="text-gray-400" />
                  </div>

                  {/* Code Area */}
                  <div className="flex-1 bg-gray-900 font-mono text-sm flex">
                    <div className="bg-gray-800 px-3 py-4 text-gray-500 text-right select-none border-r border-gray-700">
                      {lineNumbers.map((num) => (
                        <div key={num} className="leading-6">{num}</div>
                      ))}
                    </div>

                    <div className="flex-1 p-4 text-gray-300 leading-6 overflow-y-auto">
                      <div>
                        <span className="text-green-400">~/{edu.dirName}</span>
                        <span className="text-green-400"> $ </span>
                        <span className="text-gray-300">cat education.log</span>
                      </div>

                      <div className="mt-1"></div>

                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">{edu.varName}</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-yellow-300">{"{"}</span>
                      </div>

                      <div className="ml-4">
                        <span className="text-green-300">institution</span>:{" "}
                        <span className="text-orange-300">"{edu.institution}"</span>,
                      </div>

                      <div className="ml-4">
                        <span className="text-green-300">degree</span>:{" "}
                        <span className="text-orange-300">"{edu.degree}"</span>,
                      </div>

                      <div className="ml-4">
                        <span className="text-green-300">score</span>:{" "}
                        <span className="text-orange-300">"{edu.gpa}"</span>,
                      </div>

                      <div className="ml-4">
                        <span className="text-green-300">duration</span>:{" "}
                        <span className="text-orange-300">"{edu.duration}"</span>,
                      </div>

                      <div className="ml-4">
                        <span className="text-green-300">location</span>:{" "}
                        <span className="text-orange-300">"{edu.location}"</span>
                      </div>

                      <div>{"}"}<span className="text-gray-300">;</span></div>

                      <div className="mt-2">
                        <span className="text-gray-600">{"// "}{edu.duration} | {edu.location}</span>
                      </div>

                      <div><span className="text-gray-800">~</span></div>

                      <div>
                        <span className="text-green-400">~/{edu.dirName}</span>
                        <span className="text-green-400"> $ </span>
                        <span className="text-green-400 animate-blink">{"\u2588"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

EducationSection.displayName = "EducationSection"

export default EducationSection
