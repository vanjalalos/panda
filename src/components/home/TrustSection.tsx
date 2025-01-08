import Link from 'next/link';
import React from 'react';

const TrustSection = () => {
    return (
        <section className="trust-area pt-105 pb-120">
            <div className="trust-bg" style={{ backgroundImage: `url(${'/assets/img/trust/trust-bg.jpg'})` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="ktrust text-center z-index">
                            <h2 className="ktrust-title mb-45 wow fadeInUp" data-wow-delay=".2s">Trust the Experts for All <br />Your business Needs</h2>
                            <div className="ktrust-btn">
                                <Link href="/service" className="theme-btn">Discover more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;