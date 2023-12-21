'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/icons/github-icon.svg';
import LinkedInIcon from '../../../public/icons/linkedin-icon.svg';
import Colors from '../config/colors';

const Email = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = () => {
    console.log('form', formState);
  };

  return (
    <section
      id='connect'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'
    >
      <div>
        <div className='mt-0'>
          <h5 className='text-xl font-bold text-black my-2 '>{`Let's Connect`}</h5>
        </div>
        <div className='flex flex-col gap-2 justify-start items-center text-white rounded-xl w-1/4 bg-[#181818] py-6 px-4 sm:w-full sm:justify-center'>
          <div className='socials w-full flex flex-row justify-start gap-2'>
            <Link href='https://www.linkedin.com/in/huiran-l-0999b419b'>
              <Image color='black' src={LinkedInIcon} alt='github-icon' />
            </Link>
            <Link href='https://www.github.com/h8008'>
              <Image color='black' src={GithubIcon} alt='linkedin-icon' />
            </Link>
          </div>
          <div className='message w-full flex flex-row justify-start gap-2'>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
              {/* {''} */}
              {`I'm currently looking for new opportunities.`}
            </p>
          </div>
        </div>
      </div>
      <div>
        <form className='flex flex-col gap-4' onChange={(e) => handleChange(e)}>
          <label
            htmlFor='email'
            type='email'
            className='text-black block mb-2 text-sm font-medium'
          >
            Email
          </label>
          <input
            name='email'
            type='email'
            id='email'
            defaultValue={formState.email}
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder=''
          />
          <label
            htmlFor='email'
            type='email'
            className='text-black block mb-2 text-sm font-medium'
          >
            Title
          </label>
          <input
            name='title'
            type='title'
            id='title'
            defaultValue={formState.title}
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          />
          <label
            htmlFor='email'
            type='email'
            className='text-black block mb-2 text-sm font-medium'
          >
            Message
          </label>
          <input
            name='message'
            type='message'
            id='message'
            defaultValue={formState.message}
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full h-20 p-2.5'
          />
          <button
            className={`bg-[${Colors.backgroundColors.yellow}] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full h-10 p-2.5`}
          >
            <p className='text-center'>{`Send Message`}</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
