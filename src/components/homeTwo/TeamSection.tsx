"use client"

import React from 'react';
import { A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import Link from 'next/link';
import teams from '@/data/team-data';
import Image from 'next/image';

const TeamSection = () => {
    return (
        <section className="team-area pt-115 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center mb-50">
                            <h5 className="section-subtitle mb-20">professional people</h5>
                            <h2 className="section-title mb-35">Meet the team</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="team-space">
                    <div className="team-active">
                        <div>
                            <Swiper
                                modules={[A11y, Autoplay]}
                                spaceBetween={30}
                                loop={true}
                                speed={1500}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    1400: {
                                        slidesPerView: 4
                                    }
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true
                                }}
                            >
                                {teams && teams.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="kteam swiper-slides mb-30">
                                            <div className="kteam-img">
                                                {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                                <div className="kteam-img-social">
                                                    {item.socialIcons && item.socialIcons.map((social) => (
                                                        <Link href={social.url} target="_blank" key={social.id}><i className={social.icon}></i></Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="kteam-text text-center">
                                                <h4 className="kteam-title"><Link href={`/team-details/${item.id}`}>{item.title}</Link></h4>
                                                <span className="uppercase">{item.designation}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;