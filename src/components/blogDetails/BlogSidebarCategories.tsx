import Link from 'next/link';
import React from 'react';

const BlogSidebarCategories = () => {
    return (
        <div className="widget_categories grey-bg mb-30">
            <h4 className="bs-widget-title pl-15">Categories</h4>
            <ul>
                <li><Link href="/blog">Web Developement <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link href="/blog">Graphic Design <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link href="/blog">SEO &amp; Content Writting <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link href="/blog">Digital Marketing <i className="far fa-long-arrow-right"></i></Link></li>
                <li><Link href="/blog">App Development <i className="far fa-long-arrow-right"></i></Link></li>
            </ul>
        </div>
    );
};

export default BlogSidebarCategories;