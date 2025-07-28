import React from 'react';

const PrivacyContent = () => {
    return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="privacy-wrapper">
                            <div className="section-title-wrapper text-center mb-50">
                                <h2 className="section-title mb-35">Politika privatnosti</h2>
                                <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#777a7e" }}>
                                    Vaša privatnost nam je važna. U ovoj Politici privatnosti objašnjavamo kako prikupljamo, koristimo i štitimo vaše podatke.
                                </p>
                            </div>
                            
                            <div 
                                className="privacy-content" 
                                data-aos="fade-up" 
                                data-aos-duration="1000"
                                style={{ 
                                    backgroundColor: "#fff", 
                                    padding: "40px", 
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                                }}
                            >
                                <div className="privacy-section mb-30">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        1. Prikupljanje podataka
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Možemo prikupljati lične podatke koje nam dobrovoljno dostavite putem kontakt forme (ime, prezime, e-mail adresa, broj telefona i poruka).
                                    </p>
                                </div>

                                <div className="privacy-section mb-30">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        2. Korišćenje podataka
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "15px" }}>
                                        Vaše podatke koristimo isključivo radi:
                                    </p>
                                    <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px", paddingLeft: "20px" }}>
                                        <li style={{ marginBottom: "8px" }}>Odgovora na vaše upite</li>
                                        <li style={{ marginBottom: "8px" }}>Zakazivanja sastanaka ili konsultacija</li>
                                        <li style={{ marginBottom: "8px" }}>Pružanja traženih usluga</li>
                                    </ul>
                                </div>

                                <div className="privacy-section mb-30">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        3. Dijeljenje podataka
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Ne prodajemo, ne iznajmljujemo i ne dijelimo vaše lične podatke s trećim stranama, osim ako to zahtijeva zakon ili uz vašu izričitu saglasnost.
                                    </p>
                                </div>

                                <div className="privacy-section mb-30">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        4. Sigurnost podataka
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Preduzimamo razumne mjere zaštite kako bismo spriječili neovlašteni pristup, izmjenu ili gubitak vaših podataka.
                                    </p>
                                </div>

                                <div className="privacy-section mb-30">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        5. Kolačići (Cookies)
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Naša stranica može koristiti kolačiće radi boljeg korisničkog iskustva. Možete ih onemogućiti u postavkama svog pretraživača.
                                    </p>
                                </div>

                                <div className="privacy-section mb-30">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        6. Prava korisnika
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Imate pravo da zatražite pristup, ispravku ili brisanje vaših ličnih podataka. Kontaktirajte nas kako bismo vam pomogli s tim.
                                    </p>
                                </div>

                                <div className="privacy-section">
                                    <h4 className="privacy-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        7. Izmjene politike privatnosti
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "0" }}>
                                        Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene će biti objavljene na ovoj stranici.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyContent; 