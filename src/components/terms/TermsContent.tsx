import React from 'react';

const TermsContent = () => {
    return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="terms-wrapper">
                            <div className="section-title-wrapper text-center mb-50">
                                <h2 className="section-title mb-35">Uslovi korišćenja</h2>
                                <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#777a7e" }}>
                                    Dobrodošli na našu web stranicu. Korišćenjem ove stranice potvrđujete da ste pročitali, razumjeli i prihvatili ove Uslove korišćenja.
                                </p>
                            </div>
                            
                            <div 
                                className="terms-content" 
                                data-aos="fade-up" 
                                data-aos-duration="1000"
                                style={{ 
                                    backgroundColor: "#fff", 
                                    padding: "40px", 
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                                }}
                            >
                                <div className="terms-section mb-30">
                                    <h4 className="terms-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        1. Sadržaj stranice
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Sav sadržaj na ovoj stranici ima informativni karakter. Trudimo se da informacije budu tačne i ažurne, ali ne garantujemo potpunu preciznost ili potpunost.
                                    </p>
                                </div>

                                <div className="terms-section mb-30">
                                    <h4 className="terms-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        2. Korišćenje informacija
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Informacije objavljene na stranici ne predstavljaju pravni, računovodstveni ili poresni savjet. Pre donošenja odluka preporučujemo konsultaciju sa našim stručnjacima.
                                    </p>
                                </div>

                                <div className="terms-section mb-30">
                                    <h4 className="terms-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        3. Intelektualno vlasništvo
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Svi tekstovi, slike i drugi sadržavi na ovoj stranici zaštićeni su autorskim pravom. Nije dozvoljeno njihovo kopiranje ili distribucija bez našeg pisanog odobrenja.
                                    </p>
                                </div>

                                <div className="terms-section mb-30">
                                    <h4 className="terms-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        4. Ograničenje odgovornosti
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Ne snosimo odgovornost za bilo kakvu štetu nastalu korišćenjem ili nemogućnošću korišćenja naše stranice.
                                    </p>
                                </div>

                                <div className="terms-section mb-30">
                                    <h4 className="terms-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        5. Linkovi ka drugim stranicama
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                                        Naša stranica može sadržavati linkove ka drugim web stranicama. Nemamo kontrolu nad njihovim sadržajem i ne preuzimamo odgovornost za informacije na tim stranicama.
                                    </p>
                                </div>

                                <div className="terms-section">
                                    <h4 className="terms-heading mb-20" style={{ color: "#0cb85a", fontSize: "20px", fontWeight: "600" }}>
                                        6. Izmjene uslova
                                    </h4>
                                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "0" }}>
                                        Zadržavamo pravo da u svakom trenutku izmijenimo ove Uslove korišćenja. Molimo vas da ih povremeno provjerite.
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

export default TermsContent; 