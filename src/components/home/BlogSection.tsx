import React from 'react';
import BlogCommonSlider from '../elements/blog/BlogCommonSlider';

const BlogSection = () => {
    return (
        <section className="blog-area pt-120 fix" style={{ backgroundImage: `url(${'/assets/img/blog/blog-bg-1.jpg'})` }}>
            <div className="container pb-120">
                <div className="blog-border">
                    <div className='row'>
                        <div className='col-xl-4'>
                            <div className="blog-text pt-60" data-aos="zoom-in">
                                <div className="section-title-wrapper pr-25 mb-50">
                                    <h5 className="section-subtitle mb-20">recent blog posts</h5>
                                    <h2 className="section-title mb-35">Latest News & Articles</h2>
                                    <p className="pr-50">Discover how digital agencies assist businesses in setting up e-commerce platforms for online selling.</p>
                                </div>
                                <div className="kblog-arrow">
                                    <div className="blog-button-prev slide-prev"><i className="far fa-long-arrow-left"></i></div>
                                    <div className="blog-button-next slide-next"><i className="far fa-long-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-8'>
                            <div className="blog-active swiper-container">
                                <BlogCommonSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;