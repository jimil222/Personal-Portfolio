import React, { useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { RiLoader4Fill } from "react-icons/ri";
import 'react-toastify/dist/ReactToastify.css';
export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState("idle");
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus("success");
        toast.success("Form submitted successfully!");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      setFormStatus("error");
      toast.error("Error sending email. Please try again.");
      console.error("Web3Forms Error:", error);
    }
  };





  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={divRef}
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 mt-6 sm:mt-12 text-emerald-400">
          Contact Me
        </h2>
        <div className="bg-gray-600 border-none rounded-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-3xl font-semibold text-emerald-400 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <div className="relative">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 "
                    required
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 duration-300 focus:ring-offset-2 focus:ring-emerald-500"
              >
                {formStatus === "loading" ? (
                  <>
                    Sending <RiLoader4Fill className="animate-spin" />
                  </>
                ) : (
                  "Send Message"
                )}
              </button>


              <ToastContainer position="top-right" limit={1} theme='dark' />
            </form>
          </div>
        </div>
      </div>
    </motion.div>

  );
}
