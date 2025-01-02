import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative w-screen">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Section: Your Name */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Jimil Soni</h2>
            <p className="mb-4">Full-stack developer passionate about creating innovative web solutions.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jimil222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jimil-v-soni-3382b42b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/Jimil_14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter className='h-6 w-6' />
              </a>
            </div>
          </div>

          {/* Empty Column for Extra Space */}
          <div className="hidden md:block"></div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Contact</h3>
            <p className="mb-2">Email: jimilsoni926@gmail.com</p>
            <p>Location: Pune, India</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} Jimil Soni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
