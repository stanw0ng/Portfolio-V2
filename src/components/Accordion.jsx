import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/accordion.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className="accordion" role="region" aria-labelledby={`${title}-heading`} aria-expanded={isOpen}>
      <div
        className="accordion-header"
        onClick={toggleAccordion}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleAccordion(); }}
        tabIndex={0}
        role="button"
        aria-controls={`${title}-content`}
        aria-expanded={isOpen}
        id={`${title}-heading`}
      >
        <h2>{title}</h2>
        <span className={`accordion-icon ${isOpen ? 'minus' : 'plus'}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: contentHeight }}
        id={`${title}-content`}
        ref={contentRef}
      >
        {isOpen && (
          <div className="accordion-content-inner">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;