"use client"

import Link from 'next/link';
import React from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import projects from '@/data/project-data';
import Image from 'next/image';

const RecentProject = () => {
    return (
        <section className="project-2 pt-115 pb-90 fix">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title-wrapper mb-50 text-center">
                            <h5 className="section-subtitle mb-20">Our recent work</h5>
                            <h2 className="section-title">More similar work</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        modules={[A11y, Autoplay]}
                        spaceBetween={30}
                        loop={true}
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
                                slidesPerView: 3,
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                    >
                        {projects && projects.slice(7, 13).map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="kproject kproject-2 mb-30">
                                    {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                    <div className="kproject-text kproject-text-2">
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

export default RecentProject;