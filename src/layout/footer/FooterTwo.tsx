import React from 'react';
import FooterBottom from './FooterBottom';
import Link from 'next/link';
import Image from "next/image";
import logo from "../../../public/assets/img/logo/logo-white.png";
import icon1 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-2.png";

const FooterTwo = () => {
    return (
        <footer style={{ backgroundImage: `url(${'/assets/img/bg/footer-bg.jpg'})` }} className="pt-155 position-relative">
            <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
            </div>
            <div className="footer-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget mb-30">
                                <div className="footer-logo mb-25">
                                    <Link href="/"><Image src={logo} style={{ width: "100%", height: "auto" }} alt="footer logo" /></Link>
                                </div>
                                <p className="mb-20 pr-35">There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words.</p>
                                <div className="footer-social">
                                    <Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link>
                                    <Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="widget mb-30">
                                <h4 className="widget-title mb-35">Links</h4>
                                <ul>
                                    <li><Link href="/service">Our Services</Link></li>
                                    <li><Link href="/team">Meet Our Team</Link></li>
                                    <li><Link href="/project">Our Portfolio</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/contact">Help</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget widget-contact mb-30">
                                <h4 className="widget-title mb-35">Contact</h4>
                                <ul>
                                    <li className="pb-10">86 Road Broklyn Street, 600 <br />New York, USA</li>
                                    <li><Image src={icon1} style={{ width: "auto", height: "auto" }} alt="footer logo" /><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                    <li><Image src={icon2} style={{ width: "auto", height: "auto" }} alt="footer logo" /><a href="tel:9266688800">92 666 888 0000</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget mb-30">
                                <h4 className="widget-title mb-30">Newsletter</h4>
                                <p className="mb-20">Subscribe to Our Newsletter for Daily News and Updates</p>
                                <div className="widget-newsletter">
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" />
                                        <button type="submit">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default FooterTwo;