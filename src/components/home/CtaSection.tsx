import Link from 'next/link';
import React from 'react';

const CtaSection = () => {
    return (
        <section className="cta-area mt--60 z-index" data-aos="fade-up">
            <div className="container">
                <div className="cta-bg bg-theme">
                    <div className="cta-number">
                        <div className="cta-number-icon mr-30">
                            <i className="flaticon-reaction"></i>
                        </div>
                        <div className="cta-number-text fix">
                            <span className="uppercase">Get a Free Consultation</span>
                            <h3><a href="tell:6668880000">666 888 0000</a></h3>
                        </div>
                    </div>
                    <div className="cta-description">
                        <p>Stay up-to-date with the latest technological advancements.</p>
                    </div>
                    <div className="cta-btn text-lg-end text-start">
                        <Link href="/service" className="theme-btn black-btn">Discover more</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;