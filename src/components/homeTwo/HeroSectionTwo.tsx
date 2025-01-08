"use client"

import React from 'react';
import { Pagination, A11y, Autoplay } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Link from 'next/link';

const HeroSectionTwo = () => {
    return (
        <section className="slider-area fix position-relative">
            <div className="slider-active slider-active-2 swiper-container">
                <div className="swiper-wrapper">
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
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="single-slider slider-height-2 swiper-slides d-flex align-items-center" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: `url(${'/assets/img/slider/slider-3.jpg'})` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider kslider-2 z-index text-center">
                                                <h4 className="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">Welcome to digital agency</h4>
                                                <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">Digital Marketing <br />Business</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service" className="theme-btn">Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-shape-wrapper common-shape-wrapper2">
                                    <div className="common-shape-inner common-shape-inner2"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-slider slider-height-2 swiper-slides d-flex align-items-center" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: `url(${'/assets/img/slider/slider-2.jpg'})` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider kslider-2 z-index text-center">
                                                <h4 className="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">Welcome to digital agency</h4>
                                                <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">Digital Marketing <br />Strategies</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service" className="theme-btn">Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-shape-wrapper common-shape-wrapper2">
                                    <div className="common-shape-inner common-shape-inner2"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-slider slider-height-2 swiper-slides d-flex align-items-center" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: `url(${'/assets/img/slider/slider-1.jpg'})` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider kslider-2 z-index text-center">
                                                <h4 className="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">Welcome to digital agency</h4>
                                                <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">Content Creation <br />Strategy</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service" className="theme-btn">Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-shape-wrapper common-shape-wrapper2">
                                    <div className="common-shape-inner common-shape-inner2"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="slider-paginations slide-dots"></div>
            </div>
        </section>
    );
};

export default HeroSectionTwo;