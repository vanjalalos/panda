import React from 'react';

const FaqForm = () => {
    return (
        <section className="faq-form pt-110 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="faq-form-title-wrapper text-center">
                            <h3 className="faq-form-title">Još uvijek imate pitanja? Pitajte direktno!</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <form id="contact-form" >
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                        <input type="text" placeholder="Vaše ime" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                        <input type="email" placeholder="Email adresa" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                        <input type="text" placeholder="Telefon" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                        <input type="text" placeholder="Predmet" />
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-md-12 mb-20">
                                            <textarea placeholder="Napišite poruku"></textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Pošalji poruku</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqForm;