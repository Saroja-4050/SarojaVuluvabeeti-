import React, { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ from_name: '', reply_to: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-header">Get In Touch</h1>
      <p className="contact-subheader">
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </p>

      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input 
              type="text" 
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={(e) => setFormData({...formData, from_name: e.target.value})}
              placeholder="Your name" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="reply_to">Email</label>
            <input 
              type="email" 
              id="reply_to"
              name="reply_to"
              value={formData.reply_to}
              onChange={(e) => setFormData({...formData, reply_to: e.target.value})}
              placeholder="Your email" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Your message" 
              rows={6}
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="send-button"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="form-status success">
              Message sent successfully!
            </div>
          )}
          
          {status === 'error' && (
            <div className="form-status error">
              Failed to send message. Please try again.
            </div>
          )}
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-items">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div className="info-content">
                <span className="info-label">Email</span>
                <span className="info-value">sarojavuluvabeeti@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value">Buffalo, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Saroja Vuluvabeeti. All rights reserved.
      </div>
    </section>
  );
}