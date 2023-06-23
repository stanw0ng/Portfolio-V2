import React from 'react';
import '../styles/navigation.scss';

function Navigation({ scrollToSection }) {
  return (
    <nav>
      <h2 className="nav-link" onClick={() => scrollToSection('info-section')}>
        Info
      </h2>
      <h2 className="nav-link" onClick={() => scrollToSection('projects-section')}>
        Work
      </h2>
      <h2 className="nav-link" onClick={() => scrollToSection('contact-section')}>
        Contact
      </h2>
    </nav>
  );
}

export default Navigation;
