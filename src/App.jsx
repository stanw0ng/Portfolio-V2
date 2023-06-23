import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import ShaderCanvas from './components/ShaderCanvas';
import Navigation from './components/Navigation';
import Info from './components/Info';
import Projects from './components/Projects';

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
    const target = contentRef.current.querySelector(`[data-scroll-id="${sectionId}"]`);
    if (target) {
      scrollInstanceRef.current.scrollTo(target, {
        offset: -50, // Adjust this offset to account for any fixed headers or spacing
        duration: 800,
      });
    }
  };

  return (
    <div ref={scrollRef}>
      <ShaderCanvas />
      <Navigation contentRef={contentRef} scrollToSection={scrollToSection} />
      <div ref={contentRef} className="content-container" data-scroll-container>
        <Info />
        <Projects />
      </div>
    </div>
  );
}

export default App;
