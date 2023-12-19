import Image from 'next/image';

import Hero from './components/Hero';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-co container mx-auto '>
      <Hero />
    </main>
  );
}
