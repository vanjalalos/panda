"use client"

import React from 'react';
import { Pagination, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

import slideBg1 from "../../../public/assets/img/slider/slider-1.jpg";
import slideBg2 from "../../../public/assets/img/slider/slider-2.jpg";
import slideBg3 from "../../../public/assets/img/slider/slider-3.jpg";
import shape1 from "../../../public/assets/img/slider/slider-shape-1.png";
import shape2 from "../../../public/assets/img/slider/slider-shape-2.png";
import Image from 'next/image';
import { heroType } from '@/interFace/interFace';

const hero_slider:heroType[] = [
  {
    id: 1,
    slideBg: slideBg1,
    title: <>Web Design <br />Agency</>,
    subTitle: "Welcome to digital agency",
    btn: "Discover more",
    shapeA: shape1,
    shapeB: shape2,
  },
  {
    id: 2,
    slideBg: slideBg2,
    title: <>Minimalist <br />Design</>,
    subTitle: "Welcome to digital agency",
    btn: "Discover more",
    shapeA: shape1,
    shapeB: shape2,
  },
  {
    id: 3,
    slideBg: slideBg3,
    title: <>Mobile First <br />Design</>,
    subTitle: "Welcome to digital agency",
    btn: "Discover more",
    shapeA: shape1,
    shapeB: shape2,
  }
]

const HeroSection = () => {
  return (
    <section className="slider-area fix position-relative">
      <div className="slider-active">
        <div>
          <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true
            }}
            pagination={{ clickable: true, }}
          >
            {hero_slider && hero_slider.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="single-slider slider-height swiper-slides" data-swiper-autoplay="10000">
                  <div className="slide-bg" style={{ backgroundImage: `url(${item.slideBg.src})` }}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="kslider z-index">
                          <h5 className="kslider--subtitle mb-25">{item.subTitle}</h5>
                          <h2 className="kslider--title mb-40">{item.title}</h2>
                          <div className="kslider--btn">
                            <Link href="/service" className="theme-btn">{item.btn}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-shape shape-1">{item.shapeA && <Image src={item.shapeA} style={{ width: "100%", height: "auto" }} alt="img not found" />}</div>
                  <div className="slide-shape shape-2">{item.shapeB && <Image src={item.shapeB} style={{ width: "100%", height: "auto" }} alt="img not found" />}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="slider-paginations slide-dots"></div>
      </div>
    </section>
  );
};

export default HeroSection;
