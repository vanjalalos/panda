import React from 'react';
import ServiceFaqSection from './ServiceFaqSection';
import ServiceDetailsSidebar from './ServiceDetailsSidebar';
import Image from "next/image";
import service1 from "../../../public/assets/img/service/service-img-5.jpg";
import service2 from "../../../public/assets/img/service/service-img-6.jpg";

const ServiceDetailsContent = () => {
    return (
        <section className="service-detals pt-120 pb-100 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="develop-wrapper">
                            <div className="develop-thumb">
                                <Image src={service1} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="develop-content">
                                <h3 className="service-title">Web Development</h3>
                                <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>

                        <div className="planning-wrapper pt-50">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="plan-thumb mb-md-40 mb-xs-40">
                                        <Image src={service2} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="plan-content">
                                        <h4>planning & strategy</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <ul>
                                            <li><i className="fal fa-check"></i>Research beyond the business plan</li>
                                            <li><i className="fal fa-check"></i>Marketing options and rates</li>
                                            <li><i className="fal fa-check"></i>The ability to turnaround consulting</li>
                                            <li><i className="fal fa-check"></i>Customer engagement matters</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">
                                        <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceFaqSection />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <ServiceDetailsSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsContent;