import React from 'react';
import Image from "next/image";
import introBg from "../../../public/assets/img/about/intro-bg.png";
import about from "../../../public/assets/img/about/about-img-4.jpg";
import author from "../../../public/assets/img/service/service-author.png";

const IntroductionSection = () => {
    return (
        <section className="intro-area z-index fix">
            <Image src={introBg} className='intro-bg img-fluid' style={{ width: "auto", height: "auto" }} alt="benefit-img" />
            <div className="intro-space pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-img mb-40" data-aos="fade-right" data-aos-duration="1000">
                                <Image src={about} style={{ width: "100%", height: "auto" }} alt="about-img" />
                                <div className="kintro-img-text">
                                    <div className="kintro-img-text-icon mr-20">
                                        <i className="flaticon-reaction"></i>
                                    </div>
                                    <h5>Trusted by <br />8800 Clients</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-text ml-70" data-aos="fade-left" data-aos-duration="1000">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">Our introduction</h5>
                                    <h2 className="section-title mb-35">largest business <br />experts</h2>
                                    <p>Discover how digital agencies assist businesses in setting up and optimizing e-commerce platforms for online selling.</p>
                                </div>
                                <p className="mb-45">Explore how digital agencies help businesses establish and maintain a consistent and impactful online brand presence.</p>
                                <div className="skill--content">
                                    <div className="skill__wrapper mb-20">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Web Design</h5>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                    <div className="skill__wrapper mb-60">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Web Development</h5>
                                            <span>68%</span>
                                        </div>
                                        <div className="progress progress-two">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="kservice-author">
                                    <div className="kservice-author-img mr-30">
                                        <Image src={author} style={{ width: "100%", height: "auto" }} alt="author-img" />
                                    </div>
                                    <div className="kservice-author-sign kservice-author-sign-2">
                                        <span>Jessica Brown</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;