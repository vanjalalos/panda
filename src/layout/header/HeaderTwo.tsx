"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import HeaderTop from './HeaderTop';
import HeaderSearch from './HeaderSearch';
import MobileMenu from './MobileMenu';
import useScrollDirection from '@/hooks/sticky-header';
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import Menus from './Menus';
import logo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";

const HeaderTwo = () => {
    const { toggleSideMenu, sideMenuOpen, toggleSearchMenu } = useContext(AppContext) as AppContextType;
    const scrollDirection = useScrollDirection(null)

    return (
        <>
            <header>
                <HeaderTop />
                <div className={`header-area transparent-header sticky-header2 white-bg ${scrollDirection === "down" ? "sticky-header" : ""}`}>
                    <div className="container-fluid">
                        <div className="header-space">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-8">
                                    <div className="header-logo">
                                        <Link href="/"><Image src={logo} style={{ width: "100%", height: "auto" }} alt="header logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-4">
                                    <div className="main-menu main-menu-2 d-xl-block d-none">
                                        <nav id="mobile-menu">
                                            <Menus />
                                        </nav>
                                    </div>
                                    <div className="side-menu-icon d-xl-none text-end">
                                        <button type="button" className="search-btn nav-search search-trigger" onClick={toggleSearchMenu}><i className="fas fa-search"></i></button>
                                        <button className="side-toggle side-toggle2" onClick={toggleSideMenu}><i className="far fa-bars"></i></button>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-none d-xl-block">
                                    <div className="header-right text-end">
                                        <div className="header-social header-social-2">
                                            <Link href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></Link>
                                            <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></Link>
                                            <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                        <div className="header-search header-search-2">
                                            <button type="button" className="search-btn nav-search search-trigger" onClick={toggleSearchMenu}>
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                        <div className="header-btn">
                                            <Link href="/contact" className="theme-btn theme-btn-small border-btn">Free Estimate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HeaderSearch />
            <MobileMenu />
            <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay show" : "body-overlay"}></div>
        </>
    );
};

export default HeaderTwo;