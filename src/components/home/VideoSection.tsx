"use client"

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <>
            <section className="video-area z-index">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-wrapper mb-45 text-center">
                                <h5 className="section-subtitle mb-20">one minute video</h5>
                                <h2 className="section-title mb-35">Watch video work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="kvideo-wrapper" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="kvideo" style={{ backgroundImage: `url(${'/assets/img/bg/video-bg.jpg'})` }}>
                                    <div className="kvideo-sign text-center">
                                        <span className="play-btn" onClick={() => { openVideoModal() }}><i className="fas fa-play"></i></span>
                                        <h2>Watch Video</h2>
                                    </div>
                                    <div className="kvideo-number">
                                        <span>get estimate</span>
                                        <a href="tel:6668880000">666 888 0000</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel="youtube" isOpen={isOpen} videoId="4K6Sh1tsAW4"
                onClose={() => {
                    openVideoModal();
                }}
            />
        </>

    );
};

export default VideoSection;