"use client"

import React from 'react';
import { Navigation, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Link from 'next/link';
import blogs from '@/data/blog-data';
import Image from 'next/image';

const BlogCommonSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={30}
                loop={true}
                speed={1500}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 2,
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                navigation={{
                    nextEl: '.blog-button-next',
                    prevEl: '.blog-button-prev',
                }}
            >
                {blogs && blogs.slice(0, 6).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="kblog swiper-slides">
                            <div className="kblog-img">
                                <Link href={`/blog-details/${item.id}`}>
                                    {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                </Link>
                                <span>{item.date}</span>
                            </div>
                            <div className="kblog-text">
                                <div className="kblog-meta">
                                    <Link href={`/blog-details/${item.id}`}><i className="fal fa-user-circle"></i> {item.user}</Link>
                                    <Link href={`/blog-details/${item.id}`}><i className="fal fa-comments"></i> {item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link>
                                </div>
                                <h3 className="kblog-text-title mb-20">
                                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                                </h3>
                                <div className="kblog-text-link">
                                    <Link href={`/blog-details/${item.id}`}>{item.button} <i className="far fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogCommonSlider;