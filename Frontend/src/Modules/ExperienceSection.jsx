import React, { useRef, memo } from "react"
import { motion, useInView } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const ExperienceSection = memo(() => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "Teamverse Software Services Pvt. Ltd.",
      position: "Fullstack Intern",
      duration: "Jan 2025 - Mar 2025",
      location: "Pune, Maharashtra",
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
      highlights: [
        "Developed a responsive portfolio site using React.js and Tailwind CSS, showcasing 3+ projects and improving recruiter interaction via Web3Forms.",
        "Delivered pixel-perfect responsive UI across mobile, tablet, and desktop devices.",
      ],
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
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden relative min-h-screen"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FaBriefcase className="text-4xl text-cyan-400" />
          Experience
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/40 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-300 font-semibold">
                      {exp.position}
                    </p>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {exp.location}
                </p>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex gap-3">
                      <span className="text-cyan-400 font-bold text-lg mt-0.5 flex-shrink-0">
                        •
                      </span>
                      <span className="text-gray-300 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
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
