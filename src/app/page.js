import Image from 'next/image';

import Hero from './components/Hero';
import Rectangle from './components/ui_components/Rectangle';
import About from './components/About';
import Navbar from './components/Navbar';
import Colors from './config/colors';
import Projects from './components/Projects';
import Email from './components/Email';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-[${Colors.backgroundColors.grey}] flex-col justify-between items-center container mx-auto relative`}
    >
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <Hero />
        <About />
        <Projects />
        <Email />
      </div>
    </main>
  );
}
