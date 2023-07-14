import React, { useState, useRef, useEffect } from 'react';
import '../styles/accordion.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === contentRef.current) {
          setContentHeight(entry.contentRect.height);
          break;
        }
      }
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span className={`accordion-icon ${isOpen ? 'minus' : 'plus'}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
      >
        <div ref={contentRef} className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
