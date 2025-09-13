import ProjectCard from "../Components/ProjectCard.jsx"; 
import Project1 from "../assets/Project5.png"; 
import Project2 from "../assets/Project2.png"; 
import Project3 from "../assets/Project3.png"; 
import Project4 from "../assets/Project4.png"; 
import Project5 from "../assets/bg removal img.png";

const ProjectDisplay = () => {
  return (
    <section className="max-w-screen-2xl px-6 sm:px-24 mx-auto relative pb-8 sm:pb-16 bg-[#111827] overflow-x-hidden">
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-semibold px-4 py-2 w-max mx-auto text-center text-[#42c6a1] sm:border-b-2 border-[#42c6a1]">
        Latest Works
      </h2>

      <ProjectCard
        title="Ingreasy"
        subtitle="(AI recipe generator webapp)"
        description="Experience the power of a feature-rich Recipe generator webapp built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to upload labeled grocery items and generates three delicious recipes based on the extracted ingredients. It utilizes the OCR.space API for text extraction and the Gemini API for recipe generation."
        techStack={["#REACT JS", "#TAILWIND CSS", "#NODE JS", "#MONGODB"]}
        image={Project1}
        repoLink="https://github.com/jimil222/Ingreasy.git"
        liveLink="https://ingreasy-frontend.onrender.com"
        direction="right"
        titleColor="text-green-300"
        dropShadowColor="rgb(66,198,161)"
      />

      <ProjectCard
        title="AI Writer Studio"
        subtitle="(A Content Generator WebApp)"
        description="Generate high-quality content effortlessly with AI Writer Studio. Built with Next.js and Tailwind CSS, this platform offers AI-powered writing tools for blogs, SEO, and content creation. It integrates the Gemini API for text generation, utilizes Neon PostgreSQL for structured data management, and features a credit-based system for usage tracking and membership access."
        techStack={["#NextJS", "#TailwindCSS", "#NeonPostgreSQL", "#GeminiAPI"]}
        image={Project2}
        repoLink="https://github.com/jimil222/AI-Writer-Studio"
        direction="left"
        titleColor="text-[#50a4c2]"
        dropShadowColor="rgba(66,198,161)"
      />

      <ProjectCard
        title="Hotel Room Booking System"
        subtitle="(Hotel Room Booking Website)"
        description="Developed a responsive and user-friendly landing page to navigate a room booking list featuring multiple room options. Integrated a seamless room booking system where users can book rooms and receive confirmation emails using Nodemailer. Implemented robust admin functionalities for adding or removing rooms, marking payments as completed, and managing user checkouts."
        techStack={["#REACT JS", "#TAILWIND CSS", "#NODE JS", "#EXPRESS JS", "#MYSQL"]}
        image={Project3}
        repoLink="https://github.com/LH-10/Hotel_Room_Booking_System.git"
        direction="right"
        titleColor="text-[#e8a975]"
        dropShadowColor="rgb(66,198,161)"
      />

      <ProjectCard
        title="AI Trip Planner"
        subtitle="(Your Personalized Trip Planner)"
        description="Plan your perfect trip with ease using AI Trip Planner. Built with React.js and Tailwind CSS, this project helps users plan personalized trips by providing location suggestions, navigation links, and hotel recommendations. It reflects my ability to integrate APIs and create seamless, interactive web applications for an enhanced user experience."
        techStack={["#ReactJS", "#TailwindCSS", "#Firebase", "#GoogleAPIs", "#GeminiAPI"]}
        image={Project4}
        repoLink="https://github.com/jimil222/AI-trip-Planner"
        direction="left"
        titleColor="text-[#ffe578]"
        dropShadowColor="rgba(66,198,161)"
      />

      <ProjectCard
        title="Bg Removal"
        subtitle="(Advanced Background Removal Website)"
        description="Experience the power of a feature-rich Background Removal Website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project integrates advanced image processing capabilities through a securely implemented third-party API, ensuring precise background removal with optimal performance and data confidentiality."
        techStack={["#REACT JS", "#TAILWIND CSS", "#NODE JS", "#MONGODB"]}
        image={Project5}
        repoLink="https://github.com/jimil222/Bg-Removal-Site"
        direction="right"
        titleColor="text-[#db68d7]"
        dropShadowColor="rgb(66,198,161)"
      />
    </section>
  )
}

export default ProjectDisplay
