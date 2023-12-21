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
        <div
          key={i}
          className='min-w-[100px] w-fit  text-left bg-[#18191E] text-[#ADB7BE] rounded-r-lg mb-2 pl-2 pr-6'
        >
          <li className='no-underline hover:text-white'>{c}</li>
        </div>
      ))}
    </ul>
  );
};

const tabs = [
  {
    name: 'Skills',
    content:
      'React.js, Next.js, Javascript, Three.js, Node.js, Express.js, MongoDB, Mongoose, MySQL, Python, C++',
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
    <section id='about' className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='w-[650px] h-[500px] flex flex-col justify-center items-center'>
          <Suspense fallback={'...loading'}>
            <Canvas>
              <Room />
            </Canvas>
          </Suspense>
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full z-6'>
          <h2 className='text-4xl font-bold text-black mt-8'>About</h2>
          <p className='text-left text-base sm:mt-4 bg-[#18191E] text-[#ADB7BE] rounded-lg lg:text-lg p-6'>
            {Bio}
          </p>
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
