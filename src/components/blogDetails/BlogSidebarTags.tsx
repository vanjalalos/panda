import Link from 'next/link';
import React from 'react';

const BlogSidebarTags = () => {
    return (
        <div className="widget_tag_cloud">
            <h4 className="bs-widget-title mb-25"> Tags </h4>
            <div className="tagcloud">
                <Link href="/blog" className="tag-cloud-link">Graphics</Link>
                <Link href="/blog" className="tag-cloud-link">Design</Link>
                <Link href="/blog" className="tag-cloud-link">Business</Link>
                <Link href="/blog" className="tag-cloud-link">Development</Link>
                <Link href="/blog" className="tag-cloud-link">Technology</Link>
                <Link href="/blog" className="tag-cloud-link">Content</Link>
            </div>
        </div>
    );
};

export default BlogSidebarTags;