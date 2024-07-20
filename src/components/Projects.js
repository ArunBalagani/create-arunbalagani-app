// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-card">
                <h3>Project Title</h3>
                <p>Description of the project...</p>
                <p>Technologies used: HTML, CSS, JavaScript</p>
                <img src="project-image.jpg" alt="Project Screenshot" />
                <a href="https://live-demo.com" className="btn">Live Demo</a>
                <a href="https://github.com/project-repo" className="btn">Source Code</a>
            </div>
            {/* Add more project cards */}
        </section>
    );
};

export default Projects;
