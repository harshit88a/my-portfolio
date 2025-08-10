import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending…' });

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not set');
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
      formRef.current.reset();
    } catch (err) {
      setStatus({ state: 'error', message: 'Sorry, something went wrong. Please try again later.' });
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="contact-form">
      <div className="grid">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="from_name" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="reply_to" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="How can I help?" required />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message…" required />
      </div>
      <button type="submit" className="resume-btn" disabled={status.state === 'loading'}>
        <span className="resume-btn-inner">{status.state === 'loading' ? 'Sending…' : 'Send Message'}</span>
      </button>
      {status.state !== 'idle' && (
        <p
          role="status"
          style={{
            marginTop: 12,
            color: status.state === 'success' ? '#10b981' : status.state === 'error' ? '#ef4444' : '#9ca3af',
          }}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;


