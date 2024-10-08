// src/components/Resume.js
import React from 'react';
import './Resume.css'; // Ensure you have a CSS file for styling

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>My Resume</h2>
            <a href="resume.pdf" className="btn download-btn">Download Resume</a>

            <div className="resume-summary">
                <h3>Professional Summary</h3>
                <p>
                    A motivated full-stack developer with expertise in the MERN stack. 
                    Passionate about building efficient and scalable web applications 
                    that provide seamless user experiences. Eager to contribute to 
                    innovative projects and collaborate with dynamic teams.
                </p>
            </div>

            <div className="resume-section-content">
                <div className="resume-section-item">
                    <h3>Key Skills</h3>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React.js & Redux</li>
                        <li>Node.js & Express.js</li>
                        <li>MongoDB & Mongoose</li>
                        <li>HTML5 & CSS3</li>
                        <li>Responsive Web Design</li>
                        <li>Git & GitHub</li>
                        <li>RESTful APIs</li>
                        <li>GraphQL</li>
                        <li>Jest & Testing Library</li>
                        <li>WebSocket for real-time communication</li>
                    </ul>
                </div>

                <div className="resume-section-item">
                    <h3>Experience</h3>
                    <div className="experience-item">
                        <h4>Full-Stack Developer</h4>
                        <p className="experience-details">Company Name, Location</p>
                        <p className="experience-date">Month Year - Present</p>
                        <ul>
                            <li>Developed and maintained web applications using the MERN stack.</li>
                            <li>Designed and implemented RESTful APIs for seamless integration with frontend applications.</li>
                            <li>Collaborated with designers and product managers to deliver high-quality products.</li>
                            <li>Implemented responsive design to enhance user experience across devices.</li>
                            <li>Optimized application performance through code reviews and best practices.</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h4>Frontend Developer Intern</h4>
                        <p className="experience-details">Company Name, Location</p>
                        <p className="experience-date">Month Year - Month Year</p>
                        <ul>
                            <li>Assisted in the development of client-side applications using React.js.</li>
                            <li>Participated in code reviews and contributed to improving code quality.</li>
                            <li>Worked with team members to troubleshoot and optimize web applications.</li>
                        </ul>
                    </div>
                </div>

                <div className="resume-section-item">
                    <h3>Projects</h3>
                    <div className="project-item">
                        <h4>Project Name</h4>
                        <p className="project-details">Description: Developed a full-stack web application for managing tasks.</p>
                        <p>Technologies: React, Node.js, Express, MongoDB</p>
                    </div>
                    <div className="project-item">
                        <h4>Project Name</h4>
                        <p className="project-details">Description: Built a real-time chat application using WebSocket.</p>
                        <p>Technologies: React, Node.js, Express, Socket.IO</p>
                    </div>
                </div>

                <div className="resume-section-item">
                    <h3>Education</h3>
                    <div className="education-item">
                        <h4>Degree Title</h4>
                        <p className="education-details">University Name, Location</p>
                        <p className="education-date">Month Year - Month Year</p>
                    </div>
                </div>

                <div className="resume-section-item">
                    <h3>Certifications</h3>
                    <ul>
                        <li>Full Stack Web Development Certification - [Institution Name]</li>
                        <li>JavaScript Algorithms and Data Structures - [Institution Name]</li>
                        <li>React.js Certification - [Institution Name]</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;
