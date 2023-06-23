import React, { useEffect, useState } from 'react';
import '../styles/info.scss';

function Info() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
<section className={`split-section ${fadeIn ? 'show' : ''}`} data-scroll-section data-scroll-id="info-section">

      <div className='left-info'>
        <p>
          Stanley Wong is a Toronto-based developer and designer. He has a background in architecture and industrial design which continues to inform his work today. He is interested in crafting thoughtful and engaging experiences for digital platforms.<br/><br/>

          Curious by nature, he frequently adopts new languages and technologies into his practice. Currently, he is exploring the possibilities of Python and Three.js.<br/><br/>

          When he is not too busy, he enjoys really long bike rides, cooking for friends, as well as having conversations with his cat and houseplants.
        </p>
      </div>

      <div className="vertical-split"></div>

      <div className='right-info'>
        <ul>
          <p className='skills-text'>He is comfortable working with the following software and languages:<br/><br/></p>

          <li>
            <h1>1</h1>
            <div className='skill-container'>
              <h3 className='skill-category'>DEVELOPMENT</h3>
              <p>HTML, CSS, JavaScript, TypeScript, Node.js,  React, jQuery, PostgreSQL, Ruby, Ruby on Rails, Material UI, Radix UI</p>
            </div>
          </li>

          <li>
            <h1>2</h1>
            <div className='skill-container'>
              <h3 className='skill-category'>TESTING</h3>
              <p>Mocha + Chai, Jest, RSpec, Cypress</p>
            </div>
          </li>

          <li>
            <h1>3</h1>
            <div className='skill-container'>
              <h3 className='skill-category'>DESIGN TOOLS</h3>
              <p>Storybook, Adobe XD, Figma, Adobe CC</p>
            </div>
          </li>

          <li>
            <h1>4</h1>
            <div className='skill-container'>
              <h3 className='skill-category'>VERSION CONTROL</h3>
              <p>Git, GitHub</p>
            </div>
          </li> 

          <li>
            <h1>5</h1>
            <div className='skill-container'>
              <h3 className='skill-category'>3D VISUALIZATION / MODELLING</h3>
              <p>Blender, Rhino3D, Grasshopper</p>
            </div>
          </li>

        </ul>
      </div>

    </section>
  );
}

export default Info;