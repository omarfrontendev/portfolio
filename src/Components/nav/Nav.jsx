import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

import './nav.css';

const Nav = () => {

  const [activeNav, setActiveNav] = useState(0);


  return (
    <nav>
      <a onClick={() => setActiveNav(0)} className={`${activeNav === 0 ? 'active' : ''}`} href='#home'><AiOutlineHome/></a>
      <a onClick={() => setActiveNav(1)} className={`${activeNav === 1 ? 'active' : ''}`} href='#about'><AiOutlineUser/></a>
      <a onClick={() => setActiveNav(2)} className={`${activeNav === 2 ? 'active' : ''}`} href='#experiance'><BiBook/></a>
      <a onClick={() => setActiveNav(3)} className={`${activeNav === 3 ? 'active' : ''}`} href='#services'><RiServiceLine/></a>
      <a onClick={() => setActiveNav(4)} className={`${activeNav === 4 ? 'active' : ''}`} href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  );
};

export default Nav;