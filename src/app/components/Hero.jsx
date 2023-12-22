'use client';
import React, { lazy, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Title, Intro } from '../config/texts';
import AnimatedText from './animations/AnimatedText';
import AstronautAndPC from './AstronautAndPC';

const Canvas = lazy(() => import('./Canvas'));
const AstronautLoading = () => {
  return (
    <div className='flex flex-col justify-center items-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-3/5 w-3/5 bg-slate-900 rounded-full'>
      <p className='text-white'>Loading...</p>
    </div>
  );
};

const Hero = () => {
  // const heroImg = '/images/logo/jingdouyun.jpg';
  return (
    <section id='top' className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left sm:justify-self-start'>
          <h1 className='text-white mb-4 sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold'>
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
            <Link href='https://drive.google.com/file/d/1lxPYCj58dMDWL3P_7wxIiRLMQxpGYGH0/view?usp=sharing'>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-6 mb-6 bg-slate-600 hover:bg-white lg:mt-0'>
                <span>Download CV</span>
              </button>
            </Link>
          </div>
        </div>
        <div className='col-span-4 mt-4 lg:mt-0 place-self-center'>
          <div className='squared-full place-self-center place-content-center h-[600px] w-[600px] lg:w-[600px] lg:h-[600px] relative rounded-lg bg-[#bc5e6c]'>
            <Image
              src='/images/logo/jingdouyun.jpg'
              width={200}
              height={200}
              alt='backdrop'
              className='rounded-lg'
            />
            <Suspense fallback={<AstronautLoading />}>
              <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-3/5 w-3/5 bg-slate-900 rounded-full'>
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
