import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import dynamic from "next/dynamic";
const ProjectPageSection = dynamic(() => import('./ProjectPageSection'), {
    ssr: false
})

const ProjectMain = () => {
    return (
        <>
            <Breadcrumb title='Projects' subTitle='Projects' />
            <ProjectPageSection />
        </>
    );
};

export default ProjectMain;