import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);

    setFormState({ name: '', email: '', subject: '', message: '' });

    try {
      const response = await axios.post('http://localhost:3030/sendmail', formState);

      console.log('Response:', response.data);

      toast.success('Email sent successfully!', {
        autoClose: 2000,
        theme: "dark"
      });
    } catch (error) {
      console.error('Error sending email:', error.response ? error.response.data : error.message);
      toast.error('Error sending email. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    console.log("Form rendered");
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative h-full">
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
                    className="block w-full pl-10 pr-3 py-2 border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
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
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 duration-300 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
              <ToastContainer position="top-right" limit={1} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
