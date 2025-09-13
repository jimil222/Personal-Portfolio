import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const ProjectCard = ({
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className={`flex flex-col sm:flex-row ${direction === "left" ? "sm:flex-row-reverse" : ""
        } gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative`}
    >
      <div className="flex w-full relative justify-center">
        <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
          <img
            className="max-w-[400px] w-full relative z-10"
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

      {/* Content */}
      <div className="w-full text-center mt-6 sm:mt-0">
        <h3 className={`${titleColor} font-bold text-2xl sm:text-4xl mb-2`}>{title}</h3>
        <span className={`${titleColor} italic text-base md:text-lg`}>{subtitle}</span>
        <p className="text-justify text-sm sm:text-base mt-4 text-white leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-3 mt-6 justify-center">
          {techStack.map((tech, i) => (
            <li key={i} className="border rounded-full border-[#999] px-4 py-2 text-sm md:text-base text-white">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default ProjectCard
