"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, } from 'swiper';
import 'swiper/css/bundle'
import brands from '@/data/brand-data';
import Link from 'next/link';
import Image from 'next/image';

interface classType {
    brand_space: string;
}

const BrandSection = ({ brand_space }: classType) => {
    return (
        <div className={`${brand_space ? brand_space : 'brand-area pt-100 pb-100'}`}>
            <div className="container">
                <div className="brand-active">
                    <div className="align-items-center">
                        <Swiper
                            modules={[A11y, Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            speed={1500}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                550: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                }
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true
                            }}
                        >
                            {brands && brands.slice(0, 6).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="brand-wrapper swiper-slides wow fadeInUp" data-wow-delay={item.delay} data-swiper-autoplay="10000">
                                        <Link href="#">{item.img && <Image src={item.img} style={{ width: "auto", height: "auto" }} alt="img not found" />}</Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;