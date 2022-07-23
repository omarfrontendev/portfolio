import { useEffect } from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './header.css';

const Header = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <header id='home'>
      <div className="container header_container">

        <div>
          <h5 data-aos="fade-down">Hello I'm</h5>
          <h1 data-aos="fade-down" data-aos-delay="100">Omar Abd-Elrhman</h1>
          <h5 data-aos="fade-down" data-aos-delay="150" className="text-light">Frontend Developer</h5>
          <CTA/>
        </div>

        <div className="me" data-aos="fade-up" data-aos-delay="300" >
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

        <HeaderSocials/>
      </div>
    </header>
  );
};

export default Header;