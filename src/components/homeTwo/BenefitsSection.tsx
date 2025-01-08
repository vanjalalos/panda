"use client"

import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import benefit from "../../../public/assets/img/about/about-img-5.jpg";

const BenefitsSection = () => {
    const percentage = 66;
    return (
        <section className="benefits-area position-relative pt-120">
            <div className="benefit-img mb-30">
                <Image src={benefit} style={{ width: "100%", height: "auto" }} alt="benefit-img" />
                <div className="benefit-img-level">
                    <span>3600 Projects are completed</span>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="benefit-text mb-30">
                            <div className="section-title-wrapper mb-45">
                                <h5 className="section-subtitle mb-20">our benefits</h5>
                                <h2 className="section-title">We’re here to grow your business</h2>
                            </div>
                            <h5 className="benefit-subtitle">Outsourced digital Businesses</h5>
                            <p className="mb-45"> Learn about the importance of creating seamless and intuitive digital experiences to engage users and drive conversions.</p>
                            <div className="row mt-40">
                                <div className="col-md-6">
                                    <div className='progress_circle mb-10'>
                                        <div className="progress blue">
                                            <VisibilitySensor>
                                                {({ isVisible }:any) => {
                                                    const percentage = isVisible ? 90 : 0;
                                                    return (
                                                        <CircularProgressbar
                                                            value={percentage}
                                                            text={`${percentage}%`}
                                                        />
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                        <h5 className="afford">Quality of <br />Work</h5>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='progress_circle mb-10'>
                                        <div className="progress blue">
                                            <VisibilitySensor>
                                                {({ isVisible }:any) => {
                                                    const percentage = isVisible ? 45 : 0;
                                                    return (
                                                        <CircularProgressbar
                                                            value={percentage}
                                                            text={`${percentage}%`}
                                                        />
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                        <h5 className="afford">Affordable <br />Cost</h5>
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

export default BenefitsSection;