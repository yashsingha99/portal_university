import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {recipient,
      subject,
      message,}
    try {
      await axios.post('http://localhost:1337/api/emails', {
        data
      });
      alert('Email sent successfully');
      // Clear form fields
      setRecipient('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
      setRecipient('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Recipient Email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;
