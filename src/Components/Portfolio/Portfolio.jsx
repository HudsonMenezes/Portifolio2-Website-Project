import React, { useContext } from "react";
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import { themeContext } from "../../Context";
import Projeto1 from "../../img/Projeto1.png"
import Projeto2 from "../../img/Projeto2.png"
import Projeto3 from "../../img/Projeto3.png"
import Projeto4 from "../../img/Projeto4.png"
import Projeto5 from "../../img/Projeto5.png"
import Projeto6 from "../../img/Projeto6.png"

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>

      {/* Heading */}
      <span style={{color: darkMode?'white': ''}}>Projetos Recentes </span>
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
          <img src={Projeto1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Projeto2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Projeto3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Projeto4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Projeto5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Projeto6} alt="" />
        </SwiperSlide>


      </Swiper>
    </div>
  )
}

export default Portfolio