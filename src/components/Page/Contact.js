import React from 'react';
import styles from '../../styles/PageStyles/Contact.module.css';

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                Get in touch with the Porsche team for inquiries, support, or to schedule a test drive. We're here to answer your questions and help you experience the thrill of Porsche firsthand.
            </p>

            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <i className="fas fa-phone-alt"></i> {/* Phone icon (replace with actual icon library) */}
                    <span>1-800-PORSCHE (1-800-767-7243)</span>
                </div>
                <div className={styles.contactItem}>
                    <i className="fas fa-envelope"></i> {/* Email icon (replace with actual icon library) */}
                    <a href="mailto:info@porsche.com" className={styles.emailLink}>info@porsche.com</a>
                </div>
                <div className={styles.contactItem}>
                    <i className="fas fa-map-marker-alt"></i> {/* Location icon (replace with actual icon library) */}
                    <p>Find a Porsche Dealer near you: <a href="https://www.porsche.com/usa/dealer-locator/" target="_blank" rel="noreferrer" className={styles.dealerLink}>Porsche Dealer Locator</a></p>
                </div>
            </div>

            <form className={styles.contactForm}>
                <h2>Schedule a Test Drive</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number (optional)" />
                <label htmlFor="model">Preferred Model:</label>
                <select id="model" name="model">
                    <option value="">Select a Model</option>
                    <option value="911">911</option>
                    <option value="Taycan">Taycan</option>
                    <option value="718">718</option>
                    {/* Add more model options as needed */}
                </select>
                <button type="submit">Schedule Test Drive</button>
            </form>
        </div>
    );
}

export default Contact;
