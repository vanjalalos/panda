"use client"
import Link from "next/link";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Greška pri slanju poruke. Molimo pokušajte ponovo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-area pt-120 pb-80 fix">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section-title-wrapper mb-15">
              <h5 className="section-subtitle mb-20">kontaktirajte nas</h5>
              <h2 className="section-title">Tu smo za savjet i pomoć</h2>
            </div>
            <div className="contact-info mr-50 mr-xs-0  mr-md-0">
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <Link href="#">
                    <i className="fas fa-phone-alt"></i>
                  </Link>
                </div>
                <div className="contact-info-text mt-10">
                  <span>pozovite nas</span>
                  <h5>
                    <Link href="tell:926668880000">+ 387 65 314 131</Link>
                  </h5>
                </div>
              </div>
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <Link href="#">
                    <i className="fal fa-envelope"></i>
                  </Link>
                </div>
                <div className="contact-info-text mt-10">
                  <span>pošaljite e-mail</span>
                  <h5>
                    <Link href="mailto:office@panda.ba">office@panda.ba</Link>{" "}
                  </h5>
                </div>
              </div>
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <Link href="#">
                    <i className="fal fa-map-marker-alt"></i>
                  </Link>
                </div>
                <div className="contact-info-text mt-10">
                  <span>posjetite nas</span>
                  <h5>
                                                <Link href="#">Bulevar vojvode Stepe Stepanovića 59, 78000 Banja Luka, Bosna i Hercegovina</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="contact-form">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Vaše ime" 
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email adresa" 
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Telefon" 
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Predmet" 
                    />
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Napišite poruku"
                    ></textarea>
                  </div>
                  <div className="col-xxl-12 col-xl-12 mb-20">
                    {submitStatus.type && (
                      <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-20`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <button 
                      type="submit" 
                      className="theme-btn border-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Slanje...' : 'Pošalji poruku'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
