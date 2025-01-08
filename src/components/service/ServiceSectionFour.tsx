import Link from 'next/link';
import React from 'react';

const ServiceSectionFour = () => {
    return (
        <section className="service-area service-area2 pt-115 pb-100" style={{ backgroundImage: `url(${'/assets/img/service/service-bg.jpg'})` }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-6 col-lg-6">
                        <div className="kservice-text mb-50 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <h5 className="kservice-text-subtitle mb-15">All Categories List</h5>
                            <h2 className="kservice-text-title mb-40">The Services <br />We’re Offering</h2>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-6">
                        <div className="kservice-text mb-50 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <p className="mb-45 mt-35 mt-md-0 mt-xs-0">There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour.</p>
                        </div>
                    </div>
                </div>
                <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-analytics"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details">Website <br />Development</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-marketing"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details">Graphic <br />Designing</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-profile"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details">SEO & Content <br />writting</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
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
        </section>
    );
};

export default ServiceSectionFour;