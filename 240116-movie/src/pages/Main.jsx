import React from 'react';
import { useEffect } from "react";
import { useStore } from "../Store";
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.scss';
import { Autoplay } from 'swiper/modules';

import '../common.scss'

function Main(props) {
    const {getList, list, poster, thumb} = useStore();
    useEffect(()=>{ getList() },[])
    console.log(list)
    
    return (
        <>
        <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            list.map((item)=>{
                return <SwiperSlide key={item.id}
                style={{backgroundImage:`url(${poster + item.backdrop_path})`}}>
                    <div className="main-container">
                        <strong className='main-title'>{item.original_title}</strong>
                        <p className='main-overview'>{item.overview}</p>
                        <div className='main-btns'>
                            <button className='play'>▶ Play</button>
                            <button className='info'>◎ Info</button>
                        </div>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>
      </>
    );
}

export default Main;