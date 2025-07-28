import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqForm';

const FaqMain = () => {
    return (
        <>
            <Breadcrumb title='Česta pitanja' subTitle='Česta pitanja' />
            <FaqAccordion />
            <FaqForm />
        </>
    );
};

export default FaqMain;