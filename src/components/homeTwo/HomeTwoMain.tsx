import React from 'react';
import dynamic from "next/dynamic";
import HeroSectionTwo from './HeroSectionTwo';
import BrandSectionTwo from './BrandSectionTwo';
import IntroductionSection from './IntroductionSection';
import ServiceSectionTwo from './ServiceSectionTwo';
import TrustSection from '../home/TrustSection';
import BlogSectionTwo from './BlogSectionTwo';
import TeamSection from './TeamSection';
import FunFactSection from './FunFactSection';
import BenefitsSection from './BenefitsSection';
import CtaSectionTwo from './CtaSectionTwo';
const WhyWeSection = dynamic(() => import('./WhyWeSection'), {
    ssr: false
})
const ProjectSectionTwo = dynamic(() => import('./ProjectSectionTwo'), {
    ssr: false
})

const HomeTwoMain = () => {
    return (
        <>
            <HeroSectionTwo />
            <BrandSectionTwo />
            <IntroductionSection />
            <ServiceSectionTwo />
            <TrustSection />
            <TeamSection />
            <WhyWeSection />
            <ProjectSectionTwo />
            <FunFactSection fact_space='' />
            <BenefitsSection />
            <BlogSectionTwo />
            <CtaSectionTwo />
        </>
    );
};

export default HomeTwoMain;