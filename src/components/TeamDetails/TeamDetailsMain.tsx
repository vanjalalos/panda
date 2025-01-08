import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamDetailsContent from './TeamDetailsContent';
import { idType } from '@/interFace/interFace';

const TeamDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb title='Team Details' subTitle='Team Details' />
            <TeamDetailsContent id={id} />
        </>
    );
};

export default TeamDetailsMain;