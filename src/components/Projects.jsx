import React, { useEffect, useState } from 'react';
import '../styles/projects.scss';
import Accordion from './Accordion';

function Projects() {

  return (
    <section className='project-list'>
      <h1 className='projects-header'>Project Index</h1>
      <h2 className='date-year'>2023</h2>
      <ul>
        <li>
        <Accordion title="Sous">
          <p className='project-description'>
            Sous (as in sous-chef) is the final project presented for web development bootcamp at Lighthouse Labs. It was developed over two weeks with a React frontend and Rails backend in collaboration with two other students in the bootcamp.<br/><br/>

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
          <p className='project-description'>
            Open Book is a midterm project presented for web development bootcamp at Lighthouse Labs. It was developed over one week in collaboration another student.<br/><br/>

            The application is made to draft and upload writing as well as contribute to the writing of others. These contributions can be upvoted and added to the original text with the approval its author.
          </p>

          <p className='project-tech-stack'>
            TECH STACK:
            Native JS, JQuery, PostreSQL, Express
          </p>

          <div className='project-links'>
            <a href=''>Live Demo Coming Soon</a>
            <a href='https://github.com/angelren1220/Recipe-Hub'>Github Repo</a>
          </div>
        </Accordion>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
