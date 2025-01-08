import React from 'react';
import Image from "next/image";
import team1 from "../../../public/assets/img/team/team-img-10.jpg";
import team2 from "../../../public/assets/img/team/01.jpg";
import team3 from "../../../public/assets/img/team/02.jpg";
import team4 from "../../../public/assets/img/team/03.jpg";

const TeamAchivement = () => {
    return (
        <section className="archivement__area pt-100 pb-40">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="archivement-wrapper mb-60">
                            <div className="archivement__thumb w-img">
                                <Image src={team1} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="archivement__box mb-30">
                            <div className="archivement__title">
                                <h3>Great Archivements</h3>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliq
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
                                    derit in voluptate velit esse cillum dolor.</p>
                            </div>
                            <div className="archivement__thumb-wrapper">
                                <div className="row gx-4">
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <Image src={team2} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <Image src={team3} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <Image src={team4} style={{ width: "100%", height: "auto" }} alt="img not found" />
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

export default TeamAchivement;