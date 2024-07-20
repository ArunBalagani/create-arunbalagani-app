// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>Brief bio about yourself...</p>
            <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                {/* Add more skills */}
            </ul>
            <h3>Experience</h3>
            <p>Summary of your professional experience...</p>
            <h3>Education</h3>
            <p>Details of your educational background...</p>
        </section>
    );
};

export default About;
