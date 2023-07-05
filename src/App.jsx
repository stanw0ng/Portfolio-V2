import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import ShaderCanvas from './components/ShaderCanvas';
import Navigation from './components/Navigation';
import Info from './components/Info';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import 'locomotive-scroll/src/locomotive-scroll.scss';

function App() {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const scrollInstanceRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const [activeSection, setActiveSection] = useState('info-section');

  useEffect(() => {
    scrollInstanceRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Updates current section and reflects this with the underlined h2 in the Navigation component
    scrollInstanceRef.current.on('scroll', (instance) => {
      const scrollY = instance.scroll.y;
      const sections = contentRef.current.querySelectorAll('[data-scroll-section]');
      const windowHeight = window.innerHeight;

      let activeSectionId = null; // Track the active section ID
      let minDistance = windowHeight * 0.6; // Set a threshold distance for the active section

      sections.forEach((section) => {
        const sectionId = section.getAttribute('data-scroll-target');
        const sectionTop = section.getBoundingClientRect().top + scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop - windowHeight * 0.4 && scrollY < sectionBottom - windowHeight * 0.4) {
          activeSectionId = sectionId;
        } else if (sectionTop > scrollY && sectionTop - scrollY < minDistance) {
          minDistance = sectionTop - scrollY;
          activeSectionId = sectionId;
        }
      });

      setActiveSection(activeSectionId); // Update the active section
    });

    // Create a ResizeObserver to update the scrollbar when accordion content changes
    resizeObserverRef.current = new ResizeObserver(() => {
      scrollInstanceRef.current.update();
    });

    // Observe the content element
    resizeObserverRef.current.observe(contentRef.current);

    // Cleanup
    return () => {
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const target = contentRef.current.querySelector(`[data-scroll-target="${sectionId}"]`);
    if (target) {
      if (sectionId === 'info-section') {
        // Scroll to the top without applying the offset
        scrollInstanceRef.current.scrollTo(0, {
          duration: 800,
        });
      } else {
        // Scroll to the section with the offset
        scrollInstanceRef.current.scrollTo(target, {
          offset: -80,
          duration: 800,
        });
      }

      setActiveSection(sectionId);
      scrollInstanceRef.current.update();
    }
  };

  return (
    <div ref={scrollRef}>
      <ShaderCanvas />
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
      />
      <div ref={contentRef} className="content-container" data-scroll-container>
        <div data-scroll-section data-scroll-target="info-section">
          <Info activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>
        <div data-scroll-section data-scroll-target="projects-section">
          <Projects />
        </div>
        <div data-scroll-section data-scroll-target="contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;