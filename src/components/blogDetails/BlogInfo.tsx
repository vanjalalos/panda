import Link from 'next/link';
import React from 'react';

const BlogInfo = () => {
    return (
        <div className="row pt-30 pb-20">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                <div className="tag_cloud">
                    <span>Tags: </span>
                    <Link href="/blog" className="tag-cloud-link">Graphics,</Link>
                    <Link href="/blog" className="tag-cloud-link">Design,</Link>
                    <Link href="/blog" className="tag-cloud-link">Business</Link>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                <div className="blog-social text-sm-end ">
                    <Link href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></Link>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;