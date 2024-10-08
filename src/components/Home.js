// src/components/Home.js
import React from 'react';

const Home = () => {
    return (
        <section id="home">
            <div className="hero">
                <img src="profile.jpg" alt="Arun Kumar" className="profile-image" />
                <h1>Arun Kumar</h1>
                <p>Full Stack Developer</p>
                <a href="#projects" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Home;
