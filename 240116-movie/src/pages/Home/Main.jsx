import React from 'react';
import { useEffect } from "react";
import { useStore } from "../../Store";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import '../../common.scss'
import styles from '../../swiper.module.scss';

function Main(props) {
    const {getList, list, poster} = useStore();
    useEffect(()=>{ getList() },[])
    console.log(list)
    
    return (
        <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={`mySwiper ${styles.swiper}`}>
        {
            list.map((item, i) => {
                if(i < 5){
                return <SwiperSlide key={item.id} className={styles.swiperSlide}
                style={{backgroundImage:`url(${poster + item.backdrop_path})`}}>
                    <div className={styles.mainContainer}>
                        <strong className={styles.mainTitle}>{item.original_title}</strong>
                        <p className={styles.mainOverview}>{item.overview}</p>
                        <div className={styles.mainBtns}>
                            <button className={styles.play}>
                            </button>
                            <button className={styles.info}>◎ Info</button>
                        </div>
                    </div>
                </SwiperSlide>
                }
            })
        }
      </Swiper>
    );
}

export default Main;