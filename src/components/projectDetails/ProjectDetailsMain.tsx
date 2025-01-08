import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { idType } from '@/interFace/interFace';
import ProjectDetailsContent from './ProjectDetailsContent';

const ProjectDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb title='Project Details' subTitle='Project Details' />
            <ProjectDetailsContent id={id} />
        </>
    );
};

export default ProjectDetailsMain;