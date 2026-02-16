import React, { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { ImFilesEmpty } from "react-icons/im"
import { VscRunCoverage, VscExtensions } from "react-icons/vsc"
import { GoRepoForked } from "react-icons/go"
import { IoSearch, IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"

// Pre-generate line numbers once
const lineNumbers = Array.from({ length: 15 }, (_, i) => i + 1)

const ProjectCardWithVSCode = memo(({
  title,
  subtitle,
  description,
  techStack,
  image,
  repoLink,
  liveLink,
  direction = "right",
  dropShadowColor = "rgb(66,198,161)",
}) => {

  // Smooth spring animation tuned for performance
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? 80 : -80,
    },
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
  }

  const cleanTechStack = useMemo(
    () => techStack.map((tech) => tech.replace("#", "")),
    [techStack]
  )

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
      className={`flex flex-col lg:flex-row ${
        direction === "left" ? "lg:flex-row-reverse" : ""
      } gap-8 mt-12 lg:gap-16 items-center lg:mt-20 relative`}
    >
      {/* Project Image */}
      <div className="flex w-full lg:w-1/2 relative justify-center">
        <div className="relative group transform-gpu transition-transform duration-200 hover:scale-105 will-change-transform">
          
          <img
            loading="lazy"
            decoding="async"
            className="max-w-[400px] w-full relative z-10 rounded-lg cursor-pointer"
            style={{
              filter: `drop-shadow(0 0 60px ${dropShadowColor})`,
            }}
            src={image || "/placeholder.svg"}
            alt={title}
          />

          {/* Tooltip */}
          <div className="absolute top-[-60px] sm:top-[-70px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-lg shadow-lg transition-opacity duration-200 flex items-center gap-3 z-20">
            
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-bold text-gray-800"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
            )}

            {repoLink && liveLink && <span className="font-bold">|</span>}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-bold text-blue-600"
              >
                <FiExternalLink className="text-lg" /> Live
              </a>
            )}

            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div>
      </div>

      {/* VS Code Window */}
      <div className="w-full lg:w-1/2">
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">

          {/* Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="bg-gray-700 px-3 py-1 rounded-t-lg border-t-2 border-blue-400">
                <span className="text-white text-sm font-mono">
                  {title.toLowerCase().replace(/\s+/g, "-")}.js
                </span>
              </div>
            </div>

            <div className="w-16"></div>
          </div>

          {/* Editor */}
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
                  <div key={num} className="leading-6">
                    {num}
                  </div>
                ))}
              </div>

              <div className="flex-1 p-4 text-gray-300 leading-6 overflow-y-auto">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">projectInfo</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </div>

                <div className="ml-4">
                  <span className="text-green-300">title</span>:{" "}
                  <span className="text-orange-300">"{title}"</span>,
                </div>

                <div className="ml-4">
                  <span className="text-green-300">subtitle</span>:{" "}
                  <span className="text-orange-300">"{subtitle}"</span>,
                </div>

                {description && (
                  <div className="ml-4">
                    <span className="text-green-300">description</span>:{" "}
                    <span className="text-orange-300">"{description}"</span>,
                  </div>
                )}

                <div className="ml-4">
                  <span className="text-green-300">technologies</span>: [
                </div>

                {cleanTechStack.map((tech, index) => (
                  <div key={index} className="ml-8">
                    <span className="text-orange-300">"{tech}"</span>
                    {index < cleanTechStack.length - 1 && ","}
                  </div>
                ))}

                <div className="ml-4">]</div>

                <div>{"};"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

export default ProjectCardWithVSCode
