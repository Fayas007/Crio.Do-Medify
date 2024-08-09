import React from "react";
import styles from "./Carousel.module.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Carousel =({images}) => {
  return (
    <Swiper
      // install Swiper modules
      className={styles.container}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* <SwiperSlide><img src={image} className={styles.image}/></SwiperSlide>
      <SwiperSlide><img src={image} className={styles.image}/></SwiperSlide>
      <SwiperSlide><img src={image} className={styles.image}/></SwiperSlide>
      <SwiperSlide><img src={image} className={styles.image}/></SwiperSlide> */}
      {images.map(image => <SwiperSlide><img src={image}  alt="card_image"/></SwiperSlide>)}
     
    </Swiper>
  );
};


export default Carousel;