import { useEffect } from 'react';
import ME from '../../assets/me-about.jpg'
import AboutCard from './AboutCard';
import {CgAwards} from 'react-icons/cg';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './about.css';

const About = () => {

  useEffect(() => {
    AOS.init();
  })

  const aboutCards = [
    {
      id: 1,
      title: 'Expoeriance',
      p: '3+ Years Working',
      icon: <CgAwards className='about_icon'/>
    },
    {
      id: 2,
      title: 'Clients',
      p: '200+ Worldwide',
      icon: <FiUsers className='about_icon'/>
    },
    {
      id: 3,
      title: 'Projects',
      p: '80+ Completed',
      icon: <VscFolderLibrary className='about_icon'/>
    }
  ]


  return (
    <section id='about'>
      <h5 data-aos="fade-up">Get To Know</h5>
      <h2 data-aos="fade-up" data-aos-delay="100">About Me</h2>
      <div className='container about_container'>
        <div data-aos="fade-right" data-aos-delay="150" className="about_me-image">
          <div className="about_image">
            <img src={ME} alt='me'/>
          </div>
        </div>
        <div className="about_me-content">
          <div className="about_me-cards">
            {aboutCards.map(card => <AboutCard key={card.id} {...card}/>)}
          </div>
          <p data-aos="fade-up" data-aos-delay="250" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam ullam tempore ut dolor voluptas. Reiciendis, commodi incidunt laborum maiores, voluptas, iusto nemo quia distinctio dolore optio libero non nesciunt.</p>
          <a  data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="1500"
              data-aos-duration="800" 
              href="#contact" 
              className="btn btn-primary"
              >
                Let's Talk
            </a>
        </div>
      </div>
    </section>
  );
} ;

export default About;