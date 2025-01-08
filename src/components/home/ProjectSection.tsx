"use client"

import React from 'react';
import { Navigation, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Link from 'next/link';
import projects from '@/data/project-data';
import Image from 'next/image';


const ProjectSection = () => {
    return (
        <section className="project-area bg-grey pt-115 pb-400 fix" >
            <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-title-wrapper mb-45">
                            <h5 className="section-subtitle mb-20">Our recent work</h5>
                            <h2 className="section-title">Work showcase</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="lol text-md-end">
                            <div className="project-button-prev slide-prev"><i className="far fa-long-arrow-left"></i></div>
                            <div className="project-button-next slide-next"><i className="far fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-active">
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
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        navigation={{
                            nextEl: '.project-button-next',
                            prevEl: '.project-button-prev',
                        }}
                    >
                        {projects && projects.slice(0, 7).map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="kproject swiper-slides">
                                    {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                    <div className="kproject-text">
                                        <div className="kproject-text-content">
                                            <span>{item.tag}</span>
                                            <h5 className="kproject-text-title"><Link href={`/project-details/${item.id}`}>{item.title}</Link></h5>
                                        </div>
                                        <div className="kproject-text-icon">
                                            <Link href={`/project-details/${item.id}`}><i className="far fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;