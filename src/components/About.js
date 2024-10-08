// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                I am a passionate MERN Stack Developer with experience in building dynamic and responsive web applications.
                With a strong foundation in JavaScript and its frameworks, I enjoy creating user-friendly interfaces
                and developing robust backend solutions. I thrive in collaborative environments and am always eager to learn new technologies.
            </p>
            <h3>Skills</h3>
            <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>Git & GitHub</li>
                <li>Responsive Web Design</li>
                {/* Add more skills */}
            </ul>
            <h3>Experience</h3>
            <p>
                I have worked on various projects that required the integration of frontend and backend technologies.
                My recent projects include a personal portfolio website, an e-commerce application, and a task management tool,
                where I utilized the MERN stack to create seamless user experiences and handle complex data interactions.
            </p>
            <h3>Education</h3>
            <p>
                I hold a Bachelor's degree in Computer Science, where I developed a strong understanding of software development principles,
                data structures, and algorithms. I have completed various online courses and certifications in web development and
                JavaScript frameworks to further enhance my skills.
            </p>
        </section>
    );
};

export default About;
