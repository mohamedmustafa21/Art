import React from 'react'
import './events.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



import img1 from '../assets/pexels-photo-9019132.jpeg'
import img2 from '../assets/slider/pexels-photo-2831624.jpg'

import img3 from '../assets/sliderrr1photo-3767669.jpeg'
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Events() {


  return (
    <div className='section2 mb-5'>
      <div className='title'>
        <h2 className='title-sec2  text-center mb-5  '>Latest Events</h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={200}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                <SwiperSlide >
                  
                  <div className='card-contain'>
                      <img src={img3} alt="" />
                    </div>
                    <div className="card-info text-white  ">
                      <p>Lorem ipsum dolor sit.</p>
                      <h4>Great Things You Don't Know About it</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ex voluptates dolore rem.
                      </p>
                        <p><i className="fas fa-location-arrow"></i> Adress : NY-City</p>
                        <p><i className="fas fa-phone"></i> Phone : +(123) 456 789</p>
                        <button className='btn btn-info btn-inter'>See More</button>
                      
                    </div>
                    
                    </SwiperSlide>
        <SwiperSlide>
        <div className='card-contain'>
                      <img src={img1} alt="" />
                    </div>
                    <div className="card-info text-white ">
                      <p>Lorem ipsum dolor sit.</p>
                      <h4>Great Things You Don't Know About it</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ex voluptates dolore rem.
                      </p>
                      <p><i className="fas fa-location-arrow"></i> Adress : NY-City</p>
                        <p><i className="fas fa-phone"></i> Phone : +(123) 456 789</p>
                        <button className='btn btn-info btn-inter'>See More</button>
                      
                    </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='card-contain'>
                      <img src={img2} alt="" />
                    </div>
                    <div className="card-info text-white ">
                      <p>Lorem ipsum dolor sit.</p>
                      <h4>Great Things You Don't Know About it</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ex voluptates dolore rem.
                      </p>
                      <p><i className="fas fa-location-arrow"></i> Adress : NY-City</p>
                        <p><i className="fas fa-phone"></i> Phone : +(123) 456 789</p>
                        <button className='btn btn-info btn-inter'>See More</button>
                      
                    </div>
          </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Events