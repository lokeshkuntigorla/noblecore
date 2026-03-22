import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name || !message) {
      alert("Please fill in your name and message.");
      return;
    }

    const whatsappNumber = "916302608832";
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section className="contact-wrapper py-5 bg-deep-black text-white position-relative">
      
      {/* Background Blobs */}
      <div className="contact-bg-blob-orange"></div>

      <div className="container position-relative z-index-2 py-4">

        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-orange-subtle text-orange px-3 py-2 rounded-pill mb-3 fw-bold">GET IN TOUCH</span>
          <h1 className="fw-bold display-4 mb-3 text-white">Contact <span className="text-orange">Us</span></h1>
          <p className="lead col-lg-8 mx-auto">
            Explore how NobleCore can support your hiring and workforce development needs. 
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          
          {/* Left Column: Contact Details + Image */}
          <div className="col-lg-5" data-aos="fade-up">
            <div className="d-flex flex-column h-100 gap-4">
              
              {/* Image Card */}
              <div className="contact-image-card rounded-4 overflow-hidden shadow-2xl flex-grow-1 border-orange-subtle">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                  alt="NobleCore Corporate Hub" 
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="image-overlay-text p-4 bg-dark-gradient">
                  <h4 className="fw-bold mb-0 text-white">Corporate Excellence</h4>
                  <p className="small mb-0 text-orange">Committed to your business goals</p>
                </div>
              </div>

              {/* Details in a compact grid */}
              <div className="contact-info-grid">
                <div className="info-item-small p-3 bg-dark-card border-orange-subtle rounded-3 border-start border-orange border-3 d-flex align-items-center gap-3">
                  <span className="fs-5">📞</span>
                  <div>
                    <h6 className="mb-0 small text-yellow fw-bold">Helpline</h6>
                    <p className="mb-0 small fw-bold text-white"><a href="tel:+919910135402" className="text-inherit">9910135402</a></p>
                  </div>
                </div>
                <div className="info-item-small p-3 bg-dark-card border-orange-subtle rounded-3 border-start border-orange border-3 d-flex align-items-center gap-3">
                  <span className="fs-5">✉️</span>
                  <div>
                    <h6 className="mb-0 small text-yellow fw-bold">Email</h6>
                    <p className="mb-0 small fw-bold text-white"><a href="mailto:info@noblecore.com" className="text-inherit">info@noblecore.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Form Card */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-form-card p-4 p-md-4 shadow-2xl bg-dark-card rounded-4 border-orange-subtle position-relative overflow-hidden h-100 d-flex flex-column justify-content-center">
              {!isSubmitted ? (
                <div className="form-content animate-fade-in">
                  <div className="mb-4">
                    <h3 className="fw-bold mb-2 text-white">Send us a Message</h3>
                    <p className="text-muted small">We'll respond within 24 hours.</p>
                  </div>
                  
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label mini-label-orange">Full Name</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control dark-input" 
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label mini-label-orange">Email Address</label>
                      <input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control dark-input" 
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                    <div className="col-12 mt-2">
                      <label className="form-label mini-label-orange">Subject</label>
                      <input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control dark-input" 
                        placeholder="Inquiry" 
                      />
                    </div>
                    <div className="col-12 mt-2">
                      <label className="form-label mini-label-orange">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control dark-input" 
                        rows="3" 
                        placeholder="Your message..." 
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-orange btn-pill w-100 py-3 fw-bold shadow-lg text-white">
                        Send via WhatsApp →
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="success-content text-center py-2 animate-slide-up">
                  <div className="success-icon-wrapper mb-3">
                    <div className="success-icon-circle-small bg-orange-subtle text-orange mx-auto d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", borderRadius: "50%" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <h3 className="fw-bold mb-2 text-white">Message Sent!</h3>
                  <p className="text-muted mb-4 small">Thank you! We'll contact you shortly.</p>
                  <button onClick={handleReset} className="btn btn-sm btn-outline-warning text-yellow px-4 py-2 fw-bold rounded-pill border-yellow">
                    ← Submit Another
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
