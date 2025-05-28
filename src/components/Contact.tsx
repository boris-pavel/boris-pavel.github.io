import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>
      <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8 }} />
      Email: <a href="mailto:borisandreipavel@gmail.com">borisandreipavel@gmail.com</a>
    </p>
    <p>
      <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: 8, color: '#0e76a8' }} />
      LinkedIn: <a href="https://www.linkedin.com/in/boris-pavel/" target="_blank" rel="noopener noreferrer">boris-pavel</a>
    </p>
  </section>
);

export default Contact;
