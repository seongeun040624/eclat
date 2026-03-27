import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../style/hero.scss'

import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Hero = () => {
    return (
        <div className='hero'>
            <Swiper 
                loop={true}
                effect="fade"   // 핵심
                fadeEffect={{ crossFade: true, speed:1000 }} // 부드럽게 겹치면서 전환
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="heroSwip"
            >
                <SwiperSlide><img src="/img/s1.jpg" alt="slideImg1" /></SwiperSlide>
                <SwiperSlide><img src="/img/s2.jpg" alt="slideImg2" /></SwiperSlide>
                <SwiperSlide><img src="/img/s3.jpg" alt="slideImg3" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;