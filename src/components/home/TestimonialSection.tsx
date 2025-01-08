"use client"

import React from 'react';
import { A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import Image from "next/image";
import testimonial1 from "../../../public/assets/img/testimonial/testimonial-img-1.jpg";
import testimonial2 from "../../../public/assets/img/testimonial/testimonial-img-2.jpg";
import testimonial3 from "../../../public/assets/img/testimonial/testimonial-img-3.jpg";
import testimonial4 from "../../../public/assets/img/testimonial/testimonial-img-4.jpg";
import testimonial5 from "../../../public/assets/img/testimonial/testimonial-img-5.jpg";

interface classType {
    testimonial_space: string;
}

const TestimonialSection = ({ testimonial_space }: classType) => {
    return (
        <section className={`${testimonial_space ? testimonial_space : 'testimonial-area pt-115 pb-85'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrapper text-center mb-45">
                            <h5 className="section-subtitle mb-20">client testimonials</h5>
                            <h2 className="section-title mb-35">What they say?</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-active">
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
                                768: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 3
                                }
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                        >
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>I was very impresed by the kimox service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <Image src={testimonial1} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Jessica Brown</h5>
                                            <span className="uppercase">Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Reliable accessible UI components: :focus styles, content sliders, dark mode, date pickers, navigation, modals, radio buttons Neque porro est qui.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <Image src={testimonial2} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Mike Hardson</h5>
                                            <span className="uppercase">Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Useful CSS tools for animations, border-radius, CSS shadows, cubic-bezier curves, easing gradients, filters, placeholders, CSS Grid.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <Image src={testimonial3} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Sarah Albert</h5>
                                            <span className="uppercase">Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>I was very impresed by the kimox service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <Image src={testimonial4} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Melinda Brown</h5>
                                            <span className="uppercase">Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Core Web Vitals, CrUX, Lighthouse, performance budgets, CSS & JavaScript performance, assets optimizations, build optimizations.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <Image src={testimonial5} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Andrew Tye</h5>
                                            <span className="uppercase">Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;