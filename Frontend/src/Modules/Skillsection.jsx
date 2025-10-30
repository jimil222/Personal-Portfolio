import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { LuDatabase } from "react-icons/lu";
import { VscTools, VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa"
import { FaCode } from "react-icons/fa6";
import { SiPostman, SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiFigma, SiMongoose, SiAndroidstudio, SiOpenai, SiGooglegemini } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import Canva from "../assets/canva.png"
import { FaJava } from "react-icons/fa";


export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const skills = [
    {
      name: "Programming Languages",
      icon: <FaCode className="w-6 h-6" />,
      technologies: [
        { name: "C", color: "bg-blue-600 text-white" },
        { name: "C++", color: "bg-blue-600 text-white" },
        { name: "Java", icon: <FaJava />, color: "bg-orange-500 text-white" },
        { name: "JavaScript", icon: <SiJavascript />, color: "bg-yellow-400 text-black" },
        { name: "Python", icon: <FaPython />, color: "bg-green-500 text-white" },
      ],
      color: "from-white/20 to-white/10"
    },
    {
      name: "Web Development",
      icon: <CiServer className="w-6 h-6" />,
      technologies: [
        { name: "HTML", icon: <FaHtml5 />, color: "bg-orange-600 text-white" },
        { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-600 text-white" },
        { name: "React.js", icon: <FaReact />, color: "bg-cyan-500 text-white" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-sky-400 text-white" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-purple-600 text-white" },
        { name: "NextJS", icon: <SiNextdotjs />, color: "bg-black text-white" },
        { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-600 text-white" },
        { name: "Express.js", icon: <SiExpress />, color: "bg-gray-800 text-white" },
      ],
      color: "from-green-400 to-cyan-500"
    },
    {
      name: "Database Management",
      icon: <LuDatabase className="w-6 h-6" />,
      technologies: [
        { name: "MySQL", icon: <SiMysql />, color: "bg-blue-500 text-white" },
        { name: "MongoDB", icon: <SiMongodb />, color: "bg-green-600 text-white" },
      ],
      color: "from-blue-400 to-teal-500"
    },
{
  name: "Other technologies",
  icon: <VscTools className="w-6 h-6" />,
  technologies: [
    { name: "Git", icon: <FaGitAlt />, color: "bg-orange-500 text-white" },
    { name: "GitHub", icon: <FaGithub />, color: "bg-gray-900 text-white" },
    { name: "Vs code", icon: <VscVscode />, color: "bg-blue-500 text-white" },
    { name: "Postman", icon: <SiPostman />, color: "bg-orange-400 text-white" },
    { name: "Canva", icon: <img src={Canva} alt="Canva" className="w-4 h-4" />, color: "bg-gray-800 text-white" },
    { name: "Figma", icon: <SiFigma />, color: "bg-pink-500 text-white" },
    { name: "Mongoose", icon: <SiMongoose />, color: "bg-[#660000] text-white" },
    { name: "Android Studio", icon: <SiAndroidstudio />, color: "bg-white text-black" },
    { name: "ChatGPT", icon: <SiOpenai />, color: "bg-black text-white" },
    { name: "Gemini", icon: <SiGooglegemini />, color: "bg-[#4285F4] text-white" },
  ],
  color: "from-purple-400 to-blue-500"
}

  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const iconVariants = {
    hover: {
      scale: [1, 1.1, 1],
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden relative min-h-screen"
    >
      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm cursor-pointer ${hoveredSkill === index
                  ? "shadow-2xl scale-102"
                  : "hover:shadow-xl hover:scale-101"
                }`}
              variants={itemVariants}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-20 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    className="mr-4 text-4xl bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/20"
                    variants={iconVariants}
                    animate={hoveredSkill === index ? "hover" : ""}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>

                <ul className="flex flex-wrap -mx-1 gap-y-[4.5px]">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.li
                      key={techIndex}
                      className="px-1 mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-md ${tech.color}`}
                      >
                        {tech.icon} {tech.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>

              </div>

              <AnimatePresence>
                {hoveredSkill === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 opacity-10 rounded-2xl z-0"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )

}
