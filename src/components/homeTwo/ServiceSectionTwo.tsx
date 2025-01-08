import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import service1 from "../../../public/assets/img/service/service-img-1.jpg";
import service2 from "../../../public/assets/img/service/service-img-2.jpg";
import service3 from "../../../public/assets/img/service/service-img-3.jpg";
import service4 from "../../../public/assets/img/service/service-img-4.jpg";

const ServiceSectionTwo = () => {
    return (
        <section className="service-2 pt-75 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center mb-45">
                            <h5 className="section-subtitle mb-20">Services providing</h5>
                            <h2 className="section-title">What we’re offering</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".2s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details">Website <br />Development</Link></h4>
                                <i className="flaticon-stats"></i>
                            </div>
                            <div className="kservice-img-2">
                                <Image src={service1} style={{ width: "100%", height: "auto" }} alt="service img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".4s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details">Graphic <br />designing</Link></h4>
                                <i className="flaticon-digital-marketing"></i>
                            </div>
                            <div className="kservice-img-2">
                                <Image src={service2} style={{ width: "100%", height: "auto" }} alt="service img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details">SEO & Content <br />writting</Link></h4>
                                <i className="flaticon-website"></i>
                            </div>
                            <div className="kservice-img-2">
                                <Image src={service3} style={{ width: "100%", height: "auto" }} alt="service img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration="0.8s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details">digital <br />marketing</Link></h4>
                                <i className="flaticon-idea"></i>
                            </div>
                            <div className="kservice-img-2">
                                <Image src={service4} style={{ width: "100%", height: "auto" }} alt="service img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionTwo;