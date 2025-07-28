"use client";

import React from "react";
import Link from "next/link";
import teams from "@/data/team-data";
import Image from "next/image";

const AboutTeamSection = () => {
  // Get the first team member for display
  const team = teams[0];

  return (
    <section className="founder__area pt-120 pb-90">
      <div className="container">
        <div className="section-title-wrapper text-center mb-50">
          <h5 className="section-subtitle mb-20">Tu sam za vas</h5>
          <h2 className="section-title mb-35">Lično i posvećeno svakom klijentu</h2>
        </div>
        
        <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
          <div className="col-lg-6">
            <div className="team__founder-thumb w-img mb-60">
              {team?.img && <Image src={team.img} style={{ width: "100%", height: "auto" }} alt="team member" />}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team__founder-main mb-60">
              <div className="section__title-wrapper mb-35">
                <div className="section-title-wrapper">
                  {/* <h5 className="section-subtitle mb-20">{team?.designation}</h5> */}
                  <h2 className="section-title mb-35" style={{ color: "#0cb85a" }}>{team?.title}</h2>
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
                    <h4 className="contact"><a href="tel:+38766200002">+ 387 66 200 002</a></h4>
                  </div>
                </div>
                <div className="team__founder-item">
                  <div className="team__founder-item-icon">
                    <i className="fas fa-envelope-open"></i>
                  </div>
                  <div className="team__founder-text">
                    <span className="title">Email adresa</span>
                    <h4 className="contact"><a href="mailto:bojan@panda.ba">bojan@panda.ba</a></h4>
                  </div>
                </div>
                <div className="team__founder-item">
                  <div className="team__founder-item-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="team__founder-text">
                    <span className="title">Adresa</span>
                    <h4 className="contact">Bulevar vojvode Stepe Stepanovića 59, Banja Luka</h4>
                  </div>
                </div>
              </div>
              <div className="team__founder-btn">
                <Link href="/contact" className="theme-btn border-btn">Kontaktirajte me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
