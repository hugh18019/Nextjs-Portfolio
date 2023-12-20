'use client';
import React, { Suspense, useState, useTransition, lazy } from 'react';
import { Bio } from '../config/texts';
import TabButton from './TabButton';
import Room from './Room';

const Canvas = lazy(() => import('./Canvas'));

const getTabContent = (activeTab) => {
  const className = ' text-black border-b border-black-100';
  return (
    <ul className='list-disc pl-2'>
      {activeTab.content.split(',').map((c, i) => (
        <li
          key={i}
          // className={`mr-3 font-semibold ${className} hover:text-white no-underline`}
          className='no-underline text-black'
        >
          {c}
        </li>
      ))}
    </ul>
  );
};

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
  const [activeIdx, setActiveIdx] = useState(0);
  const [pending, transition] = useTransition();

  const handleTabChange = (id, idx) => {
    transition(() => {
      setActive(id);
      setActiveIdx(idx);
    });
  };

  return (
    <section className='text-white' id='about-section'>
      <div className='grid grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* <div className='flex items-center justify-center '> */}
        <Suspense fallback={'...loading'}>
          <Canvas>
            <Room />
          </Canvas>
        </Suspense>
        {/* </div> */}
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-black mt-8'>About</h2>
          <p className='text-base lg:text-lg'>{Bio}</p>
          <div className='flex flex-row justify-start mt-8'>
            <ul>
              {tabs.map((tab, i) => (
                <TabButton
                  index={i}
                  key={`${i}`}
                  activeTab={active}
                  name={tab.name}
                  content={tab.content}
                  selectTab={() => handleTabChange(tab.name, i)}
                />
              ))}
            </ul>
          </div>
          <div className='mt-8'>{getTabContent(tabs[activeIdx])}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
