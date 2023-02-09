import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      

        {/*  Header */}
        <Header/>
        {/* Hero */}
        <section id="hero" className='snap-start'>
          <Hero/>
        </section>

        {/* About */}
        <section id='about' className='snap-center'>
          <About/>
        </section>

        {/* Experience */}
        <section id='experience' className='snap-center' >
          <WorkExperience/>
        </section>

        {/* Skills */}
        <section id="skills" className='snap-start'>
          <Skills/>

        </section>

        {/* Projects */}
        <section id="projects" className='snap-start'>
          <Projects/>
        </section>

        {/* Contact Me */}
    
    </div>
  
   
  );
};
