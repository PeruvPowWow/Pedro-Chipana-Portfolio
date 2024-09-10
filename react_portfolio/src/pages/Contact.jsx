import { useState } from "react";
import './contact.css';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const validateEmail = (email) => {
        const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regEx.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.'); 
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Form submitted:', formState);
            // Add any further submission logic here (e.g., sending the form data to an email API)
        } else {
            console.log('Form contains errors:', errorMessage);
        }
    };

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        onBlur={handleChange}
                        onChange={handleChange} // Ensures form state updates
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={email}
                        onBlur={handleChange}
                        onChange={handleChange} // Ensures form state updates
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        defaultValue={message}
                        onBlur={handleChange}
                        onChange={handleChange} // Ensures form state updates
                    />
                </div>
                {errorMessage && (
                    <div className="error-message">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
