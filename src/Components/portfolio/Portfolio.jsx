import { useEffect } from 'react';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './portfolio.css';

const Portfolio = () => {


  const projects = [
    {
      id: 1,
      title: 'Project 1',
      img: IMG1
    },
    {
      id: 2,
      title: 'Project 2',
      img: IMG2
    },
    {
      id: 3,
      title: 'Project 3',
      img: IMG3
    },
    {
      id: 4,
      title: 'Project 4',
      img: IMG4
    },
    {
      id: 5,
      title: 'Project 5',
      img: IMG5
    },
    {
      id: 6,
      title: 'Project 6',
      img: IMG6
    },
  ];

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section>
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-delay='100'>Portfolio</h2>
      <div className="container portf_container">
        {projects.map(project =>     
        <article key={project.id} data-aos="fade-up">
          <div className="portf_img">
            <img src={project.img} alt='project__IMG'/>
          </div>
          <h3>{project.title}</h3>
          <div className="btns">
            <a href="#" target='_blank' className="btn">Github</a>
            <a href="#" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      )}
      </div>
    </section>
  );
};

export default Portfolio;