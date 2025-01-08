import blogs from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSidebarPost = () => {
    return (
        <div className="widget_-latest-posts mb-30">
            <h4 className="bs-widget-title mb-25"> Latest Posts </h4>
            <div className="sidebar__widget-content">
                {blogs && blogs.slice(3, 6).map((item) => (
                    <div className="rc-post d-flex mb-15" key={item.id}>
                        <div className="rc-thumb">
                            <Link href={`/blog-details/${item.id}`}>
                                {item.img && <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />}
                            </Link>
                        </div>
                        <div className="rc-text">
                            <div className="kblog-meta">
                                <Link href={`/blog-details/${item.id}`}><i className="fal fa-user-circle"></i> {item.user}</Link>
                            </div>
                            <h5>
                                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSidebarPost;