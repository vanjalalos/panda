import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqForm';

const FaqMain = () => {
    return (
        <>
            <Breadcrumb title='FAQ' subTitle='FAQ' />
            <FaqAccordion />
            <FaqForm />
        </>
    );
};

export default FaqMain;