"use client"

import React from 'react';
import { A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'

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
                            <h5 className="section-subtitle mb-20">iskustva klijenata</h5>
                            <h2 className="section-title mb-35">Šta kažu naši klijenti?</h2>
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
                            watchSlidesProgress={true}
                            watchOverflow={true}
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
                            <SwiperSlide style={{ height: "auto", display: "flex" }}>
                                <div className="ktestimonial mb-30 swiper-slides" style={{ height: "400px", display: "flex", flexDirection: "column" }}>
                                    <div 
                                        className="ktestimonial-text"
                                        style={{
                                            border: "2px solid #e9ebed",
                                            borderBottom: "18px solid #e9ebed",
                                            padding: "50px 60px 80px 60px",
                                            transition: "border-color 0.3s ease",
                                            height: "330px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#0cb85a";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#e9ebed";
                                            e.currentTarget.style.borderBottomColor = "#e9ebed";
                                        }}
                                    >
                                        <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.9, marginBottom: 0 }}>
                                            Veoma sam zadovoljan uslugom, sve je urađeno profesionalno i tačno. Preporučujem ih svakome ko želi bezbrižno poslovanje.
                                        </p>
                                    </div>
                                    <div className="ktestimonial-author" style={{ paddingLeft: "60px", marginTop: "-60px" }}>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Nikola Nikolić</h5>
                                            <span className="uppercase" style={{ color: "#0cb85a" }}>Klijent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "auto", display: "flex" }}>
                                <div className="ktestimonial mb-30 swiper-slides" style={{ height: "400px", display: "flex", flexDirection: "column" }}>
                                    <div 
                                        className="ktestimonial-text"
                                        style={{
                                            border: "2px solid #e9ebed",
                                            borderBottom: "18px solid #e9ebed",
                                            padding: "50px 60px 80px 60px",
                                            transition: "border-color 0.3s ease",
                                            height: "330px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#0cb85a";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#e9ebed";
                                            e.currentTarget.style.borderBottomColor = "#e9ebed";
                                        }}
                                    >
                                        <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.9, marginBottom: 0 }}>
                                            Izuzetno ljubazan tim koji razume potrebe klijenta. Računovodstvo nam je sada jednostavno i pregledno.
                                        </p>
                                    </div>
                                    <div className="ktestimonial-author" style={{ paddingLeft: "60px", marginTop: "-60px" }}>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Ana Anić</h5>
                                            <span className="uppercase" style={{ color: "#0cb85a" }}>Klijent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "auto", display: "flex" }}>
                                <div className="ktestimonial mb-30 swiper-slides" style={{ height: "400px", display: "flex", flexDirection: "column" }}>
                                    <div 
                                        className="ktestimonial-text"
                                        style={{
                                            border: "2px solid #e9ebed",
                                            borderBottom: "18px solid #e9ebed",
                                            padding: "50px 60px 80px 60px",
                                            transition: "border-color 0.3s ease",
                                            height: "330px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#0cb85a";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#e9ebed";
                                            e.currentTarget.style.borderBottomColor = "#e9ebed";
                                        }}
                                    >
                                        <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.9, marginBottom: 0 }}>
                                            Vrlo pouzdani i precizni u svom radu. Uvek dostupni za savete i pojašnjenja kada god je potrebno.
                                        </p>
                                    </div>
                                    <div className="ktestimonial-author" style={{ paddingLeft: "60px", marginTop: "-60px" }}>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Vanja Ðurić</h5>
                                            <span className="uppercase" style={{ color: "#0cb85a" }}>Klijent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "auto", display: "flex" }}>
                                <div className="ktestimonial mb-30 swiper-slides" style={{ height: "400px", display: "flex", flexDirection: "column" }}>
                                    <div 
                                        className="ktestimonial-text"
                                        style={{
                                            border: "2px solid #e9ebed",
                                            borderBottom: "18px solid #e9ebed",
                                            padding: "50px 60px 80px 60px",
                                            transition: "border-color 0.3s ease",
                                            height: "330px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#0cb85a";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#e9ebed";
                                            e.currentTarget.style.borderBottomColor = "#e9ebed";
                                        }}
                                    >
                                        <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.9, marginBottom: 0 }}>
                                            Odlična saradnja i brza komunikacija. Zahvaljujući njima sve finansije su nam uredne i transparentne.
                                        </p>
                                    </div>
                                    <div className="ktestimonial-author" style={{ paddingLeft: "60px", marginTop: "-60px" }}>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Marko Marković</h5>
                                            <span className="uppercase" style={{ color: "#0cb85a" }}>Klijent</span>
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