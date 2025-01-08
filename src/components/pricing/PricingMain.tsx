import React from 'react';
import dynamic from "next/dynamic";
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CtaSectionTwo from '../homeTwo/CtaSectionTwo';
const PricingSection = dynamic(() => import('./PricingSection'), {
    ssr: false
})

const PricingMain = () => {
    return (
        <>
            <Breadcrumb title='Pricing' subTitle='Pricing' />
            <PricingSection />
            <CtaSectionTwo />
        </>
    );
};

export default PricingMain;