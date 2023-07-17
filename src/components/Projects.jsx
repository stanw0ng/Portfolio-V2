import React, { useEffect, useState } from 'react';
import '../styles/projects.scss';
import Accordion from './Accordion';
import MediaCarousel from './Carousel';
import { media_openbook, media_sous, media_portfolio2, media_anony, media_wine, media_portfolio1, media_waitingGame, media_dreamJournal, media_common, } from '../media/media';

function Projects() {

  return (
    <section className='project-list'>

      <h2 className='date-year'>2023</h2>

      <ul>
        <li>
          <Accordion title="Portfolio 2.0">

            <div className='split-view-box'>

              <div className='project-info'>

                <div className='project-tech-stack'>
                  <h2>TECH STACK</h2>
                  <p>React • Three.js • LocomotiveScroll</p>
                </div>

                <p className='project-description'>
                  This second iteration of the portfolio is a single-page website which catalogs exclusively digital work and experiments with the Three.js framework and Locomotive Scroll library in React. <br /><br />

                  The Earth-themed hues of the generated perlin noise background connects back to the space motif in the first portfolio.
                </p>

                <div className='project-links'>
                  <a href='https://github.com/stanw0ng/Portfolio-V2'>Github↗</a>
                </div>

              </div>

              <MediaCarousel mediaList={media_portfolio2} />
            </div>

          </Accordion>

          <Accordion title="Sous">

            <div className='split-view-box'>

              <div className='project-info'>

                <div className='project-tech-stack'>
                  <h2>TECH STACK</h2>
                  <p>React • Ruby on Rails • PostreSQL • Radix UI</p>
                </div>

                <p className='project-description'>
                  Sous (as in sous-chef) is the final project presented for a web-development bootcamp. It was developed over two weeks with a React frontend and Rails backend in collaboration with two other students. The project was built from the ground up such as developing an ERD and wireframing in Figma.<br /><br />
                  This an application transforms the recipe rolodexes of the past into a digital platform where recipes can be collected and shared with other users.
                </p>

                <div className='project-links'>
                  <a href='https://github.com/angelren1220/Recipe-Hub'>Project Github ↗</a>
                </div>
              </div>

              <MediaCarousel mediaList={media_sous} />

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
                  Open Book is a midterm project presented for web development bootcamp at Lighthouse Labs. It was developed over one week in collaboration another student.<br /><br />
                  The application is made to draft and upload writing as well as contribute to the writing of others. These contributions can be upvoted and added to the original text with the approval its author.
                </p>

                <div className='project-links'>
                  <a href='https://github.com/stanw0ng/Midterm-Project'>Project Github ↗</a>
                </div>
              </div>

              {/* <div className='split-line'></div> */}

              <MediaCarousel mediaList={media_openbook} />

            </div>

          </Accordion>
        </li>
      </ul>

      <h2 className='date-year'>2022</h2>

      <ul>
        <Accordion title="Digital Work for Anony">

          <div className='split-view-box'>

            <div className='project-info'>

              <div className='project-tech-stack'>
                <h2>SOFTWARE</h2>
                <p>Blender • Rhino3D • Premiere • Lightroom</p>
              </div>
              <p className='project-description'>
                Snapshot of some digital assets (animations, photographs and renders) created for Anony's product catalog and digital marketing.
              </p>

              <div className='project-links'>
                <a href='https://anony.ca/'> Visit their website ↗</a>
                <a href='https://www.instagram.com/anonystudio/?hl=en'> Or their Instagram ↗</a>
              </div>

            </div>

            <MediaCarousel mediaList={media_anony} />
          </div>

        </Accordion>

        <Accordion title="Field Blends / Roussanne">

          <div className='split-view-box'>

            <div className='project-info'>

              <div className='project-tech-stack'>
                <h2>SOFTWARE</h2>
                <p>Blender • Rhino3D • Premiere • Lightroom</p>
              </div>

              <p className='project-description'>
                Some label artwork and animations for Keenan and Zoe, natural winemakers based in Summerland, BC.
              </p>

              <div className='project-links'>
                <a href='https://www.instagram.com/marmotonmatsu/?hl=en'> Find their work on Instagram ↗</a>
              </div>

            </div>

            <MediaCarousel mediaList={media_wine} />

          </div>

        </Accordion>
      </ul>

      <h2 className='date-year'>2021</h2>

      <ul>
        <Accordion title="Portfolio 1.0">

          <div className='split-view-box'>

            <div className='project-info'>

              <div className='project-tech-stack'>
                <h2>TECH STACK</h2>
                <p>Native JS • JQuery • P5.js</p>
              </div>

              <p className='project-description'>
                This first attempt at a personal portfolio and first 'real' web project after three weeks of self-learning the fundamentals of HTML, CSS and JS. <br /><br />

                Some notable features include a darkmode and custom icons for hovering over each project.
              </p>

              <div className='project-links'>
                <a href='https://stanw0ng.github.io/Portfolio/index.html'>Visit website ↗</a>
                <a href='https://github.com/stanw0ng/Portfolio'>Project Github ↗</a>
              </div>

            </div>

            <MediaCarousel mediaList={media_portfolio1} />
          </div>

        </Accordion>

        <Accordion title="Waiting Game">

          <div className='split-view-box'>

            <div className='project-info'>

              <div className='project-tech-stack'>
                <h2>SOFTWARE</h2>
                <p>Adobe XD • Illustrator • Photoshop</p>
              </div>

              <p className='project-description'>
                Transferring ideas of a non-place and the photography of Lynne Cohen into digital interactions, the space of a waiting room is replicated onto the Internet, the ultimate non-place. Here, users must reckon with various objects while they wait. The objects all have a unique set of interactions built in; some relate to one another while others are completely independent. Interactions are all somewhat incoherent in nature, offering moments of surprise for users, generating a micro-narrative in an otherwise mundane environment. Reinforcing the idea a non-space, a muzak cover of Close to You by the Carpenters loops in the background, offers respite from waiting, but gradually transforms into the soundtrack of torture as it endlessly loops.<br /><br />

                By completing each interaction, users will advance their position in the queue. The order in which these actions occur does not matter, there is no linear path to reach the final event where users can finally leave the current room. However, despite advancing into the next space, the user will always find themselves similar room again, perpetually waiting and preoccupying themselves with interactions in hopes that something meaningful might happen.
              </p>

              <div className='project-links'>
                <a href='https://vimeo.com/728997311'>Full video demo ↗</a>
              </div>

            </div>

            <MediaCarousel mediaList={media_waitingGame} />
          </div>

        </Accordion>

        <Accordion title="Dream Journal">

          <div className='split-view-box'>

            <div className='project-info'>

              <div className='project-tech-stack'>
                <h2>SOFTWARE</h2>
                <p>Adobe XD • Illustrator • Photoshop</p>
              </div>

              <p className='project-description'>
                Echoing the game of exquisite corpse invented by the Surrealists or LSD: Dream Emulator by Osamu Sato, this project celebrates the chaotic nature of interpretation as a creative process. It relies on the tension between two opposing states, the organic and the artificial, to create a unique experience that challenges traditional ideas of social media and goes against the notion that there is nothing more uneventful than hearing someone explain their dreams.<br /><br />

                On this platform, dreams are the primary "content" for users to interact with and manipulate. Users catalog there dreams through typed text, sound files or imagery for interpretion. Once the dream is submitted into a cloud of other dreams, other users can choose to interpret them; however, in a medium different to the the original. For example, a voice recording can only be decoded through imagery or text allowing the perpetual transformation of dreams into completely different abstractions.
              </p>

              <div className='project-links'>
                <a href='https://vimeo.com/682011600'>Full video demo ↗</a>
              </div>

            </div>

            <MediaCarousel mediaList={media_dreamJournal} />

          </div>

        </Accordion>

        <Accordion title="Common">

          <div className='split-view-box'>

            <div className='project-info'>

              <div className='project-tech-stack'>
                <h2>SOFTWARE</h2>
                <p>Adobe XD • Illustrator • Photoshop</p>
              </div>

              <p className='project-description'>
                This project was a response to rising food insecurity in the GTA at the height of the pandemic while leveraging the excess of food found in local supermarkets and neighborhoods. My project partner and I were interested in the concept of food sharing, community-based projects that redistribute excess food as an open source to the public. Such projects already exist in cities such as Berlin or New York, and recently gaining a lot of traction in the city of Toronto with the emergence of Community Fridges TOronto (CFTO).<br/><br/>

                Through our research informed through user journey maps, empathy maps and more importantly, interviews with participants of CFTO, my project partner and I proposed an digital platform/application, Common that would help communicate the specific needs of individuals that participate in food sharing through community fridges. These users are either people that donate or take food, transport excess food, or host fridges at their storefronts or restaurants, or upkeep the fridges.<br/><br/>

                The name of the application Common comes from the concept of food as commons in which food is not just a commodity for trade, but a public commons that is potentially sacred and capable of bringing communities closer. We wanted the look and feel of the appplication to allude to the shelves of a fridge and have room for customization so the individuality and specificity of each fridge or community can be reflected. Additionally, we ideated on offline solutions that provide access to the fridges while ensuring a level of accountibility to the food sharing community through the implementation of NFC key fob's.
              </p>

              <div className='project-links'>
                <a href='https://micro-macro.format.com/'>View project presentation for DesignTO ↗</a>
              </div>

            </div>

            <MediaCarousel mediaList={media_common} />

          </div>

        </Accordion>
      </ul>


    </section>
  );
}

export default Projects;
