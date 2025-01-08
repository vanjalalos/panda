import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import author from "../../../public/assets/img/blog/blog-img-author.jpg";

const BlogAuthor = () => {
    return (
        <div className="row pr-15 pl-15">
            <div className="blog-author bg-grey text-start">
                <div className="blog-author-img f-left">
                    <Link href="/blog-details"><Image src={author} style={{ width: "100%", height: "auto" }} alt="img not found" /></Link>
                </div>
                <div className="blog-author-text fixed">
                    <h4>Christive eve</h4>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogAuthor;