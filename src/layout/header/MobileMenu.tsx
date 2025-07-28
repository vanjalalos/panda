"use client";

import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import icon1 from "../../../public/assets/img/icon/sidebar-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon3 from "../../../public/assets/img/icon/footer-icon-2.png";

const MobileMenu = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  const [home, setHome] = useState<boolean>(false);
  const [services, setServices] = useState<boolean>(false);
  const [blog, setBlog] = useState<boolean>(false);
  const [pages, setPages] = useState<boolean>(false);
  const [project, setProject] = useState<boolean>(false);

  const openMobileMenu = (menu: string) => {
    if (menu == "home") {
      setHome(!home);
      setServices(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "services") {
      setHome(false);
      setServices(!services);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "blog") {
      setHome(false);
      setServices(false);
      setBlog(!blog);
      setPages(false);
      setProject(false);
    } else if (menu == "pages") {
      setHome(false);
      setServices(false);
      setBlog(false);
      setProject(false);
      setPages(!pages);
    } else if (menu == "project") {
      setHome(false);
      setServices(false);
      setBlog(false);
      setPages(false);
      setProject(!project);
    }
  };

  return (
    <div className="fix">
      <div className={sideMenuOpen ? "side-info info-open" : "side-info"}>
        <button className="side-info-close" onClick={toggleSideMenu}>
          <i className="far fa-times"></i>
        </button>
        <div className="side-info-content">
          <div className="mm-menu">
            <ul>
              <li>
                <Link href="/">Početna</Link>
              </li>
              <li>
                <Link href="/about">O nama</Link>
              </li>
              <li>
                <Link href="/service">Usluge</Link>
              </li>
              <li
                className={project ? "has-droupdown active" : "has-droupdown"}
              >
                <a
                  onClick={() => {
                    openMobileMenu("project");
                  }}
                >
                  Projekti
                </a>
                <ul className={project ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/project">Projekti</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Detalji projekta</Link>
                  </li>
                </ul>
              </li>
              <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a
                  onClick={() => {
                    openMobileMenu("blog");
                  }}
                >
                  Blog
                </a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Detalji članka</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/faq">Česta pitanja</Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="contact-infos mb-30">
            <div className="contact-list mb-30">
              <h4>Kontakt informacije</h4>
              <ul>
                <li>
                  <Image
                    src={icon1}
                    style={{ 
                      width: "auto", 
                      height: "auto",
                      filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                    }}
                    alt="icon not found"
                  />
                  Bulevar vojvode Stepe Stepanovića 59, 78000 Banja Luka, Bosna i Hercegovina
                </li>
                <li>
                  <Image
                    src={icon2}
                    style={{ 
                      width: "auto", 
                      height: "auto",
                      filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                    }}
                    alt="icon not found"
                  />
                  <Link href="mailto:office@panda.ba">office@panda.ba</Link>
                </li>
                <li>
                  <Image
                    src={icon3}
                    style={{ 
                      width: "auto", 
                      height: "auto",
                      filter: "brightness(0) saturate(100%) invert(61%) sepia(59%) saturate(1000%) hue-rotate(103deg) brightness(91%) contrast(86%)"
                    }}
                    alt="icon not found"
                  />
                  <Link href="tel:926668880000">+ 387 65 314 131</Link>
                </li>
              </ul>
              <div className="sidebar__menu--social">
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
