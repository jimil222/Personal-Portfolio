import React, { useRef, memo } from "react"
import { motion, useInView } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

const EducationSection = memo(() => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const education = [
    {
      institution: "Marathwada Mitra Mandal's College of Engineering",
      degree: "BE - Artificial Intelligence and Data Science Engineering",
      gpa: "CGPA - 9.57",
      duration: "2023 - 2026",
      location: "Pune, Maharashtra",
    },
    {
      institution: "All India Shri Shivaji Memorial Society's Polytechnic",
      degree: "Diploma - Information Technology",
      gpa: "Percentage - 87.36",
      duration: "2020 - 2023",
      location: "Pune, Maharashtra",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden relative min-h-screen"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaGraduationCap className="text-4xl" />
          Education
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/40 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white pr-4">
                    {edu.institution}
                  </h3>
                  <span className="text-sm sm:text-base font-semibold text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-gray-300 mb-2 font-medium">
                  {edu.degree}
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <p className="text-pink-300 font-semibold">
                    {edu.gpa}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {edu.location}
                  </p>
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
