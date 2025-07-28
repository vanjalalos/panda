import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services-data';

const ServicesContent: React.FC = () => {
  return (
    <section className="service-area pt-120 pb-130">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center mb-60">
          <div className="col-xxl-8 col-xl-8 col-lg-10">
            <div className="section-title text-center">
              {/* <h5 className="section-title-subtitle mb-15">Naše usluge</h5> */}
              <h2 className="section-title text-green mb-35">
                Koje poslove možete povjeriti knjigovodstvenom birou "Panda"?
              </h2>
              {/* <p>
                Naš tim stručnjaka je tu da Vam pomogne u svim aspektima poslovanja - 
                od registracije firme do kompleksnih finansijskih analiza. Vjerujte nam 
                Vaše poslovanje i fokusirajte se na ono što najbolje radite.
              </p> */}
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="row">
          {servicesData.map((service) => (
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
              <div className="kservice-card h-100">
                <div className="kservice-card-icon text-center mb-25">
                  <i className={service.icon}></i>
                </div>
                <div className="kservice-card-content">
                  <h4 className="kservice-card-title mb-20">
                    <Link href={`/service-details/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h4>
                  <p className="kservice-card-description mb-25">
                    {service.shortDescription}
                  </p>
                  <div className="kservice-card-link">
                    <Link href={`/service-details/${service.slug}`} className="theme-btn-link">
                      Saznajte više <i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-60">
          <div className="col-12">
            <div className="services-cta text-center">
              <h3 className="mb-25">Potrebne su Vam naše usluge?</h3>
              <p className="mb-30">
                Kontaktirajte nas za besplatne konsultacije i saznajte kako možemo 
                pomoći Vašem poslovanju da raste i prosperira.
              </p>
              <Link href="/contact" className="theme-btn">
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent; 