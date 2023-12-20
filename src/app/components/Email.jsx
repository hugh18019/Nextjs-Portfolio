import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/icons/github-icon.svg';
import LinkedInIcon from '../../../public/icons/linkedin-icon.svg';

const Email = (props) => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>{`Let's Connect`}</h5>
      </div>
      <p className='text-[#ADB7BE] mb-4 max-w-md'>
        {''}
        {`I'm currently looking for new opportunities.`}
      </p>
      <div className='socials flex flex-row gap-2'>
        <Link>
          <Image src={LinkedInIcon} alt='github-icon' />
        </Link>
      </div>
      <div className='socials flex flex-row gap-2'>
        <Link href='github.com'>
          <Image src={GithubIcon} alt='linkedin-icon' />
        </Link>
      </div>
      <div>
        <form className='flex flex-col gap-4'>
          <label htmlFor='email' type='email' className='text-white'>
            Email
          </label>
          <input type='email' id='email' required placeholder='' />
        </form>
      </div>
    </section>
  );
};

export default Email;
