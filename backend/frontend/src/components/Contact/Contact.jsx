import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', { name, email, message });
            alert(response.data.message);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="heading">
                <h2>Contact</h2>
                <span>Connect With Us</span>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea cols="20" rows="8" placeholder="Write Message Here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <input type="submit" value="Send" className="contact-button" />
                </form>
            </div>
        </section>
    );
}

export default Contact;
