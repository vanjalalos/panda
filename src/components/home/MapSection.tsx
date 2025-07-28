import React from 'react';

const MapSection = () => {
    return (
        <div className="map-area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45429.89123456789!2d17.168923456789!3d44.771234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e049123456789%3A0xabcdef0123456789!2sBulevar%20vojvode%20Stepe%20Stepanovi%C4%87a%2059%2C%2078000%20Banja%20Luka%2C%20BiH!5e0!3m2!1shr!2sba!4v1698765432109!5m2!1shr!2sba" loading="lazy"></iframe>
        </div>
    );
};

export default MapSection;