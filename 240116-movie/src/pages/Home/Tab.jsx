import React from 'react';
import { useEffect } from "react";
import { useStore } from "../../Store";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '../../tab.module.scss';

function Tab(props) {
    const {getList, list, thumb} = useStore();
    useEffect(()=>{ getList() },[])

    return (
        <div className={styles.mainTab}>
          <div className='mainTab01'>
        <h3>인기상영작</h3>
        <Swiper
          slidesPerView={6.5}
          spaceBetween={10}
          className={`mySwiper ${styles.swiper}`}
        >
          {
            list.map((item) => {
                return <SwiperSlide
                key={item.id}
                className={styles.swiperSlide}>
                    <img src={thumb + '200/' + item.poster_path} alt="" />
                </SwiperSlide>
            })
        }
        </Swiper>
          </div>
          <div className='mainTab02'>
        <h3>2번상영작</h3>
        <Swiper
          slidesPerView={6.5}
          spaceBetween={10}
          className={`mySwiper ${styles.swiper}`}
        >
          {
            list.map((item) => {
                return <SwiperSlide
                key={item.id}
                className={styles.swiperSlide}>
                    <img src={thumb + '200/' + item.poster_path} alt="" />
                </SwiperSlide>
            })
        }
        </Swiper>
          </div>
          <div className='mainTab03'>
        <h3>3번상영작</h3>
        <Swiper
          slidesPerView={6.5}
          spaceBetween={10}
          className={`mySwiper ${styles.swiper}`}
        >
          {
            list.map((item) => {
                return <SwiperSlide
                key={item.id}
                className={styles.swiperSlide}>
                    <img src={thumb + '200/' + item.poster_path} alt="" />
                </SwiperSlide>
            })
        }
        </Swiper>
          </div>
          <div className='mainTab04'>
        <h3>4번상영작</h3>
        <Swiper
          slidesPerView={6.5}
          spaceBetween={10}
          className={`mySwiper ${styles.swiper}`}
        >
          {
            list.map((item) => {
                return <SwiperSlide
                key={item.id}
                className={styles.swiperSlide}>
                    <img src={thumb + '200/' + item.poster_path} alt="" />
                </SwiperSlide>
            })
        }
        </Swiper>
          </div>
      </div>
    );
}

export default Tab;