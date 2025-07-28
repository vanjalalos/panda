import Link from 'next/link';
import React from 'react';
import TeamAchivement from './TeamAchivement';
import TeamSkill from './TeamSkill';
import { idType } from '@/interFace/interFace';
import teams from '@/data/team-data';
import Image from 'next/image';

const TeamDetailsContent = ({ id }: idType) => {
    const team = teams.find(item=> item.id == id)
    return (
        <>
            <section className="founder__area pt-120 pb-40">
                <div className="container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="team__founder-thumb w-img mb-60">
                                {team?.img && <Image src={team.img} style={{ width: "100%", height: "auto" }} alt="project image" />}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team__founder-main mb-60">
                                <div className="section__title-wrapper mb-35">
                                    <div className="section-title-wrapper">
                                        <h5 className="section-subtitle mb-20">{team?.designation}</h5>
                                        <h2 className="section-title mb-35">{team?.title}</h2>
                                    </div>
                                    <p className="paragraph-2">Bojan veruje u ličan pristup i iskreno partnerstvo sa svakim klijentom. Posvećen je tome da svako rešenje bude prilagođeno i jasno, kako bi poslovanje bilo bezbrižno i uspešno.</p>
                                </div>
                                <div className="team__founder-info">
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Broj telefona</span>
                                            <h4 className="contact"><a href="tel:926668880000">+ 387 65 314 131</a></h4>
                                        </div>
                                    </div>
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Email Address</span>
                                            <h4 className="contact"><a href="mailto:office@panda.ba">office@panda.ba</a></h4>
                                        </div>
                                    </div>
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Adresa</span>
                                            <h4 className="contact">Bulevar vojvode Stepe Stepanovića 59, 78000 Banja Luka, Bosna i Hercegovina</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__founder-btn">
                                    <Link href="/contact" className="theme-btn border-btn">Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container small-container">
                <div className="hr-1"></div>
            </div>

            <TeamSkill />

            <div className="container">
                <div className="hr-1"></div>
            </div>

            <TeamAchivement />
        </>
    );
};

export default TeamDetailsContent;