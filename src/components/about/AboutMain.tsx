import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import MissionSection from './MissionSection';
import TestimonialSection from '../home/TestimonialSection';
import FunFactSection from '../homeTwo/FunFactSection';
import AboutWhyWeSection from './AboutWhyWeSection';
import AboutTeamSection from './AboutTeamSection';
import BrandSection from '../home/BrandSection';

const AboutMain = () => {
    return (
        <>
            <Breadcrumb title='About Us' subTitle='About Us' />
            <MissionSection />
            <TestimonialSection testimonial_space="testimonial-area pt-85 pb-85" />
            <FunFactSection fact_space="fact-area pb-85" />
            <AboutWhyWeSection />
            <AboutTeamSection />
            <BrandSection brand_space="brand-area2 bg-grey pt-100 pb-100" />
        </>
    );
};

export default AboutMain;