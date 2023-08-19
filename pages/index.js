import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Projects from '@/components/Project';
// import Skills from '@/components/Skills';
// import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      
    </main>
  )
}
