import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import author1 from "../../../public/assets/img/blog/blog-img-author2.png";
import author2 from "../../../public//assets/img/blog/blog-img-author3.png";

const BlogComments = () => {
    return (
        <div className="row pr-15 pl-15">
            <div className="blog-comment-box">
                <div className="comment-title">
                    <h3 className="comment-box-title">
                        <Link href="/blog-details">2 Comments</Link>
                    </h3>
                </div>
                <div className="blog-single-comment d-flex">
                    <div className="blog-comment-img">
                        <Link href="/blog-details"><Image src={author1} style={{ width: "100%", height: "auto" }} alt="comment author" /></Link>
                    </div>
                    <div className="blog-comment-text">
                        <h4>Kevin Martin</h4>
                        <p>A step-by-step tutorial on adding authentication and authorization to your Next.js apps, with Auth0. We’ll be using a Next.js SDK to connect our application. </p>
                    </div>
                    <div className="reply-btn">
                        <Link href="/blog-details" className="comment-btn">Reply</Link>
                    </div>
                </div>
                <div className="blog-single-comment no-pt d-flex">
                    <div className="blog-comment-img">
                        <Link href="/blog-details"><Image src={author2} style={{ width: "100%", height: "auto" }} alt="comment author" /></Link>
                    </div>
                    <div className="blog-comment-text">
                        <h4>Jessica Brown</h4>
                        <p>Everything to keep in mind when designing and building a mega-dropdown, common pitfalls, hover entry/exit delays, trajectory triangle technique. </p>
                    </div>
                    <div className="reply-btn">
                        <Link href="/blog-details" className="comment-btn">Reply</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComments;