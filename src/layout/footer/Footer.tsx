import Link from "next/link";
import React from "react";
import FooterBottom from "./FooterBottom";
import Image from "next/image";
import logo from "../../../public/assets/img/logo/logo.png";
import icon1 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-2.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${"/assets/img/service/service-bg.jpg"})`,
      }}
      className="pt-95 position-relative"
    >
      <div
        className="common-shape-wrapper wow slideInRight animated"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <div
          className="common-shape-inner wow slideInRight animated"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        ></div>
      </div>
      <div className="footer-area pb-60">
        <div className="container">
          <div className="row justify-content-center text-center text-lg-start">
            <div className="col-lg-4 col-sm-6">
              <div className="widget mb-30">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <Image
                      src={logo}
                      style={{ 
                        width: "120px", 
                        height: "100px",
                        maxWidth: "120px",
                        //borderRadius: "40%",
                        objectFit: "contain",
                        objectPosition: "center",
                        backgroundColor: "transparent",
                        filter: "brightness(0) saturate(100%) invert(100%)"
                      }}
                      alt="footer logo"
                    />
                  </Link>
                </div>
                <p className="mb-20 pr-35">
                Vaš partner za sigurno i precizno knjigovodstvo. Mi pratimo zakone i rokove, vi pratite svoje ciljeve.
                </p>
                <div className="footer-social">
                
                  <Link href="https://www.facebook.com/knjigovodstvenibiropanda/photos/?_rdr" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                 
                  <Link href="https://www.instagram.com/explore/locations/104821495368467/knjigovodstveni-biro-panda/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="widget mb-30">
                <h4 className="widget-title mb-35">Linkovi</h4>
                <ul>
                  <li>
                    <Link href="/service">Naše usluge</Link>
                  </li>
                  <li>
                    <Link href="/about">O nama</Link>
                  </li>
                  <li>
                    <Link href="/contact">Kontakt</Link>
                  </li>
                  <li>
                    <Link href="/contact">Pomoć</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget-contact mb-30">
                <h4 className="widget-title mb-35">Kontakt</h4>
                <ul>
                  <li className="pb-10">
                  Bulevar vojvode Stepe Stepanovića 59 <br />
                    Banja Luka, BiH
                  </li>
                  <li>
                    <Image
                      src={icon1}
                      style={{ 
                        width: "auto", 
                        height: "auto",
                        filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                      }}
                      alt="footer logo"
                    />
                    <a href="mailto:office@panda.ba">office@panda.ba</a>
                  </li>
                  <li>
                    <Image
                      src={icon2}
                      style={{ 
                        width: "auto", 
                        height: "auto",
                        filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                      }}
                      alt="footer logo"
                    />
                    <a href="tel:9266688800">+ 387 65 314 131</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6">
              <div className="widget mb-30">
                <h4 className="widget-title mb-30">Newsletter</h4>
                <p className="mb-20">
                  Subscribe to Our Newsletter for Daily News and Updates
                </p>
                <div className="widget-newsletter">
                  <form action="#">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
