"use client"
import Link from "next/link";
import React, { useState } from "react";

const PriceInquirySection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: [] as string[],
    pdvObligation: [] as string[],
    entrepreneurType: [] as string[],
    employees: '',
    incomingInvoices: '',
    outgoingInvoices: '',
    monthlyStatements: '',
    phone: '',
    email: '',
    additionalQuestion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...prev[name as keyof typeof prev] as string[], value]
        : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/price-inquiry', {
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
          companyName: '',
          businessType: [],
          pdvObligation: [],
          entrepreneurType: [],
          employees: '',
          incomingInvoices: '',
          outgoingInvoices: '',
          monthlyStatements: '',
          phone: '',
          email: '',
          additionalQuestion: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Greška pri slanju upita. Molimo pokušajte ponovo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-area pt-120 pb-80 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="section-title-wrapper mb-15 text-center">
              <h5 className="section-subtitle mb-20">Upit za cijenu</h5>
                              <h2 className="section-title text-green">Besplatna procjena vaših troškova</h2>
            </div>
                        <div className="contact-form">
              <form id="price-inquiry-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Unesite naziv firme" 
                    />
                  </div>
                  
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <label className="form-label">Način obavljanja djelatnosti kao:</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="doo" 
                          name="businessType" 
                          value="DOO"
                          checked={formData.businessType.includes('DOO')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="doo">DOO</label>
                      </div>
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="sp" 
                          name="businessType" 
                          value="SP"
                          checked={formData.businessType.includes('SP')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="sp">SP</label>
                      </div>
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="udruzenje" 
                          name="businessType" 
                          value="UDRUŽENJE"
                          checked={formData.businessType.includes('UDRUŽENJE')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="udruzenje">UDRUŽENJE</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <label className="form-label">Da li ste PDV obveznik?</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="pdv_da" 
                          name="pdvObligation" 
                          value="DA"
                          checked={formData.pdvObligation.includes('DA')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pdv_da">DA</label>
                      </div>
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="pdv_ne" 
                          name="pdvObligation" 
                          value="NE"
                          checked={formData.pdvObligation.includes('NE')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pdv_ne">NE</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <label className="form-label">Da li ste mali ili veliki preduzetnik?</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="mali" 
                          name="entrepreneurType" 
                          value="MALI"
                          checked={formData.entrepreneurType.includes('MALI')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="mali">MALI</label>
                      </div>
                      <div className="checkbox-item">
                        <input 
                          type="checkbox" 
                          id="veliki" 
                          name="entrepreneurType" 
                          value="VELIKI"
                          checked={formData.entrepreneurType.includes('VELIKI')}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="veliki">VELIKI</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <input 
                      type="text" 
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      placeholder="Unesite broj zaposlenih" 
                    />
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <input 
                      type="text" 
                      name="incomingInvoices"
                      value={formData.incomingInvoices}
                      onChange={handleInputChange}
                      placeholder="Unesite prosječan broj mjesečnih ulaznih računa" 
                    />
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <input 
                      type="text" 
                      name="outgoingInvoices"
                      value={formData.outgoingInvoices}
                      onChange={handleInputChange}
                      placeholder="Unesite prosječan broj mjesečnih izlaznih računa" 
                    />
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <input 
                      type="text" 
                      name="monthlyStatements"
                      value={formData.monthlyStatements}
                      onChange={handleInputChange}
                      placeholder="Unesite prosječan broj mjesečnih izvoda" 
                    />
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Broj telefona" 
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

                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <label className="form-label">Imate dodatnih pitanja ili informacija?</label>
                    <textarea 
                      name="additionalQuestion"
                      value={formData.additionalQuestion}
                      onChange={handleInputChange}
                      placeholder=""
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
                      {isSubmitting ? 'Slanje...' : 'Pošalji upit za cijenu'}
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

export default PriceInquirySection; 