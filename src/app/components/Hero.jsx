'use client';
import React, { lazy, Suspense } from 'react';
import Image from 'next/image';

import { Title, Intro } from '../config/texts';
import AnimatedText from './animations/AnimatedText';
import AstronautAndPC from './AstronautAndPC';

const Canvas = lazy(() => import('./Canvas'));

const Hero = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            {Title}
          </h1>
          <AnimatedText
            sequence={['Front End', 'Full Stack']}
            speed={250}
            loop={true}
          />
          <h1 className='text-white mt-4 text-4xl lg:text-6xl font-extrabold'>
            Developer
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            {Intro}
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-6 mb-6 bg-white hover:bg-slate-600 lg:mt-0'>
              <span>Hire Me</span>
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-6 mb-6 bg-slate-600 hover:bg-white lg:mt-0'>
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-4 mt-4 lg:mt-0 place-self-center'>
          <div className='squared-full place-self-center place-content-center h-[600px] w-[600px] lg:w-[600px] lg:h-[600px] relative'>
            <Suspense fallback={'...loading'}>
              <div className=' absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] w-[100%]'>
                <Canvas>
                  <AstronautAndPC />
                </Canvas>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
