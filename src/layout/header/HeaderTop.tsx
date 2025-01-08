import React from 'react';
import Image from "next/image";
import icon1 from "../../../public/assets/img/icon/sidebar-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon3 from "../../../public/assets/img/icon/footer-icon-2.png";
import Link from 'next/link';

const HeaderTop = () => {
    return (
        <div className="header-top bg-heading d-none d-md-block">
            <div className="container-fluid">
                <div className="header-top-space">
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="welcome-text">
                                <span>Welcome to the Digital Marketing Agency</span>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-top-info">
                                <ul>
                                    <li><Image src={icon1} style={{ width: "auto", height: "auto" }} alt="icon not found" />86 broklyn street road, New York</li>
                                    <li><Image src={icon2} style={{ width: "auto", height: "auto" }} alt="icon not found" /><Link href="mailto:info@sycho24.com">needhelp@company.com</Link></li>
                                    <li><Image src={icon3} style={{ width: "auto", height: "auto" }} alt="icon not found" /><Link href="tel:926668880000">92 666 888 0000</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;