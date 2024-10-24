// src/components/Home.js
import React from 'react';
import heroImage from '../images/pic-1.jpg';

const Home = () => {
    return (
        <section id="home">
            <div className="hero">
                <img src={heroImage} alt="Arun Kumar" className="profile-image" width="300" height="200" />
                <h1>Arun Kumar</h1>
                <p>Full Stack Developer</p>
                <a href="#projects" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Home;
