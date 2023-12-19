'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';

import Computer from './Computer';

import { Title, Bio } from '../config/texts';
import TextAnimation from './animations/TypeAnimation';

const Hero = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            {Title}
          </h1>
          <TextAnimation
            sequence={[
              'Hui',
              1000,
              'FrontEnd Developer',
              1000,
              'FullStack Developer',
              1000,
            ]}
            wrapper='span'
            style={{
              fontColor: 'black',
              fontSize: '2em',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
            speed={50}
            repeat={Infinity}
          />
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            {Bio}
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-6 bg-white hover:bg-slate-600 lg:mt-0'>
              <span>Hire Me</span>
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-6 bg-slate-600 hover:bg-white lg:mt-0'>
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-4 mt-4 lg:mt-0 place-self-center'>
          <div className='squared-full place-self-center place-content-center bg-yellow-300 h-[600px] w-[600px] lg:w-[600px] lg:h-[600px] relative'>
            <Suspense fallback={'...loading'}>
              <div className=' absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-96 w-96'>
                <Computer />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
