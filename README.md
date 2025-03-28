# Personal Portfolio Website

This is a personal portfolio website showcasing my skills, projects, and contact information. Built with modern web development technologies to create a responsive and visually appealing interface.  

The Portfolio is live here: [https://jimil-soni-portfolio.netlify.app/](https://jimil-soni-portfolio.netlify.app/)

## Features

- Interactive and responsive UI
- Showcases skills and latest projects
- Contact form integrated with Nodemailer for email functionality
- Social media links for easy connection

## Tech Stack

- **Frontend**: ![ReactJS](https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
- **Backend**: ![Nodemailer](https://img.shields.io/badge/Nodemailer-439C56?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Personal-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Personal-Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

## Backend Setup

To enable the contact form functionality with Nodemailer, follow these steps:

1. **Install Backend Dependencies:**
   Navigate to the `Backend` folder (or create one) and run:
   ```bash
   npm install express dotenv nodemailer cors
   ```

2. **Environment Variables:**
   Create a `.env` file in the `Backend` directory and add the following:
   ```plaintext
   MY_EMAIL=your-email@gmail.com
   MY_PASSWORD=your-email-password
   ```

3. **Run the Backend Server:**
   Start the backend server with:
   ```bash
   nodemon MainServer.js
   ```

## Acknowledgments

- **React.js** for the frontend framework.
- **Vite** for fast and optimized development.
- **Tailwind CSS** for styling the UI.
- **Nodemailer** for handling email functionality.
- **Express.js** for backend routing and API handling.


