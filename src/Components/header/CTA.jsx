import { useEffect } from 'react'; 
import CV from '../../assets/cv.pdf'
import AOS from 'aos';

import 'aos/dist/aos.css';

const CTA = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="cta">
      <a data-aos="fade-right" data-aos-delay="200" href={CV} download className='btn'>Download CV</a>
      <a data-aos="fade-left" data-aos-delay="200" href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};
export default CTA;