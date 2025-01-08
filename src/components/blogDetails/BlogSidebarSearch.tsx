import React from 'react';

const BlogSidebarSearch = () => {
    return (
        <div className="sidebar-search-from mb-30">
            <form action="#">
                <input type="text" placeholder="Search here" />
                <button type="submit"> <i className="fal fa-search"></i> </button>
            </form>
        </div>
    );
};

export default BlogSidebarSearch;