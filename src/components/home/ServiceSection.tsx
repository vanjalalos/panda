import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import author from "../../../public/assets/img/service/service-author.png";

const ServiceSection = () => {
    return (
        <section className="service-area pt-120 pb-130" style={{ backgroundImage: `url(${'/assets/img/service/service-bg.jpg'})` }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-5 col-lg-6">
                        <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                            <h5 className="kservice-text-subtitle mb-15">All Categories List</h5>
                            <h2 className="kservice-text-title mb-40">The Services <br />We’re Offering</h2>
                            <p className="mb-45">There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour.</p>
                            <div className="kservice-author">
                                <div className="kservice-author-img mr-30">
                                    <Image src={author} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                </div>
                                <div className="kservice-author-sign">
                                    <span>Jessica Brown</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6">
                        <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">Website <br />Development</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-marketing"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">Graphic <br />Designing</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-profile"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">SEO & Content <br />writting</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-website"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">Digital <br />marketing</Link></h5>
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

export default ServiceSection;