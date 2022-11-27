import React from 'react'
import './testimonial.css'
import avatar1 from "../../assests/avatar1.jpg";
import avatar2 from "../../assests/avatar2.jpg";
import avatar3 from "../../assests/avatar3.jpg";
import avatar4 from "../../assests/avatar4.jpg";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    avatar:avatar1,
    name:'avatar1',
    review:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia perferendis dolorum quis perspiciatis error cum corrupti, nesciunt placeat deleniti ipsum, voluptate at quidem, commodi dicta autem laborum natus inventore?'
  },
  {
    avatar:avatar2,
    name:'avatar2',
    review:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia perferendis dolorum quis perspiciatis error cum corrupti, nesciunt placeat deleniti ipsum, voluptate at quidem, commodi dicta autem laborum natus inventore?'
  },
  {
    avatar:avatar3,
    name:'avatar3',
    review:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia perferendis dolorum quis perspiciatis error cum corrupti, nesciunt placeat deleniti ipsum, voluptate at quidem, commodi dicta autem laborum natus inventore?'
  },
  {
    avatar:avatar4,
    name:'avatar4',
    review:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia perferendis dolorum quis perspiciatis error cum corrupti, nesciunt placeat deleniti ipsum, voluptate at quidem, commodi dicta autem laborum natus inventore?'
  },
]

const Testimonial = () => {
  return (
      <section id="testimonial">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src= {avatar} alt="Img1" />
            </div>
            <h5 className='client__name'>{name}</h5>
            {/* <p style={{fontSize: '0.8rem',color:'var(--color-light)',marginBottom:'0.8rem'}}>{comp}</p> */}
            <small className="client__review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
