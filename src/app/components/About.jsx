'use client';
import React, { useState, useTransition } from 'react';
import { Bio } from '../config/texts';
import TabButton from './TabButton';
import Astronaut from './Astronaut';

const tabs = [
  {
    name: 'Skills',
    content:
      'React.js, Next.js, Javascript, Node.js, Express.js, MongoDB, Mongoose, MySQL, Python',
  },
  {
    name: 'Education',
    content: 'Sonoma State University, UC Berkely Coding Bootcamp',
  },
];

const About = (props) => {
  const [active, setActive] = useState('Skills');
  const [transition, pending] = useTransition();

  const handleTabChange = (id) => {
    transition(() => {
      setActive(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        {/* <Image src="" alt="about-image" /> */}
        <div>
          <h2>About</h2>
          <p>{Bio}</p>
          <div className='flex flex-row mt-8'>
            {/* <span className='mr-3 font-semibold hover:text-white text-black'>
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span> */}
            <ul>
              {tabs.map((tab, i) => (
                <TabButton
                  key={`${tab}`}
                  activeTab={active}
                  name={tab.name}
                  content={tab.content}
                  selectTab={() => handleTabChange(tab)}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* <Astronaut /> */}
      </div>
    </section>
  );
};

export default About;
