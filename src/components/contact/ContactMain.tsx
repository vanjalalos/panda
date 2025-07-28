import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactSection from './ContactSection';
import MapSection from '../home/MapSection';
import CtaSectionTwo from '../homeTwo/CtaSectionTwo';

const ContactMain = () => {
    return (
        <>
            <Breadcrumb title='Kontakt' subTitle='Kontakt' />
            <ContactSection />
            <CtaSectionTwo />
            <MapSection />
        </>
    );
};

export default ContactMain;