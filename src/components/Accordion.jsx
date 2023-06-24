import React, { useState, useRef, useEffect } from 'react';
import '../styles/accordion.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isOpen]);
  
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span className={`accordion-icon ${isOpen ? 'minus' : 'plus'}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div ref={contentRef} className="accordion-content">
        <div className={`accordion-content-inner ${isOpen ? 'open' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
