import Link from 'next/link';
import React from 'react';
import RecentProject from './RecentProject';
import { idType } from '@/interFace/interFace';
import projects from '@/data/project-data';
import Image from 'next/image';

const ProjectDetailsContent = ({ id }: idType) => {
    const project = projects.find(item=> item.id == id)
    return (
        <>
            <section className="project-details-area pt-120 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="project-big-thumb">
                                {project?.img && <Image src={project.img} style={{ width: "100%", height: "auto" }} alt="project image" />}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="p-details-content mb-40">
                                <h3>{project?.title}</h3>
                                <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="sidebar-wrap mb-40">
                                <div className="sidebar-right">
                                    <div className="sidebar-single">
                                        <label>Clients:</label>
                                        <span>Jessica Brown</span>
                                    </div>
                                    <div className="sidebar-single">
                                        <label>Category:</label>
                                        <span>Design, Development</span>
                                    </div>
                                    <div className="sidebar-single">
                                        <label>Value:</label>
                                        <span>Jessica Brown</span>
                                    </div>
                                    <div className="sidebar-single">
                                        <label>Date:</label>
                                        <span>22 Aug, 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="portfolio__pagination-wrapper">
                <div className="container">
                    <div className="pagination-border pt-40 pb-40">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="portfolio__pagination">
                                    <Link href="/project-details" className="link-btn-2"><i className="far fa-long-arrow-left"></i> Next</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="portfolio__pagination text-end">
                                    <Link href="/project-details" className="link-btn-2">Prev <i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RecentProject />
        </>
    );
};

export default ProjectDetailsContent;