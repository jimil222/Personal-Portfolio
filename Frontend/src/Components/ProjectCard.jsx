import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { ImFilesEmpty } from "react-icons/im";
import { VscRunCoverage } from "react-icons/vsc";
import { GoRepoForked } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { VscExtensions } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const ProjectCardWithVSCode = ({
  title,
  subtitle,
  description,
  techStack,
  image,
  repoLink,
  liveLink,
  direction = "right",
  titleColor = "text-white",
  dropShadowColor = "rgb(66,198,161)",
}) => {
  const variants =
    direction === "right"
      ? { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }
      : { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }

  const cleanTechStack = techStack.map((tech) => tech.replace("#", ""))

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row ${
        direction === "left" ? "lg:flex-row-reverse" : ""
      } gap-8 mt-12 lg:gap-16 items-center lg:mt-20 relative`}
    >
      {/* Project Image */}
      <div className="flex w-full lg:w-1/2 relative justify-center">
        <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out duration-200">
          <img
            className="max-w-[400px] w-full relative z-10 rounded-lg"
            style={{ filter: `drop-shadow(0 0 60px ${dropShadowColor})` }}
            src={image || "/placeholder.svg"}
            alt={title}
          />

          {/* Tooltip with GitHub | Live links */}
          <div className="absolute top-[-60px] sm:top-[-70px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-lg shadow-lg transition-opacity duration-200 flex items-center gap-3 z-20">
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
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div>
      </div>

      {/* VS Code Window */}
      <div className="w-full lg:w-1/2">
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          {/* Window header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              {/* Traffic lights */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* File tab */}
            <div className="flex-1 flex justify-center">
              <div className="bg-gray-700 px-3 py-1 rounded-t-lg border-t-2 border-blue-400">
                <span className="text-white text-sm font-mono">{title.toLowerCase().replace(/\s+/g, "-")}.js</span>
              </div>
            </div>

            <div className="w-16"></div>
          </div>

          {/* Editor area */}
          <div className="flex h-96">
            <div className="bg-gray-800 w-12 flex flex-col items-center py-3 border-r border-gray-700">
              {/* File Explorer - active */}
              <div className="w-6 h-6 flex items-center justify-center text-white mb-3">
                <ImFilesEmpty />
              </div>

              {/* Search */}
              <div className="w-6 h-6 flex items-center justify-center text-white mb-3">
                <IoSearch/>
              </div>

              {/* Source Control */}
              <div className="w-6 h-6 flex items-center justify-center text-white mb-3">
                <VscRunCoverage/>
              </div>

              {/* Debug with notification badge */}
              <div className="w-6 h-6 flex items-center justify-center text-white mb-3 relative">
                <GoRepoForked/>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  7
                </div>
              </div>

              {/* Extensions */}
              <div className="w-6 h-6 flex items-center justify-center text-white mb-6">
                <VscExtensions/>
              </div>

              <div className="flex-1"></div>

              {/* Account */}
              <div className="w-6 h-6 flex items-center justify-center text-gray-400 mb-3">
                <CgProfile/>
              </div>

              {/* Settings with VS label */}
              <div className="w-6 h-6 flex items-center justify-center text-gray-400 relative">
                <IoSettingsOutline />
              </div>
            </div>

            <div className="flex-1 bg-gray-900 font-mono text-sm">
              {/* Line numbers */}
              <div className="flex h-full">
                <div className="bg-gray-800 px-3 py-4 text-gray-500 text-right select-none border-r border-gray-700">
                  {Array.from({ length: 15 }, (_, i) => (
                    <div key={i} className="leading-6">
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code content */}
                <div className="flex-1 p-4 text-gray-300 leading-6 overflow-y-auto">
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-300">projectInfo</span>{" "}
                      <span className="text-white">=</span> <span className="text-yellow-300">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-green-300">title</span>
                      <span className="text-white">:</span> <span className="text-orange-300">"{title}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-green-300">subtitle</span>
                      <span className="text-white">:</span> <span className="text-orange-300">"{subtitle}"</span>
                      <span className="text-white">,</span>
                    </div>
                    {description && (
                      <div className="ml-4">
                        <span className="text-green-300">description</span>
                        <span className="text-white">:</span> <span className="text-orange-300">"{description}"</span>
                        <span className="text-white">,</span>
                      </div>
                    )}
                    <div className="ml-4">
                      <span className="text-green-300">technologies</span>
                      <span className="text-white">:</span> <span className="text-yellow-300">[</span>
                    </div>
                    {cleanTechStack.map((tech, index) => (
                      <div key={index} className="ml-8">
                        <span className="text-orange-300">"{tech}"</span>
                        {index < cleanTechStack.length - 1 && <span className="text-white">,</span>}
                      </div>
                    ))}
                    <div className="ml-4">
                      <span className="text-yellow-300">]</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-300">{"}"}</span>
                      <span className="text-white">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCardWithVSCode
