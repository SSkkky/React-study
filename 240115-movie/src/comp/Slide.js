import React from 'react';
import { useStore } from '../Store'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../slide.scss";

function Slide(props) {

    const { popular, thumb, poster } = useStore();

    return (
        <Swiper className="mySwiper">
            {
                popular.map((obj) => {
                    return <SwiperSlide style={{ backgroundImage: `url(${poster + obj.backdrop_path})` }}>
                        <figure className="main-figure">
                            <img src={thumb + obj.poster_path} />
                            <figcaption>
                                <h2 className="title">{obj.original_title}</h2>
                                <p className="overview">{obj.overview}</p>
                                <div className="slide-btn">
                                    <button className="Watch-btn">Watch now</button>
                                    <button className="trailer-btn">Watch trailer</button>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
}

export default Slide;