import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServicePageSection from './ServicePageSection';
import ServiceWhyWe from './ServiceWhyWe';
import ServiceSectionFour from './ServiceSectionFour';
import QualitySection from '../home/QualitySection';
import BrandSection from '../home/BrandSection';

const ServiceMain = () => {
    return (
        <>
            <Breadcrumb title='Services' subTitle='Services' />
            <ServicePageSection />
            <ServiceWhyWe />
            <ServiceSectionFour />
            <BrandSection brand_space='brand-area3 pt-100 pb-70' />
            <QualitySection />
        </>
    );
};

export default ServiceMain;