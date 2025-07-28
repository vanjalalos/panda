import React from 'react';

const AboutWhyWeSection = () => {
    return (
        <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">
                                <h5 className="section-subtitle mb-20">Naše usluge</h5>
                                <h2 className="section-title mb-35">Zašto izabrati nas</h2>
                            </div>
                            <p>Svaki klijent ima jedinstvene potrebe, a mi se trudimo da pristup bude prilagođen, jasan i pouzdan.
                            </p>
                            <div className="why-tab-list">
                                <ul>
                                    <li><i className="far fa-check"></i>Prijatno je kada saradnja ima lični pečat.</li>
                                    <li><i className="far fa-check"></i>Radimo otvoreno i transparentno.</li>
                                    <li><i className="far fa-check"></i>Gradimo partnerstva na poverenju.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Osnivate firmu?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Dosadilo Vam je da radite za druge? Želite pokrenuti nešto svoje, makar i malo, ali biti svoji na svome? Tu smo da Vam pomognemo od samog početka, bez ikakvih naknada, s povjerenjem u Vaš i naš zajednički uspjeh.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Imate privatni biznis i hoćete više od samog knjigovodstva?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Sagledali ste svoj poslovni plan iz više uglova i zaključili da je vreme za velike korake napred. Slobodni smo da Vam pružimo stručno i objektivno savetovanje kako biste svoju ideju razvili na najbolji mogući način.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Želite da organizujete ZEV i izvršite njegovu registraciju?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Useljeni ste u lijep stan, ali primjećujete da u zgradi stvari ne funkcionišu kako treba? Tu smo da Vam pomognemo u organizaciji i finansijskom vođenju registrovanih i neregistrovanih Zajednica etažnih vlasnika, kako bi suživot stanara bio ugodan, a Vaš zajednički prostor mjesto kulture i skladnog života.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWhyWeSection;