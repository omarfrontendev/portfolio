import { useEffect } from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';


const Testimonials = () => {

  const reviewers = [
    {
      img: AVA1,
      name: 'Eman',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat iure velit ipsum rem quam delectus earum dolor omnis libero voluptatibus accusamus, similique voluptate explicabo exercitationem inventore facilis quisquam in."
    },
    {
      img: AVA2,
      name: 'Eman',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat iure velit ipsum rem quam delectus earum dolor omnis libero voluptatibus accusamus, similique voluptate explicabo exercitationem inventore facilis quisquam in."
    },
    {
      img: AVA3,
      name: 'Eman',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat iure velit ipsum rem quam delectus earum dolor omnis libero voluptatibus accusamus, similique voluptate explicabo exercitationem inventore facilis quisquam in."
    },
    {
      img: AVA4,
      name: 'Eman',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat iure velit ipsum rem quam delectus earum dolor omnis libero voluptatibus accusamus, similique voluptate explicabo exercitationem inventore facilis quisquam in."
    },
  ];

  useEffect(() => {
    AOS.init();
  })


  return (
    <section id='testimonials'>
      <h2 data-aos="fade-up">What People Say?</h2>
      <Swiper 
      className="container testimonials_container"
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      data-aos="fade-up" data-aos-delay="100"
      >
        {reviewers.map((reviewer, index) => 
            <SwiperSlide className='testimonial_slide' key={index}>
              <div className="reviewer_img">
                <img src={reviewer.img} alt="" />
              </div>
              <h3>{reviewer.name}</h3>
              <small>{reviewer.review}</small>
            </SwiperSlide>
          )}
      </Swiper>
    </section>
  );
};

export default Testimonials;