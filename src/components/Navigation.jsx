import React, { useEffect, useRef } from 'react';
import '../styles/navigation.scss';

function Navigation({ scrollToSection, activeSection }) {
  const navRef = useRef(null); // Create a ref for the nav element

  useEffect(() => {
    // Add event listener to detect tab key press
    const handleTabPress = (event) => {
      if (event.key === 'Tab') {
        // Make the nav element focusable when the tab key is pressed
        navRef.current.tabIndex = 0;

        // Make each navigation item focusable
        const navItems = navRef.current.querySelectorAll('.nav-item');
        navItems.forEach((item) => (item.tabIndex = 0));

        // Remove the event listener to prevent multiple invocations
        document.removeEventListener('keydown', handleTabPress);
      }
    };

    // Add event listener to the document
    document.addEventListener('keydown', handleTabPress);

    // Cleanup function to remove event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleTabPress);
    };
  }, []);

  const handleKeyDown = (event) => {
    const currentNavItem = document.activeElement;

    switch (event.key) {
      case 'ArrowRight':
        navigate('next');
        break;
      case 'ArrowLeft':
        navigate('prev');
        break;
      default:
        break;
    }
  };

  const navigate = (direction) => {
    const navItems = navRef.current.querySelectorAll('.nav-item');
    const currentNavItem = document.activeElement;

    let nextNavItem;

    if (direction === 'next') {
      nextNavItem = currentNavItem.nextElementSibling || navItems[0]; // Cycle to first item if no next item
    } else if (direction === 'prev') {
      nextNavItem = currentNavItem.previousElementSibling || navItems[navItems.length - 1]; // Cycle to last item if no previous item
    }

    if (nextNavItem && nextNavItem.classList.contains('nav-item')) {
      event.preventDefault();
      nextNavItem.focus();
    }
  };

  return (
    <nav
      ref={navRef}
      tabIndex={-1} // Initially make the nav element non-focusable
      data-scroll="1"
      data-scroll-sticky="1"
      data-scroll-target="#sticky"
      onKeyDown={handleKeyDown} // Handle keyboard events
    >
      <ul className="nav-list">
        <NavItem
          section="info-section"
          title="Info"
          activeSection={activeSection}
          onClick={scrollToSection}
        />
        <NavItem
          section="projects-section"
          title="Work"
          activeSection={activeSection}
          onClick={scrollToSection}
        />
        <NavItem
          section="contact-section"
          title="Contact"
          activeSection={activeSection}
          onClick={scrollToSection}
        />
      </ul>
    </nav>
  );
}

function NavItem({ section, title, activeSection, onClick }) {
  const handleClick = () => {
    onClick(section);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick(); // Simulate click on Enter key press
    }
  };

  return (
    <li
      className={`nav-item ${activeSection === section ? 'active' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown} // Handle Enter key press
      tabIndex={-1} // Make each navigation item initially non-focusable
    >
      {title}
    </li>
  );
}

export default Navigation;
