import React from 'react'

const LogoImage = () => {
  return (
    <svg
    viewBox="0 0 211 191"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-1/2 transform -translate-y-1/4 -translate-x-1/4 sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] max-w-full"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#42c6a1', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#175845', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M9 38L11.272 42.3778M11.272 42.3778L50 117L124 19L112 1L56 77L40 48L50 38L59 52L74 32L84 19H1L11.272 42.3778Z"
      stroke="url(#gradient)"
      strokeWidth="2" // Adjust strokeWidth as needed
    />
    <path
      d="M176.104 29H136.435L102.571 72.24L119.987 113.64L88.0584 156.88L78.3831 138.48L102.571 106.28L94.8312 89.72L60 132.04L88.0584 190L146.11 113.64L127.727 72.24L146.11 46.48H167.396L146.11 72.24L152.883 89.72L209 29H176.104Z"
      stroke="url(#gradient)"
      strokeWidth="2" // Adjust strokeWidth as needed
    />
  </svg>
  )
}

export default LogoImage
