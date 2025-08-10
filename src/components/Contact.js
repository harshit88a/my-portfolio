import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <p style={{ maxWidth: 640, margin: '0 auto 16px', color: '#d1d5db' }}>
        Have a question, idea, or opportunity? Send a message and I’ll get back to you.
      </p>
      <ContactForm />
      <p style={{ marginTop: 16 }}>
        Or reach me on LinkedIn: {' '}
        <a href="https://www.linkedin.com/in/harshitnitpy/" target="_blank" rel="noopener noreferrer">linkedin.com/in/harshitnitpy</a>
      </p>
    </div>
  );
}

export default Contact;