import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../assets/profile.png';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <img
          src={profileImg}
          alt="Profile"
          style={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: 12,
            boxShadow: '0 2px 12px rgba(30,41,59,0.10)'
          }}
        />
        <h1>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: 12, color: 'var(--color-primary)' }} />
          Boris Pavel
        </h1>
      </div>
      <p>Software Developer</p>
      <nav>
        <a href="#about">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: 6 }} />
          About
        </a>
        <a href="#projects">
          <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: 6 }} />
          Projects
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 6 }} />
          Contact
        </a>
      </nav>
      <button
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={() => setDarkMode((d) => !d)}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1.2rem',
          borderRadius: '8px',
          border: 'none',
          background: darkMode
            ? 'linear-gradient(90deg, #23272f 60%, #2d3748 100%)'
            : 'linear-gradient(90deg, #e0e7ef 60%, #f8fafc 100%)',
          color: darkMode ? '#f8fafc' : '#23272f',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: darkMode
            ? '0 2px 16px rgba(30,41,59,0.18)'
            : '0 2px 8px rgba(30,41,59,0.07)'
        }}
      >
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} style={{ marginRight: 8 }} />
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
