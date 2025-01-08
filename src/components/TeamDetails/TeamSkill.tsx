import React from 'react';
import Image from "next/image";
import skill from "../../../public/assets/img/team/team-img-9.jpg";

const TeamSkill = () => {
    return (
        <section>
            <div className="bd-skill__area pt-100 pb-40">
                <div className="container small-container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-skill__progress mb-60 pr-50">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">Personal Skills</h5>
                                    <h2 className="section-title mb-35">largest business <br />experts</h2>
                                </div>
                                <div className="skill--content">
                                    <div className="skill__wrapper mb-20">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Design & Servicing</h5>
                                            <span>75%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                    <div className="skill__wrapper mb-20">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Support & Productivity</h5>
                                            <span>88%</span>
                                        </div>
                                        <div className="progress progress-two">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                    <div className="skill__wrapper">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Troubleshooting</h5>
                                            <span>80%</span>
                                        </div>
                                        <div className="progress progress-two">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-skill__thumb w-img mb-60">
                                <Image src={skill} style={{ width: "100%", height: "auto" }} alt="skill-thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSkill;