import Link from 'next/link';
import React from 'react';

const CtaSectionTwo = () => {
    return (
        <section className="cta-area mb--60 z-index">
            <div className="container">
                <div className="cta-bg bg-theme">
                    <div className="cta-number" style={{ flexBasis: "45%" }}>
                        <div className="cta-number-icon mr-30">
                            <i className='flaticon-reaction'></i>
                        </div>
                        <div className="cta-number-text fix">
                            <span className="uppercase">Besplatne konsultacije</span>
                            <h3><Link href="tell:6668880000">+387 65 314 131</Link></h3>
                        </div>
                    </div>
                    <div className="cta-description" style={{ flexBasis: "28%", marginLeft: "50px" }}>
                        <p>Rado ćemo Vas posavjetovati – besplatne konsultacije na dohvat ruke.</p>
                    </div>
                    {/* <div className="cta-btn text-lg-end text-start">
                        <Link href="/service" className="theme-btn black-btn">Discover more</Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default CtaSectionTwo;