import Link from 'next/link';
import React from 'react';

const FooterBottom = () => {
    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-bg">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="copyright">
                                <span>Copyright ©2022 BDevs. All Rights Reserved</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="privacy-text text-center text-md-end">
                                <ul>
                                    <li>
                                        <Link href="/contact">Terms & Condition</Link>
                                        <Link href="/contact">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;