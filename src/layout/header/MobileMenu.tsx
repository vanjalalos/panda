"use client"

import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Image from "next/image";
import icon1 from "../../../public/assets/img/icon/sidebar-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon3 from "../../../public/assets/img/icon/footer-icon-2.png";

const MobileMenu = () => {
    const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType;
    const [home, setHome] = useState<boolean>(false);
    const [services, setServices] = useState<boolean>(false);
    const [blog, setBlog] = useState<boolean>(false);
    const [pages, setPages] = useState<boolean>(false);
    const [project, setProject] = useState<boolean>(false);

    const openMobileMenu = (menu: string) => {

        if (menu == 'home') {
            setHome(!home)
            setServices(false)
            setBlog(false)
            setPages(false)
            setProject(false)
        }
        else if (menu == 'services') {
            setHome(false)
            setServices(!services)
            setBlog(false)
            setPages(false)
            setProject(false)
        }
        else if (menu == 'blog') {
            setHome(false)
            setServices(false)
            setBlog(!blog)
            setPages(false)
            setProject(false)
        }
        else if (menu == 'pages') {
            setHome(false)
            setServices(false)
            setBlog(false)
            setProject(false)
            setPages(!pages)
        }
        else if (menu == 'project') {
            setHome(false)
            setServices(false)
            setBlog(false)
            setPages(false)
            setProject(!project)
        }
    };

    return (
        <div className="fix">
            <div className={sideMenuOpen ? "side-info info-open" : "side-info"}>
                <button className="side-info-close" onClick={toggleSideMenu}><i className='far fa-times'></i></button>
                <div className="side-info-content">
                    <div className="mm-menu">
                        <ul>
                            <li className={home ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                                <ul className={home ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/">Home Style 1</Link></li>
                                    <li><Link href="/home-two">Home Style 2</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li className={services ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('services'); }}>Services</a>
                                <ul className={services ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/service">Services</Link></li>
                                    <li><Link href="/service-details">Services Details</Link></li>
                                </ul>
                            </li>
                            <li className={project ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('project'); }}>Projects</a>
                                <ul className={project ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/project">Projects</Link></li>
                                    <li><Link href="/project-details">Projects Details</Link></li>
                                </ul>
                            </li>
                            <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                                <ul className={pages ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/faq">Faq</Link></li>
                                    <li><Link href="/team">Team</Link></li>
                                    <li><Link href="/team-details">Team Details</Link></li>
                                    <li><Link href="/signin">SignIn</Link></li>
                                    <li><Link href="/forgot-password">Forgot Password</Link></li>
                                    <li><Link href="/signup">SignUp</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><Image src={icon1} style={{ width: "auto", height: "auto" }} alt="icon not found" />86 broklyn street road, New York</li>
                                <li><Image src={icon2} style={{ width: "auto", height: "auto" }} alt="icon not found" /><Link href="mailto:info@sycho24.com">needhelp@company.com</Link></li>
                                <li><Image src={icon3} style={{ width: "auto", height: "auto" }} alt="icon not found" /><Link href="tel:926668880000">92 666 888 0000</Link></li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;