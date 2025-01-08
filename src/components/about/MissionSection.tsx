import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import mission from "../../../public/assets/img/about/about-img-6.jpg";

const MissionSection = () => {
    return (
        <section className="mission-area pt-120 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">
                                <h5 className="section-subtitle mb-20">get to know us</h5>
                                <h2 className="section-title mb-35">Our Mission is to become the best agency</h2>
                                <p>We dig deep to understand your business, target audience, and market landscape.</p>
                            </div>
                            <p className="mb-45">Our mission in digital marketing is to forge powerful connections between brands and their audiences in the dynamic and ever-evolving digital landscape. We are driven by a passion for creativity, and measurable results.
                            </p>
                            <div className="ktrust-btn">
                                <Link href="/service" className="theme-btn border-btn">Discover more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <Image src={mission} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            <div className="mission-img-text">
                                <h4>We’re committed to
                                    trusted Agency
                                </h4>
                                <Link href="/project">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;