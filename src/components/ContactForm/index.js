import React from "react";
import './ContactForm.css';

const ContactForm = () => {

    return (
        <div>
            <p>If you have any questions please send us a message</p>
            <div className="form">
                <input type="text" placeholder="Name and Surname" className="data"/>
                <input type="text" placeholder="E-mail" className="data"/>
                <input type="text" placeholder="Phone number" className="data"/>
                <textarea placeholder="Describe your message..." className="message"></textarea>
            </div>
            <div className="submit-button">
                <p><a href="#" className="submit-button-link">SEND MESSAGE</a></p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    );
};

export default ContactForm;
