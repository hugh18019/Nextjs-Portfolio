import Image from 'next/image';

import Hero from './components/Hero';
import Rectangle from './components/ui_components/Rectangle';
import About from './components/About';
import Navbar from './components/Navbar';
import Colors from './config/colors';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-[${Colors.backgroundColors.grey}] flex-col justify-between items-center container mx-auto relative`}
    >
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
