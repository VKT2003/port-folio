import React, { useState } from 'react';
import styles from './Contact.module.css';
import location from '../../../Assets/location.png';
import mobile from '../../../Assets/Mobile.png';
import mail from '../../../Assets/mail.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        text: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form data
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.text) newErrors.text = 'Message is required';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Save data to db.json (Mocked for demo purposes)
        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ contacts: formData }),
        })
            .then(response => response.json())
            .then(() => {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    text: '',
                });
            })
            .catch(error => console.error('Error saving contact data:', error));
    };

    return (
        <div className={`${styles.contact}`} id='contact'>
            <div className={`${styles.left}`}>
                <h3 className='text-left mb-3'>Leave ME your info</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Full Name (Required)</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}

                    <label htmlFor="email">Your Email (Required)</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}

                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name='subject'
                        id='subject'
                        value={formData.subject}
                        onChange={handleChange}
                    />

                    <label htmlFor="text">Your Message</label>
                    <textarea
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                        value={formData.text}
                        onChange={handleChange}
                    ></textarea>
                    {errors.text && <p className={styles.error}>{errors.text}</p>}

                    <button type="submit">Send Message</button>
                    {submitted && <p className={styles.success}>Message sent successfully!</p>}
                </form>
            </div>
            <div className={`${styles.right}`}>
                <h3 className='text-left mb-3'>Contact Information</h3>
                <div>
                    <div className={`${styles.card}`}>
                        <img src={location} alt="location" />
                        <ul>
                            <li>
                                <p>Country:</p>
                                <p>India</p>
                            </li>
                            <li>
                                <p>State:</p>
                                <p>Uttar Pradesh</p>
                            </li>
                            <li>
                                <p>City:</p>
                                <p>Ghaziabad</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.card}`}>
                        <img src={mail} alt="mail" />
                        <ul>
                            <li>
                                <p>Email:</p>
                                <p>vishaltiwari.up2019@gmail.com</p>
                            </li>
                            <li>
                                <p>Support:</p>
                                <p>support@gmail.com</p>
                            </li>
                            <li>
                                <p>Inquiries:</p>
                                <p>info@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.card}`}>
                        <img src={mobile} alt="mobile" />
                        <ul>
                            <li>
                                <p>Phone:</p>
                                <p>+91 936 935 8493</p>
                            </li>
                            <li>
                                <p>Fax:</p>
                                <p>+91 123 456 7891</p>
                            </li>
                            <li>
                                <p>Support:</p>
                                <p>+91 123 456 7892</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
