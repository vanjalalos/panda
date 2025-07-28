import React from 'react';

const FaqAccordion = () => {
    return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faq-wrapper">
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Kako i pod kojim uslovima se mogu radno angažovati maloljetna lica?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>U skladu sa članom 14 Zakona o radu Republike Srpske („Službeni glasnik Republike Srpske, broj: 55/07) ugovor o radu ne može zaključiti lice koje nije navršilo 15 godina života i koje nema opštu zdravstvenu sposobnost za rad. Radnik mlađi od 18 godina ne može biti raspoređen da radi na naročito teškim fizičkim poslovima, na radovima koji se obavljaju pod zemljom ili pod vodom, kao ni na drugim poslovima koji bi mogli da predstavljaju povećan rizik po njegov život, zdravlje i psihofizički razvoj, a na osnovu člana 75 Zakona o radu.</p>
                                                <p>Moguće je zaposliti maloljetnika sa najmanje 15 godina, ako su ispunjena 3 uslova:<br/>
                                                • da roditelji daju saglasnost<br/>
                                                • da maloljetno lice dobije ljekarsko uvjerenje da je sposobno da obavlja taj posao (trošak snosi Zavod za zapošljavanje)<br/>
                                                • ako je osigurano da taj rad ne ugrožava zdravlje, moral i obrazovanje maloljetnika.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Da li preduzetnik gubi status malog preduzetnika ako zapošljava više od tri radnika?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Mali preduzetnik gubi status malog preduzetnika ako zapošljava više od tri radnika. U broj radnika se ne računa vlasnik preduzetničke radnje, što je definisano članom 21 tačka 2. Zakona o porezu na dohodak.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Koje obaveze ima poslodavac po osnovu zaključenog ugovora o dopunskom radu sa fizičkim licem?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Na primanja po osnovu ugovora o dopunskom radu plaća se porez na ostali dohodak (10%) i doprinos za penzijsko i invalidsko osiguranje.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-wrapper-2">
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample2">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Da li radnik može sa drugim poslodavcem zaključiti ugovor o dopunskom radu bez saglasnosti poslodavca?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Da, može do polovine punog radnog vremena, pod uslovom da se radno vrijeme radnika vremenski ne podudara sa vremenom koje će provoditi na dopunskom radu, i da se ne radi o istoj djelatnosti. Ukoliko se radi o istoj djelatnosti, potrebna je saglasnost poslodavca za zaključenje ugovora o dopunskom radu.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Obaveza registracije preduzetničke radnje u PDV sistem kad vlasnik ima DOO?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>U situaciji kada fizičko lice ima u vlasništvu društvo ograničene odgovornosti (DOO), koje je u sistemu PDV-a, i pored toga, ima registrovanu preduzetničku radnju, koja nije u sistemu PDV-a, i ne prelazi prag oporezivanja iz Zakona o PDV-u - ne dolazi do sabiranja prometa obavljenog preko DOO i preduzetničke radnje, pa samim time nema obaveze za registraciju preduzetničke radnje u sistem PDV-a.</p>
                                                <p>Ukoliko bi jedno lice imalo dvije ili više preduzetničkih radnji, ili bilo vlasnik dva ili više privrednih društava (pravnih lica), njihove promete bi trebalo sabirati i voditi računa o prelasku oporezivog praga prometa od 50.000 KM.</p>
                                            </div>
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

export default FaqAccordion;