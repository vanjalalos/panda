import React from 'react';
import projects from '@/data/project-data';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSectionTwo = () => {
    return (
        <section className="project-2 pt-115 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-title-wrapper mb-50">
                            <h5 className="section-subtitle mb-20">Our recent work</h5>
                            <h2 className="section-title">Work showcase</h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="aportfolio-menu text-start text-lg-end">
                            <nav>
                                <div id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">All</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                        aria-selected="false">Graphic</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                        aria-selected="false">Web Design</button>
                                    <button className="nav-link" id="nav-photography-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-photography" type="button" role="tab"
                                        aria-controls="nav-photography" aria-selected="false">Web Development</button>
                                    <button className="nav-link" id="nav-web-tab" data-bs-toggle="tab" data-bs-target="#nav-web"
                                        type="button" role="tab" aria-controls="nav-web" aria-selected="false">Networking</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="aportfolio-active">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='row'>
                                {projects && projects.slice(7, 13).map((item) => (
                                    <div className="col-lg-4 col-md-6" key={item.id}>
                                        <div className="kproject kproject-2 mb-30">
                                            {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                            <div className="kproject-text kproject-text-2">
                                                <div className="kproject-text-content">
                                                    <span>{item.tag}</span>
                                                    <h5 className="kproject-text-title"><Link href={`/project-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                                <div className="kproject-text-icon">
                                                    <Link href={`/project-details/${item.id}`}><i className="far fa-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='row'>
                                {projects && projects.slice(7, 13).map((item) => (
                                    item.graphic ?
                                        <div className="col-lg-4 col-md-6" key={item.id}>
                                            <div className="kproject kproject-2 mb-30">
                                                {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                                <div className="kproject-text kproject-text-2">
                                                    <div className="kproject-text-content">
                                                        <span>{item.tag}</span>
                                                        <h5 className="kproject-text-title"><Link href={`/project-details/${item.id}`}>{item.title}</Link></h5>
                                                    </div>
                                                    <div className="kproject-text-icon">
                                                        <Link href={`/project-details/${item.id}`}><i className="far fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className='row'>
                                {projects && projects.slice(7, 13).map((item) => (
                                    item.design ?
                                        <div className="col-lg-4 col-md-6" key={item.id}>
                                            <div className="kproject kproject-2 mb-30">
                                                {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                                <div className="kproject-text kproject-text-2">
                                                    <div className="kproject-text-content">
                                                        <span>{item.tag}</span>
                                                        <h5 className="kproject-text-title"><Link href={`/project-details/${item.id}`}>{item.title}</Link></h5>
                                                    </div>
                                                    <div className="kproject-text-icon">
                                                        <Link href={`/project-details/${item.id}`}><i className="far fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-photography" role="tabpanel" aria-labelledby="nav-photography-tab">
                            <div className='row'>
                                {projects && projects.slice(7, 13).map((item) => (
                                    item.development ?
                                        <div className="col-lg-4 col-md-6" key={item.id}>
                                            <div className="kproject kproject-2 mb-30">
                                                {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                                <div className="kproject-text kproject-text-2">
                                                    <div className="kproject-text-content">
                                                        <span>{item.tag}</span>
                                                        <h5 className="kproject-text-title"><Link href={`/project-details/${item.id}`}>{item.title}</Link></h5>
                                                    </div>
                                                    <div className="kproject-text-icon">
                                                        <Link href={`/project-details/${item.id}`}><i className="far fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-web" role="tabpanel" aria-labelledby="nav-web-tab">
                            <div className='row'>
                                {projects && projects.slice(7, 13).map((item) => (
                                    item.networking ?
                                        <div className="col-lg-4 col-md-6" key={item.id}>
                                            <div className="kproject kproject-2 mb-30">
                                                {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                                <div className="kproject-text kproject-text-2">
                                                    <div className="kproject-text-content">
                                                        <span>{item.tag}</span>
                                                        <h5 className="kproject-text-title"><Link href={`/project-details/${item.id}`}>{item.title}</Link></h5>
                                                    </div>
                                                    <div className="kproject-text-icon">
                                                        <Link href={`/project-details/${item.id}`}><i className="far fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSectionTwo;