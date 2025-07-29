import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PriceInquirySection from './PriceInquirySection';
import MapSection from '../home/MapSection';
import CtaSectionTwo from '../homeTwo/CtaSectionTwo';

const PriceInquiryMain = () => {
    return (
        <>
            <Breadcrumb title='Upit za cijenu' subTitle='Upit za cijenu' />
            <PriceInquirySection />
            <CtaSectionTwo />
            <MapSection />
        </>
    );
};

export default PriceInquiryMain; 