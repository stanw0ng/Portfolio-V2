import React, { useEffect, useState } from 'react';
import '../styles/projects.scss';
import Accordion from './Accordion';
import MediaCarousel from './Carousel';
import { media_openbook } from '../media/openbook_media';

function Projects() {

  return (
    <section className='project-list'>

      <h2 className='date-year'>2023</h2>
      <ul>
        <li>
        <Accordion title="Portfolio 2.0">

          <p className='project-description'>
          </p>

          <p className='project-tech-stack'>
            TECH STACK:
            React, Three.js, LocomotiveScroll
          </p>

          <div className='project-links'>
            <a href=''>Live Demo Coming Soon</a>
            <a href='https://github.com/angelren1220/Recipe-Hub'>Github Repo</a>
          </div>
        </Accordion>

        <Accordion title="Sous">
          <p className='project-description'>
            Sous (as in sous-chef) is the final project presented for a web-development bootcamp. It was developed over two weeks with a React frontend and Rails backend in collaboration with two other students. The project was built from the ground up such as developing an ERD and wireframing in Figma.<br/><br/>

            This an application transforms the recipe rolodexes of the past into a digital platform where recipes can be collected and shared with other users.
          </p>

          <p className='project-tech-stack'>
            TECH STACK:
            React, Ruby on Rails, PostreSQL, Radix UI
          </p>

          <div className='project-links'>
            <a href=''>Live Demo Coming Soon</a>
            <a href='https://github.com/angelren1220/Recipe-Hub'>Github Repo</a>
          </div>
        </Accordion>

        <Accordion title="Open Book">

          <div className='split-view-box'>

            <div className='project-info'>
            
              <div className='project-tech-stack'>
                <h2>TECH STACK</h2>
                <p>Native JS • JQuery • PostreSQL • Express</p>
              </div>
              
              <p className='project-description'>
                Open Book is a midterm project presented for web development bootcamp at Lighthouse Labs. It was developed over one week in collaboration another student.<br/><br/>
                The application is made to draft and upload writing as well as contribute to the writing of others. These contributions can be upvoted and added to the original text with the approval its author.
              </p>

              <div className='project-links'>
                <a href='#'>Live Demo WIP</a>
                <a href='https://github.com/stanw0ng/Midterm-Project'>Github Repo ↗</a>
              </div>
            </div>

            <MediaCarousel mediaList={media_openbook}/>

          </div>

        </Accordion>
        </li>
      </ul>

      <h2 className='date-year'>2022</h2>
      <ul>
        <Accordion title="Renders for Anony">
        </Accordion>

        <Accordion title="Field Blends">
        </Accordion>
      </ul>

      <h2 className='date-year'>2021</h2>
      <ul>
        <Accordion title="Portfolio 1.0">
        </Accordion>

        <Accordion title="Waiting Game">
        </Accordion>

        <Accordion title="Dream Journal">
        </Accordion>

        <Accordion title="Common">
        </Accordion>
      </ul>


    </section>
  );
}

export default Projects;
