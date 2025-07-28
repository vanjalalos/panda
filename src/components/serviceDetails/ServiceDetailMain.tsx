import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import { ServiceDetail } from '@/data/services-data';

interface ServiceDetailMainProps {
  service: ServiceDetail;
}

const ServiceDetailMain: React.FC<ServiceDetailMainProps> = ({ service }) => {
  const formatDescription = (description: string) => {
    return description.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-20">
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      <Breadcrumb 
        title={service.title}
        subTitle="Usluge"
      />
      
      <section className="service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="service-details-wrapper">
                {/* Service Header */}
                <div className="service-details-header mb-40">
                  <div className="service-details-icon mb-30">
                    <i className={`${service.icon} theme-color`} style={{ fontSize: '60px' }}></i>
                  </div>
                  <h2 className="service-details-title mb-25">{service.title}</h2>
                  <div className="service-details-meta mb-30">
                    {service.duration && (
                      <span className="service-meta-item">
                        <i className="far fa-clock theme-color"></i>
                        <strong>Trajanje:</strong> {service.duration}
                      </span>
                    )}
                    {service.price && (
                      <span className="service-meta-item">
                        <i className="far fa-money-bill-alt theme-color"></i>
                        <strong>Cijena:</strong> {service.price}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Description */}
                <div className="service-details-content mb-50">
                  <div className="service-details-description">
                    {formatDescription(service.fullDescription)}
                  </div>
                </div>

                {/* Features & Benefits */}
                <div className="row mb-50">
                  <div className="col-md-6">
                    <div className="service-features">
                      <h4 className="section-subtitle mb-25 theme-color">
                        <i className="fas fa-check-circle mr-10"></i>
                        Šta obuhvata
                      </h4>
                      <ul className="service-list">
                        {service.features.map((feature, index) => (
                          <li key={index}>
                            <i className="fas fa-check theme-color"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-benefits">
                      <h4 className="section-subtitle mb-25 theme-color">
                        <i className="fas fa-star mr-10"></i>
                        Prednosti
                      </h4>
                      <ul className="service-list">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>
                            <i className="fas fa-star theme-color"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="service-process mb-50">
                  <h4 className="section-subtitle mb-30 theme-color">
                    <i className="fas fa-cogs mr-10"></i>
                    Proces rada
                  </h4>
                  <div className="process-steps">
                    {service.process.map((step, index) => (
                      <div className="process-step" key={index}>
                        <div className="step-number">
                          <span>{index + 1}</span>
                        </div>
                        <div className="step-content">
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="service-cta">
                  <div className="cta-content text-center">
                    <h3 className="mb-20">Zainteresovani ste za ovu uslugu?</h3>
                    <p className="mb-30">
                      Kontaktirajte nas za besplatne konsultacije i detaljne informacije 
                      o tome kako možemo pomoći vašem poslovanju.
                    </p>
                    <div className="cta-buttons">
                      <Link href="/contact" className="theme-btn mr-15">
                        Kontaktirajte nas
                      </Link>
                      <Link href="/service" className="theme-btn border-btn">
                        Sve usluge
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-details-sidebar">
                
                {/* Contact Info */}
                <div className="sidebar-widget contact-widget mb-40">
                  <h4 className="widget-title mb-25">Kontakt informacije</h4>
                  <div className="contact-info">
                    <div className="contact-item mb-20">
                      <i className="fas fa-phone theme-color"></i>
                      <div className="contact-content">
                        <span>Telefon</span>
                        <a href="tel:+38765123456">+387 65 123 456</a>
                      </div>
                    </div>
                    <div className="contact-item mb-20">
                      <i className="fas fa-envelope theme-color"></i>
                      <div className="contact-content">
                        <span>Email</span>
                        <a href="mailto:info@panda.ba">info@panda.ba</a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt theme-color"></i>
                      <div className="contact-content">
                        <span>Bulevar vojvode Stepe Stepanovića 59</span>
                        <p>Banja Luka, Republika Srpska</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Quote */}
                <div className="sidebar-widget quote-widget">
                  <h4 className="widget-title mb-25">Brza ponuda</h4>
                  <p className="mb-25">
                    Pošaljite nam upit za ovu uslugu i dobićete odgovor u najkraćem roku.
                  </p>
                  <Link href="/contact" className="theme-btn w-100 text-center">
                    Zatražite ponudu
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailMain; 