import React from 'react';
import Image from "next/image";
import about1 from "../../../public/assets/img/about/about-img-3.jpg";
import about2 from "../../../public/assets/img/about/about-img-8.jpg";
import about3 from "../../../public/assets/img/about/about-img-9.jpg";

const WhyWeSection = () => {
    return (
        <section className="why-we bg-grey pt-120 pb-70 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6">
                        <div className="why-we-left mb-40 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">
                                <h5 className="section-subtitle mb-20">Why we are good</h5>
                                <h2 className="section-title mb-35">you can Get the best all design solutions</h2>
                                <p>There are many variations of passages of but the lipsum not free as you know majority
                                    have in some form, by injected humou or words which {`don't`}
                                    look even slightly believable of but the majority have suffered.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-we-tab mb-40" data-aos="fade-up-left" data-aos-duration="1000">
                            <ul className="nav why-tabs mb-30" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                        type="button" role="tab" aria-controls="home" aria-selected="true">Full
                                        satisfaction</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Expert
                                        Team</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                        type="button" role="tab" aria-controls="contact" aria-selected="false">Mission &
                                        Vissions</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p className="mb-30">Discover which SVG patterns we should avoid and which patterns are the most
                                        inclusive when comparing different combinations
                                        of OSs, browsers, and screen readers.</p>
                                    <div className="why-tab-wrapper">
                                        <div className="why-tab-img">
                                            <Image src={about1} style={{ width: "100%", height: "auto" }} alt="about img" />
                                        </div>
                                        <div className="why-tab-list fix">
                                            <ul>
                                                <li><i className="fal fa-check"></i>Nsectetur cing elit</li>
                                                <li><i className="fal fa-check"></i>Suspe ndisse suscipit sagittis leo</li>
                                                <li><i className="fal fa-check"></i>Entum estibulum dignissim posuere</li>
                                                <li><i className="fal fa-check"></i>Lorem Ipsum on the tend to repeat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <p className="mb-30">There are many variations of passages of but the majority have in some
                                        form, by injected humou or
                                        words which {`don't`} look even slightly believable of but the majority have suffered.</p>
                                    <div className="why-tab-wrapper">
                                        <div className="why-tab-img">
                                            <Image src={about2} style={{ width: "100%", height: "auto" }} alt="about img" />
                                        </div>
                                        <div className="why-tab-list fix">
                                            <ul>
                                                <li><i className="fal fa-check"></i>Entum estibulum dignissim posuere</li>
                                                <li><i className="fal fa-check"></i>Lorem Ipsum on the tend to repeat</li>
                                                <li><i className="fal fa-check"></i>Nsectetur cing elit</li>
                                                <li><i className="fal fa-check"></i>Suspe ndisse suscipit sagittis leo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <p className="mb-30">Mistakes. These cruel villains do not even stop at the beautiful world of
                                        software development. But although we
                                        cannot avoid making mistakes, we can learn to undo them!</p>
                                    <div className="why-tab-wrapper">
                                        <div className="why-tab-img">
                                            <Image src={about3} style={{ width: "100%", height: "auto" }} alt="about img" />
                                        </div>
                                        <div className="why-tab-list fix">
                                            <ul>
                                                <li><i className="fal fa-check"></i>Suspe ndisse suscipit sagittis leo</li>
                                                <li><i className="fal fa-check"></i>Nsectetur cing elit</li>
                                                <li><i className="fal fa-check"></i>Entum estibulum dignissim posuere</li>
                                                <li><i className="fal fa-check"></i>Lorem Ipsum on the tend to repeat</li>
                                            </ul>
                                        </div>
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

export default WhyWeSection;