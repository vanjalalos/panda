import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-area pt-120 pb-80 fix">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section-title-wrapper mb-15">
              <h5 className="section-subtitle mb-20">kontaktirajte nas</h5>
              <h2 className="section-title">Tu smo za savjet i pomoć</h2>
            </div>
            <div className="contact-info mr-50 mr-xs-0  mr-md-0">
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <Link href="#">
                    <i className="fas fa-phone-alt"></i>
                  </Link>
                </div>
                <div className="contact-info-text mt-10">
                  <span>pozovite nas</span>
                  <h5>
                    <Link href="tell:926668880000">+ 387 65 314 131</Link>
                  </h5>
                </div>
              </div>
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <Link href="#">
                    <i className="fal fa-envelope"></i>
                  </Link>
                </div>
                <div className="contact-info-text mt-10">
                  <span>pošaljite e-mail</span>
                  <h5>
                    <Link href="mailto:office@panda.ba">office@panda.ba</Link>{" "}
                  </h5>
                </div>
              </div>
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <Link href="#">
                    <i className="fal fa-map-marker-alt"></i>
                  </Link>
                </div>
                <div className="contact-info-text mt-10">
                  <span>posjetite nas</span>
                  <h5>
                                                <Link href="#">Bulevar vojvode Stepe Stepanovića 59, 78000 Banja Luka, Bosna i Hercegovina</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="contact-form">
              <form id="contact-form">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input type="text" placeholder="Vaše ime" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input type="email" placeholder="Email adresa" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input type="text" placeholder="Telefon" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input type="text" placeholder="Predmet" />
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <textarea placeholder="Napišite poruku"></textarea>
                  </div>
                  <div className="col-xxl-12 col-xl-12 mb-20">
                    <button type="submit" className="theme-btn border-btn">
                      Pošalji poruku
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
