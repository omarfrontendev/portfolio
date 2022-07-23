import { useState, useEffect } from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './contact.css';

const Contact = () => {

  const [nameInputFocus, setNameInputFocus] = useState(false);
  const [EmailInputFocus, setEmailInputFocus] = useState(false);
  const [messageInputFocus, setMessageInputFocus] = useState(false);

  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <section id='contact'>
      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos="fade-up" className="contact_options-card">
            <HiOutlineMail/>
            <h4>Email</h4>
            <small>dummy@outlook.com</small>
            <a target='_blank' href='mailto:dummy@outlook.com'>Send Message</a>
          </article>
          <article data-aos="fade-up" data-aos-delay='100' className="contact_options-card">
            <RiMessengerLine/>
            <h4>messenger</h4>
            <small>In Facebook</small>
            <a target='_blank' href='https://m.me/kareem.amara.5'>Send Message</a>
          </article>
          <article data-aos="fade-up" data-aos-delay='200' className="contact_options-card">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <small>+01206338893</small>
            <a target='_blank' href='https://api.whatsapp.com/send?phone=02001206338893'>Send Message</a>
          </article>
        </div>
        <form action="submit" className="contact_form">
          <div data-aos="fade-up"  className="input_control">
            <input onFocus={() => {setNameInputFocus(true)}} onBlur={()=>setNameInputFocus(false)} className='valid' name='name' type='text' placeholder='Your Full Name'/>
          </div>
          <div data-aos="fade-up" data-aos-delay='150' className="input_control">
            <input onFocus={() => {setEmailInputFocus(true)}} onBlur={()=>setEmailInputFocus(false)} name='email' type='email' placeholder='Your Email'/>
          </div>
          <div data-aos="fade-up" data-aos-delay='250' className="input_control">
            <textarea onFocus={() => {setMessageInputFocus(true)}} onBlur={()=>setMessageInputFocus(false)} name='message' row='7' placeholder='Your Message'/>
          </div>
          <button data-aos="fade-up" data-aos-delay='300' className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;