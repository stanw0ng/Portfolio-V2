import React, { useEffect, useRef } from 'react';
import '../styles/navigation.scss';

function Navigation({ scrollToSection, activeSection }) {
  
  return (
    <nav  data-scroll="1" data-scroll-sticky="1" data-scroll-target="#sticky" >
      <h2
        className={`nav-link ${activeSection === 'info-section' ? 'active' : ''}`}
        onClick={() => scrollToSection('info-section')}
      >
        Info
      </h2>
      <h2
        className={`nav-link ${activeSection === 'projects-section' ? 'active' : ''}`}
        onClick={() => scrollToSection('projects-section')}
      >
        Work
      </h2>
      <h2
        className={`nav-link ${activeSection === 'contact-section' ? 'active' : ''}`}
        onClick={() => scrollToSection('contact-section')}
      >
        Contact
      </h2>
    </nav>
  );
}

export default Navigation;
