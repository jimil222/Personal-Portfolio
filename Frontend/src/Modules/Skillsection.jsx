'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { LuDatabase } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Ref to track when the section is in view
  const sectionRef = useRef(null)

  // Use the useInView hook to detect when the section enters the viewport
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const skills = [
    { 
      name: "Front-end Development", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      technologies: ["HTML", "CSS", "JavaScript", "React"], 
      color: "from-pink-500 to-purple-500" 
    },
    { 
      name: "Back-end Development", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      technologies: ["Python", "Node.js", "Express"], 
      color: "from-green-400 to-cyan-500" 
    },
    { 
      name: "Database Management", 
      icon: (
        <LuDatabase />
      ),
      technologies: ["MySQL", "MongoDB"], 
      color: "from-blue-400 to-teal-500" 
    },
    {
        name: "Git & GitHub",
        icon: (
            <FaGithub />

        ),
        technologies: ["Git", "GitHub"],
        color: "from-purple-400 to-blue-500"
      }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const iconVariants = {
    hover: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden relative h-screen">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-6 sm:gap-8 relative z-10 cu"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
{skills.map((skill, index) => (
  <motion.div 
    key={index} 
    className={`relative bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm cursor-pointer ${hoveredSkill === index ? 'shadow-2xl scale-102' : 'hover:shadow-xl hover:scale-101'}`} // Added cursor-pointer here
    variants={itemVariants}
    onHoverStart={() => setHoveredSkill(index)}
    onHoverEnd={() => setHoveredSkill(null)}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 rounded-lg`} />
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <motion.div 
          className={`mr-4 text-4xl bg-gradient-to-br ${skill.color} p-2 rounded-lg`}
          variants={iconVariants}
          animate={hoveredSkill === index ? "hover" : ""}
        >
          {skill.icon}
        </motion.div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white">{skill.name}</h3>
      </div>
      <ul className="flex flex-wrap -mx-1">
        {skill.technologies.map((tech, techIndex) => (
          <motion.li 
            key={techIndex} 
            className="px-1 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: techIndex * 0.1 }}
          >
            <span className={`inline-block bg-gradient-to-r ${skill.color} px-3 py-1 rounded-full text-sm font-medium text-white shadow-md`}>
              {tech}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
    <AnimatePresence>
      {hoveredSkill === index && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-lg z-0"
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
