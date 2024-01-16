import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Store'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../slide.scss";
import { Pagination } from 'swiper/modules';

function Trend({ cate, type }) {
    const { data, thumb, getData } = useStore();
    const Navigate = useNavigate();

    useEffect(() => {
        getData(cate, type)
    }, [])

    if (!data[`${type}_${cate}`].length) return;

    let list = null;
    if (cate == 'movie' && type == 'popular') {
        list = 'popular movie'
    }

    return (
        <div className="menu-section Trend">
            <div className="header-cont">
                <h3>
                    {list}
                </h3>
                <button>view more</button>
            </div>
            <Swiper
                slidesPerView={6.5}
                spaceBetween={10}
                className="ms-Swiper"
            >
                {
                    data[`${type}_${cate}`].map((obj) => {
                        return <SwiperSlide key={obj.id}>
                            <figure className="ms-figure" onClick={() => {
                                Navigate(`/${cate}/${obj.id}`)
                            }}>
                                <img src={thumb + '200/' + obj.poster_path} />
                                <figcaption>
                                    <h2 className="ms-title">{obj.original_title}</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}

export default Trend;