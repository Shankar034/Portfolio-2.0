import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from "next/link"
import { GetStaticProps} from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}



const inter = Inter({ subsets: ['latin'] })
const Home = ({pageInfo, experiences, projects, socials, skills}: Props)=>{
  return (
    
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      

        {/*  Header */}
        <Header socials={socials}/>

        
        {/* Hero */}
        <section id="hero" className='snap-start'>
          <Hero pageInfo={pageInfo}/>
        </section>

        {/* About */}
        <section id='about' className='snap-center'>
          <About pageInfo = {pageInfo}/>
        </section>

        {/* Experience */}
        <section id='experience' className='snap-center' >
          <WorkExperience experiences={experiences}/>
        </section>

        {/* Skills */}
        <section id="skills" className='snap-start'>
          <Skills skills= {skills}/>

        </section>

        {/* Projects */}
        <section id="projects" className='snap-start'>
          <Projects/>
        </section>

        {/* Contact Me */}
        <section id="contact" className='snap-start'>
          <ContactMe/>
        </section>

        <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center
          '>
           <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          src="https://thumbs.dreamstime.com/z/programmer-cartoon-character-vector-illustration-super-professional-project-manager-funny-person-yoga-pose-97265997.jpg" alt="" /></div>
        </footer>
        </Link>
    
    </div>
  
   
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props > = async () =>{

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchPageInfo();
  const skills: Skill[] = await fetchPageInfo();
  const projects: Project[] = await fetchPageInfo();
  const socials: Social = await fetchPageInfo();
  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,

    },
    revalidate: 10,
  };

};