import React, { useRef, memo } from "react"
import { motion, useInView } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"
import { ImFilesEmpty } from "react-icons/im"
import { VscRunCoverage, VscExtensions } from "react-icons/vsc"
import { GoRepoForked } from "react-icons/go"
import { IoSearch, IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import TeamverseLogo from "../assets/teamverse-logo.png"
import VirtunexaLogo from "../assets/virtunexa-logo.png"

const experiences = [
  {
    company: "Teamverse Software Services Pvt. Ltd.",
    position: "Fullstack Intern",
    duration: "Jan 2025 - Mar 2025",
    location: "Pune, Maharashtra",
    dirName: "teamverse",
    logo: TeamverseLogo,
    highlights: [
      "Integrated Gemini API into a full-stack Next.js web app to enable AI-powered content generation.",
      "Built 6+ frontend and backend modules with clean and maintainable code.",
      "Designed and integrated a credit-based system powered by Razorpay and Neon PostgreSQL.",
    ],
  },
  {
    company: "VirtuNexa",
    position: "Fullstack Intern",
    duration: "Oct 2024 - Nov 2024",
    location: "Pune, Maharashtra",
    dirName: "virtunexa",
    logo: VirtunexaLogo,
    highlights: [
      "Developed a responsive portfolio site using React.js and Tailwind CSS, showcasing 3+ projects and improving recruiter interaction via Web3Forms.",
      "Delivered pixel-perfect responsive UI across mobile, tablet, and desktop devices.",
    ],
  },
]

const ExperienceSection = memo(() => {
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
          className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaBriefcase className="text-4xl text-cyan-400" />
          Experience
        </motion.h2>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
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
                        ~/{exp.dirName}
                      </span>
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Terminal Panel Tabs */}
                <div className="flex items-center px-4 py-1.5 bg-gray-800 border-b border-gray-700 text-xs font-mono gap-4">
                  <span className="text-gray-500">PROBLEMS</span>
                  <span className="text-gray-500">OUTPUT</span>
                  <span className="text-white border-b-2 border-white pb-1">TERMINAL</span>
                  <span className="text-gray-500">DEBUG CONSOLE</span>
                </div>

                {/* Terminal Body - matches ProjectCard editor layout */}
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

                  {/* Terminal Content */}
                  <div className="flex-1 bg-gray-900 font-mono text-sm p-4 leading-6 overflow-y-auto text-gray-300">
                    {/* Command */}
                    <div>
                      <span className="text-green-400">~/{exp.dirName}</span>
                      <span className="text-green-400"> $ </span>
                      <span className="text-gray-300">cat experience.log</span>
                    </div>

                    <div className="mt-3"></div>

                    {/* Company Logo */}
                    <div className="flex items-center gap-4 mb-4 py-3">
                      <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center p-3 border-2 border-gray-300 flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold">{exp.company}</div>
                        <div className="text-yellow-300 text-sm">{exp.position}</div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div>
                      <span className="text-cyan-400 font-bold">Duration</span>
                      <span className="text-gray-500"> : </span>
                      <span className="text-purple-300">{exp.duration}</span>
                    </div>

                    {/* Location */}
                    <div>
                      <span className="text-cyan-400 font-bold">Location</span>
                      <span className="text-gray-500"> : </span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>

                    <div className="mt-3"></div>

                    {/* Highlights header */}
                    <div>
                      <span className="text-blue-300 font-bold">Highlights:</span>
                    </div>

                    {/* Highlights */}
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="ml-2 flex gap-1">
                        <span className="text-green-400 flex-shrink-0">{"\u25B8"} </span>
                        <span className="text-gray-300">{h}</span>
                      </div>
                    ))}

                    <div className="mt-3"></div>

                    {/* Prompt with cursor */}
                    <div>
                      <span className="text-green-400">~/{exp.dirName}</span>
                      <span className="text-green-400"> $ </span>
                      <span className="text-green-400 animate-blink">{"\u2588"}</span>
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

ExperienceSection.displayName = "ExperienceSection"

export default ExperienceSection
