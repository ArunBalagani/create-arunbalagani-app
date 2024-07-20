// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form action="submit-form.php" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit" className="btn">Send</button>
            </form>
            <div className="social-links">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:your.email@example.com">Email</a>
            </div>
        </section>
    );
};

export default Contact;
