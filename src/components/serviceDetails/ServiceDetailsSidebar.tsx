import Link from 'next/link';
import React from 'react';

const ServiceDetailsSidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="widget_categories grey-bg">
                <h4 className="bs-widget-title pl-20">Categories</h4>
                <ul>
                    <li><Link href="/service-details">Web Developement <i className="far fa-long-arrow-right"></i></Link></li>
                    <li><Link href="/service-details">Graphic Design <i className="far fa-long-arrow-right"></i></Link></li>
                    <li><Link href="/service-details">SEO & Content Writting <i className="far fa-long-arrow-right"></i></Link></li>
                    <li><Link href="/service-details">Digital Marketing <i className="far fa-long-arrow-right"></i></Link></li>
                    <li><Link href="/service-details">App Development <i className="far fa-long-arrow-right"></i></Link></li>
                </ul>
            </div>
            <div className="widget-btn mt-30">
                <Link href="/about" className="theme-btn border-btn">get a free estimate</Link>
            </div>
        </div>
    );
};

export default ServiceDetailsSidebar;