// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Ensure you have a CSS file for styling
import portfolioImage from '../images/portfolio-image.jpg'; // Ensure the path is correct


const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Top 5 MERN Stack Projects</h2>
            <div className="projects-grid"> {/* Grid wrapper */}
                {/* Project Card 1 */}
                <div className="project-card">
                    <h3>Personal Portfolio</h3>
                    <p>A responsive portfolio website to showcase my projects and skills. It features a modern design, smooth animations, and a user-friendly interface.</p>
                    <p>Technologies used: HTML, CSS, JavaScript, React.js</p>
                    <img src={portfolioImage} alt="Personal Portfolio Screenshot" />

                    <div className="project-links">
                        <a href="https://your-portfolio-live-demo.com" className="btn">Live Demo</a>
                        <a href="https://github.com/your-username/portfolio" className="btn">Source Code</a>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="project-card">
                    <h3>MERN E-Commerce Application</h3>
                    <p>An online shopping platform built with the MERN stack that allows users to browse and purchase products. It includes user authentication, product management, and payment integration.</p>
                    <p>Technologies used: MongoDB, Express.js, React.js, Node.js</p>
                    <img src={portfolioImage} alt="Personal Portfolio Screenshot" />

                    <div className="project-links">
                        <a href="https://your-ecommerce-live-demo.com" className="btn">Live Demo</a>
                        <a href="https://github.com/your-username/ecommerce" className="btn">Source Code</a>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="project-card">
                    <h3>Task Management Tool</h3>
                    <p>A full-stack application for managing tasks and projects with real-time updates. Users can create, update, and delete tasks, as well as collaborate with others.</p>
                    <p>Technologies used: MongoDB, Express.js, React.js, Node.js, Socket.IO</p>
                    <img src={portfolioImage} alt="Personal Portfolio Screenshot" />

                    <div className="project-links">
                        <a href="https://your-task-manager-live-demo.com" className="btn">Live Demo</a>
                        <a href="https://github.com/your-username/task-manager" className="btn">Source Code</a>
                    </div>
                </div>

                {/* Project Card 4 */}
                <div className="project-card">
                    <h3>Blog Platform</h3>
                    <p>A blogging platform allowing users to create, read, update, and delete posts. Features include user authentication, commenting, and categories.</p>
                    <p>Technologies used: MongoDB, Express.js, React.js, Node.js</p>
                    <img src={portfolioImage} alt="Personal Portfolio Screenshot" />

                    <div className="project-links">
                        <a href="https://your-blog-platform-live-demo.com" className="btn">Live Demo</a>
                        <a href="https://github.com/your-username/blog-platform" className="btn">Source Code</a>
                    </div>
                </div>

                {/* Project Card 5 */}
                <div className="project-card">
                    <h3>Social Media App</h3>
                    <p>A social media application where users can create profiles, connect with others, and share content. Includes features like likes, comments, and real-time notifications.</p>
                    <p>Technologies used: MongoDB, Express.js, React.js, Node.js, Socket.IO</p>
                    <img src={portfolioImage} alt="Personal Portfolio Screenshot" />

                    <div className="project-links">
                        <a href="https://your-social-media-live-demo.com" className="btn">Live Demo</a>
                        <a href="https://github.com/your-username/social-media-app" className="btn">Source Code</a>
                    </div>
                </div>

             {/* Project Card 6 - New Chat Application */}
             <div className="project-card">
                    <h3>Chat Application</h3>
                    <p>A real-time chat application that allows users to send messages, create chat rooms, and share files. Built with user authentication and Socket.IO for real-time communication.</p>
                    <p>Technologies used: MongoDB, Express.js, React.js, Node.js, Socket.IO</p>
                    <img src={portfolioImage} alt="Personal Portfolio Screenshot" />

                    <div className="project-links">
                        <a href="https://your-chat-app-live-demo.com" className="btn">Live Demo</a>
                        <a href="https://github.com/your-username/chat-app" className="btn">Source Code</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
