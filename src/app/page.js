import Image from 'next/image';

import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Colors from './config/colors';
import Projects from './components/Projects';
import Email from './components/Email';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-[${Colors.backgroundColors.grey}] flex-col`}
    >
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4 gap-40'>
        <Hero />
        <About />
        <Projects />
        <Email />
      </div>
    </main>
  );
}
