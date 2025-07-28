"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import mission from "../../../public/assets/img/about/about-img-6.jpg";

const MissionSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="mission-area pt-120 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="section-title-wrapper mb-25">
                <h5 className="section-subtitle mb-20">upoznajte nas</h5>
                <h2 className="section-title mb-35">
                  Naša misija je da budemo vaš pouzdan partner u poslovanju
                </h2>
                <p>
                  Detaljno upoznajemo vaše poslovanje, ciljeve i zakonske
                  obaveze kako bismo vam pružili tačne i pravovremene
                  računovodstvene usluge.
                </p>
              </div>
              <p className="mb-45">
                Mi smo računovodstvena agencija sa više od 15 godina iskustva,
                posvećena tome da budemo vaš pouzdan partner u poslovanju. Ne
                radimo samo knjiženje – temeljno se upoznajemo s vašim
                poslovanjem, ciljevima i zakonskim obavezama kako bismo vam
                pružili tačne i pravovremene informacije. Dovoljno smo
                prilagodljivi da razumemo specifične potrebe svakog klijenta, a
                dovoljno iskusni da ponudimo kvalitetno, profesionalno rešenje.{" "}
                {isExpanded && (
                  <>
                    Verujemo da je računovodstvo stub uspešnog biznisa i zato radimo
                    tako da vas minimalno opterećujemo, a omogućimo vam sigurne,
                    promišljene poslovne odluke. Pored računovodstvenih usluga,
                    nudimo i poresko i investiciono savetovanje, kao i druge
                    finansijske konsultacije. Od 2007. gradimo dugoročna partnerstva
                    zasnovana na poverenju i kvalitetu, što potvrđuje i veliki broj
                    naših lojalnih klijenata. Naš tim čine iskusni i visoko
                    obrazovani stručnjaci, spremni da svoje znanje dele s vama.
                    Govorimo engleski i ruski jezik i verujemo da ćete ostati naš
                    klijent samo ako budete u potpunosti zadovoljni uslugom.
                  </>
                )}
                <button
                  onClick={toggleReadMore}
                  className="read-more-btn"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#28a745",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "inherit",
                    fontWeight: "500",
                    marginLeft: "5px"
                  }}
                >
                  {isExpanded ? "Prikaži manje" : "Pročitaj više"}
                </button>
              </p>

              {/* <div className="ktrust-btn">
                <Link href="/service" className="theme-btn border-btn">
                  Discover more
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="kintro-img mb-30"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                src={mission}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
              <div className="mission-img-text">
                <h4>Računovodstvo koje razumije vaš biznis</h4>
                <Link href="/project">Započnimo saradnju </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
