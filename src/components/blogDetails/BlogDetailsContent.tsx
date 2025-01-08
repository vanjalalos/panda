import blogs from '@/data/blog-data';
import { idType } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlogInfo from './BlogInfo';
import BlogAuthor from './BlogAuthor';
import BlogComments from './BlogComments';
import BlogCommentsForm from './BlogCommentsForm';
import BlogSidebarSearch from './BlogSidebarSearch';
import BlogSidebarPost from './BlogSidebarPost';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarTags from './BlogSidebarTags';

const BlogDetailsContent = ({id}:idType) => {
    const blog = blogs.find(item=> item.id == id)
    return (
        <section className="blog-details-area  pt-120 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="kblog">
                            <div className="kblog-img">
                                <Link href={`/blog-details/${blog?.id}`}>{blog?.img && <Image src={blog.img} style={{ width: "100%", height: "auto" }} alt="project image" />}</Link>
                                <span>{blog?.date}</span>
                            </div>
                            <div className="kblog-text kblog-text2">
                                <div className="kblog-meta">
                                    <Link href={`/blog-details/${blog?.id}`}><i className="fal fa-user-circle"></i> {blog?.user}</Link>
                                    <Link href={`/blog-details/${blog?.id}`}><i className="fal fa-comments"></i> {blog?.comments} {blog?.comments > 1 ? "Comments" : "Comment"} </Link>
                                </div>
                                <h3 className="kblog-text-title2 mb-40"><Link href={`/blog-details/${blog?.id}`}>{blog?.title}</Link></h3>
                                <p className="mb-35">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which {`don't`} look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>

                                <p>Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type simen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has been the {`industry's`} standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged.</p>
                            </div>
                        </div>

                        <BlogInfo />

                        <BlogAuthor />

                        <BlogComments />

                        <BlogCommentsForm />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-md-40 mt-xs-40">
                        <div className="sidebar-wrap">
                            <BlogSidebarSearch />

                            <BlogSidebarPost />

                            <BlogSidebarCategories />

                            <BlogSidebarTags />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsContent;