import blogs from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogContent = () => {
    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="container">
                <div className="row">
                    {blogs && blogs.slice(0, 6).map((item) => (
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30" key={item.id}>
                            <div className="kblog">
                                <div className="kblog-img">
                                    <Link href={`/blog-details/${item.id}`}>
                                        {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" />}
                                    </Link>
                                    <span>{item.date}</span>
                                </div>
                                <div className="kblog-text">
                                    <div className="kblog-meta">
                                        <Link href={`/blog-details/${item.id}`}><i className="fal fa-user-circle"></i> {item.user}</Link>
                                        <Link href={`/blog-details/${item.id}`}><i className="fal fa-comments"></i> {item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link>
                                    </div>
                                    <h3 className="kblog-text-title mb-20">
                                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <div className="kblog-text-link">
                                        <Link href={`/blog-details/${item.id}`}>{item.button} <i className="far fa-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="basic-pagination mt-20 wow fadeInUp" data-wow-delay=".5s">
                            <ul>
                                <li><span aria-current="page" className="page-numbers current">1</span></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="next page-numbers" href="#">
                                    <i className="fal fa-long-arrow-right"></i>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogContent;