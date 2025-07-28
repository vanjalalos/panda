import Link from "next/link";
import React from "react";
import Image from "next/image";
import author from "../../../public/assets/img/service/service-author.png";

const ServiceSection = () => {
  return (
    <section
      className="service-area pt-120 pb-130"
      style={{
        backgroundImage: `url(${"/assets/img/service/service-bg.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-5 col-lg-6">
            <div
              className="kservice-text mb-50"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h5 className="kservice-text-subtitle mb-15">Sve kategorije</h5>
              <h2 className="kservice-text-title mb-40">
                Usluge <br />
                koje nudimo
              </h2>
              <p className="mb-45">
              Pomažemo vam da jednostavno i sigurno započnete ili organizujete svoje poslovanje. Pogledajte kako vam možemo olakšati registraciju i vođenje svih vrsta djelatnosti i organizacija.
              </p>
              <div className="kservice-author">
                <div className="kservice-author-img mr-30">
                  <Image
                    src={author}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="kservice-author-sign">
                  <span>Bojan Obradovic</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div
              className="row custom-mar-20"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="col-sm-6 custom-pad-20">
                <div className="kservice text-center mb-20">
                  <div className="kservice-icon">
                    <i className="flaticon-analytics"></i>
                  </div>
                  <div className="kservice-content">
                    <h5 className="kservice-content-title">
                      <Link href="/service-details">
                      Registrovanje<br />
                        SP
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 custom-pad-20">
                <div className="kservice text-center mb-20">
                  <div className="kservice-icon">
                    <i className="flaticon-marketing"></i>
                  </div>
                  <div className="kservice-content">
                    <h5 className="kservice-content-title">
                      <Link href="/service-details">
                      Osnivanje <br />
                        DOO
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 custom-pad-20">
                <div className="kservice text-center mb-20">
                  <div className="kservice-icon">
                    <i className="flaticon-profile"></i>
                  </div>
                  <div className="kservice-content">
                    <h5 className="kservice-content-title">
                      <Link href="/service-details">
                      Osnivanje  <br />
                      ZEV
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 custom-pad-20">
                <div className="kservice text-center mb-20">
                  <div className="kservice-icon">
                    <i className="flaticon-website"></i>
                  </div>
                  <div className="kservice-content">
                    <h5 className="kservice-content-title">
                      <Link href="/service-details">
                      Registrovanje  <br />
                      Udruženja
                      </Link>
                    </h5>
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

export default ServiceSection;
