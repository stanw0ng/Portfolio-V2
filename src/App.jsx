import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import ShaderCanvas from './components/ShaderCanvas';
import Navigation from './components/Navigation';
import Info from './components/Info';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import './styles/base.css';
import 'locomotive-scroll/src/locomotive-scroll.scss';

function App() {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    scrollInstanceRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add any other options you want to customize
    });

    return () => {
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const target = contentRef.current.querySelector(`[data-scroll-target="${sectionId}"]`);
    if (target) {
      scrollInstanceRef.current.scrollTo(target, {
        offset: -80,
        duration: 800,
      });

      scrollInstanceRef.current.update();
    }
  };


  return (
    <div ref={scrollRef}>
      <ShaderCanvas />
      <Navigation contentRef={contentRef} scrollToSection={scrollToSection} />
      <div ref={contentRef} className="content-container" data-scroll-container>
        <div data-scroll-section data-scroll-target="info-section">
          <Info />
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
