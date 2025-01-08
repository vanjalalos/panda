import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceDetailsContent from './ServiceDetailsContent';

const ServiceDetailsMain = () => {
    return (
        <>
            <Breadcrumb title='Service Details' subTitle='Service Details' />
            <ServiceDetailsContent />
        </>
    );
};

export default ServiceDetailsMain;