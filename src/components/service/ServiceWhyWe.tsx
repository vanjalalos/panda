import React from 'react';
import Image from "next/image";
import serviceWe from "../../../public/assets/img/about/about-img-7.jpg";

const ServiceWhyWe = () => {
    return (
        <section className="why-we bg-grey pt-120 pb-125 pb-md-110 position-relative">
            <div className="common-shape-wrapper wow slideInLeft animated">
                <div className="common-shape-inner wow slideInleft animated"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="provide-thumb">
                            <Image src={serviceWe} style={{ width: "100%", height: "auto" }} alt="service-img" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="provide-content">
                            <div className="section-title-wrapper mb-25">
                                <h5 className="section-subtitle mb-20">All Categories List</h5>
                                <h2 className="section-title mb-35">We provide a best <br />
                                    services
                                </h2>
                                <p>There are many variations of pass of lorem ipsum available but the majority have suffered alteration in some form.</p>
                            </div>
                            <p>Injected humour randomised words which {`don't`} look even slightly believable you need to be sure there {`isn't`} anything embarrassing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceWhyWe;