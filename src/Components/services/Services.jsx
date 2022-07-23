import { useEffect } from 'react';
import ServicesCard from './ServicesCard';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './services.css'

const Services = () => {

  const servicesCards = [
    {
      id: 1,
      title: 'UI/UX Design',
      tasks: ["'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"]
    },
    {
      id: 2,
      title: 'Web Development',
      tasks: ["'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"]
    },
    {
      id: 3,
      title: 'Content Creation',
      tasks: ["'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"]
    }
  ];

  useEffect(() => {
    AOS.init()
  }, []);


  return (
    <section id='services'>
      <h2 data-aos="fade-up">Services</h2>
      <div className="container services_container">
        <div className='services_cards' data-aos="fade-up">
          {servicesCards.map(card => <ServicesCard key={card.id} {...card}/>)}
        </div>
      </div>
    </section>
  );
};

export default Services;