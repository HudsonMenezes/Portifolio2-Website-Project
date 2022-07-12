import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

function Portfolio() {
  return (
    <div className="portfolio">

      {/* Heading */}
      <span>Projetos Recentes</span>
      <span>Portfolio</span>

      {/*  Slider */}
      <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true}}
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true} 
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>


      </Swiper>
    </div>
  )
}

export default Portfolio