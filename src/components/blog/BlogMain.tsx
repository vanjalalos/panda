import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogContent from './BlogContent';

const BlogMain = () => {
    return (
        <>
            <Breadcrumb title='Blog' subTitle='Blog' />
            <BlogContent />
        </>
    );
};

export default BlogMain;