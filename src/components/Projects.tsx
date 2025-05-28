import React from 'react';
import quiteGeneratorImg from '../assets/quite-generator.png';
import crownFiestaDemo from '../assets/Crown Fiesta Demo.mp4';

const Projects: React.FC = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-card">
        <h3>Quote Generator</h3>
        <a href="https://boris-pavel.github.io/quote-generator/" target="_blank" rel="noopener noreferrer">
          <img src={quiteGeneratorImg} alt="Quote Generator screenshot" style={{ width: '100%', maxWidth: 320, borderRadius: 10, marginBottom: 12, boxShadow: '0 2px 8px rgba(30,41,59,0.10)' }} />
        </a>
        <p>
          A modern web app that displays random inspirational quotes. Features a clean UI, copy-to-clipboard, and Twitter/X sharing. Built with Javascript.
        </p>
        <a href="https://boris-pavel.github.io/quote-generator/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project-card">
        <h3>Crown Fiesta</h3>
        <video src={crownFiestaDemo} controls style={{ width: '100%', maxWidth: 320, borderRadius: 10, marginBottom: 12, boxShadow: '0 2px 8px rgba(30,41,59,0.10)' }} />
        <p>
          Crown Fiesta is a fun, interactive web game inspired by Shining Crown. Built with Bootstrap and Flask, featuring custom game logic, animations, and responsive design.
        </p>
        <a href="https://github.com/boris-pavel/crown-fiesta" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      {/* Add more projects as needed */}
    </div>
  </section>
);

export default Projects;
