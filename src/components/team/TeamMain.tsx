import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamContent from './TeamContent';

const TeamMain = () => {
    return (
        <>
            <Breadcrumb title='Our Team' subTitle='Our Team' />
            <TeamContent />
        </>
    );
};

export default TeamMain;