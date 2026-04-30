import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";

import CEOSection from "../components/CEOSection";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
      offset: 100,
    });
  }, []);

  return (
    <div className="home-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section position-relative overflow-hidden">
        {/* Animated Background */}
        <div className="hero-premium-bg">
          <div className="animated-gradient"></div>
          
          {/* Floating Shapes */}
          <div className="floating-shapes">
            {/* Circles */}
            <div className="floating-element shape-circle float-slow" style={{ width: '40px', height: '40px', top: '15%', left: '10%' }}></div>
            <div className="floating-element shape-circle float-med" style={{ width: '20px', height: '20px', top: '70%', left: '15%' }}></div>
            <div className="floating-element shape-circle float-fast" style={{ width: '60px', height: '60px', top: '40%', right: '12%' }}></div>
            <div className="floating-element shape-circle float-slow" style={{ width: '30px', height: '30px', top: '25%', left: '45%' }}></div>
            <div className="floating-element shape-circle float-med" style={{ width: '15px', height: '15px', bottom: '30%', right: '25%' }}></div>
            
            {/* Triangles */}
            <div className="floating-element shape-triangle float-med" style={{ top: '25%', right: '20%', transform: 'rotate(15deg)' }}></div>
            <div className="floating-element shape-triangle float-slow" style={{ bottom: '20%', left: '25%', transform: 'rotate(-25deg)' }}></div>
            <div className="floating-element shape-triangle float-fast" style={{ top: '60%', right: '35%', transform: 'rotate(45deg)' }}></div>
            <div className="floating-element shape-triangle float-med" style={{ top: '10%', left: '30%', transform: 'rotate(-10deg)', borderBottomColor: 'rgba(245, 124, 0, 0.4)' }}></div>
            
            {/* Waves */}
            <svg className="floating-element shape-wave float-slow" width="100" height="30" viewBox="0 0 100 30" style={{ top: '10%', right: '5%' }}>
              <path d="M0,15 Q25,0 50,15 T100,15" />
            </svg>
            <svg className="floating-element shape-wave float-med" width="120" height="40" viewBox="0 0 120 40" style={{ bottom: '15%', right: '15%', transform: 'rotate(-10deg)' }}>
              <path d="M0,20 Q30,0 60,20 T120,20" />
            </svg>
          </div>
        </div>

        <div className="container position-relative z-index-2">
          <div className="hero-content-limit">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <span className="badge bg-orange-subtle text-orange px-3 py-2 rounded-pill mb-4 fw-bold tracking-widest text-uppercase" style={{ fontSize: '0.75rem' }} data-aos="fade-up">
                  Next-Gen Recruitment
                </span>
                
                <h1 className="fw-bold display-4 mb-4 hero-title-reveal mx-auto mx-lg-0" style={{ lineHeight: '1.2' }}>
                  {["Connecting", "Talent", "with"].map((word, i) => (
                    <span key={i} className="word-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                      {word}&nbsp;
                    </span>
                  ))}
                  <br />
                  <span className="text-orange highlight-word">
                    {"Opportunity".split("").map((char, i) => (
                      <span key={i} className="char-reveal" style={{ animationDelay: `${0.6 + i * 0.05}s` }}>
                        {char}
                      </span>
                    ))}
                  </span>
                </h1>

                <div className="description-reveal mb-5 mx-auto mx-lg-0">
                  <p className="lead text-muted mx-auto mx-lg-0" style={{ maxWidth: "600px" }}>
                    <span className="line-reveal" style={{ animationDelay: "1.4s" }}>
                      NobleCore delivers strategic hiring solutions and workforce excellence
                    </span>
                    <span className="line-reveal" style={{ animationDelay: "1.6s" }}>
                      for the modern enterprise.
                    </span>
                  </p>
                </div>

                <div className="d-flex flex-wrap gap-3 mb-5 justify-content-center justify-content-lg-start">
                  <Link to="/services" className="btn btn-orange btn-pill px-4 py-3 shadow-lg">
                    Our Services <span className="ms-2">→</span>
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-pill px-4 py-3">
                    Contact Us
                  </Link>
                </div>

                <div className="hero-trust-line mb-5 justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-delay="1800">
                  <div className="trust-dots">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="trust-dot"></div>
                    ))}
                  </div>
                  <span className="text-muted small fw-medium">Trusted by 100+ global enterprises</span>
                </div>
              </div>

              <div className="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="400">
                <div className="hero-img-wrapper position-relative mx-auto" style={{ maxWidth: "550px" }}>
                  
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                    alt="Corporate Strategy Boardroom"
                    className="img-fluid rounded-4 main-hero-img"
                    fetchPriority="high"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT HIGHLIGHT ================= */}
      <section className="about-highlight section-py bg-deep-black text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up">
              <div className="about-img-grid position-relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Professional Recruitment Team" className="img-fluid rounded-4 shadow-sm mb-4 border-dark-card" fetchPriority="high" loading="eager" decoding="sync" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
              <h5 className="text-yellow fw-bold mb-3 tracking-widest">ABOUT NOBLECORE</h5>
              <h2 className="fw-bold mb-4 display-6">Bridging the Gap Between <span className="text-orange">Talent</span> and <span className="text-orange">Opportunity</span></h2>
              <p className="text-bright mb-4 fs-5" style={{ lineHeight: "1.7" }}>
                NobleCore Recruitment is a modern manpower recruitment and corporate consultancy firm
                dedicated to enhancing organizational efficiency through quality-driven hiring.
              </p>
              <div className="mb-5">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3">
                  <div className="check-icon-circle bg-orange-subtle text-orange">✓</div>
                  <span className="fw-semibold text-light">Ethical and Results-driven approach</span>
                </div>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3">
                  <div className="check-icon-circle bg-orange-subtle text-orange">✓</div>
                  <span className="fw-semibold text-light">Customized hiring for IT & Non-IT sectors</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-orange btn-pill fw-bold">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CEO SECTION ================= */}
      <CEOSection darkMode={true} />

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="services-preview section-py bg-dark-surface position-relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h5 className="text-yellow fw-bold mb-3">OUR SERVICES</h5>
            <h2 className="fw-bold display-6 mb-3 text-white">Delivering Excellence Across Sectors</h2>
            <div className="mx-auto bg-orange" style={{ width: "60px", height: "4px", borderRadius: "2px" }}></div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Manpower Recruitment",
                icon: "👥",
                desc: "Permanent & contractual staffing solutions with end-to-end management.",
                delay: 100
              },
              {
                title: "Corporate Consultancy",
                icon: "💼",
                desc: "HR process optimization and workforce planning for strategic growth.",
                delay: 200
              },
              {
                title: "Specialized Hiring",
                icon: "🚀",
                desc: "Expert hiring for IT, Non-IT, KPO, BPO and RPO sectors with precision.",
                delay: 300
              }
            ].map((item, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="service-mini-card p-5 bg-dark-card shadow-sm border-0 rounded-4 text-center h-100 transition-hover outline-hover-orange">
                  <div className="fs-1 mb-4">{item.icon}</div>
                  <h4 className="fw-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-muted mb-4">{item.desc}</p>
                  <Link to="/services" className="text-orange text-decoration-none fw-bold small tracking-widest">
                    Explore Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US PREVIEW ================= */}
      <section className="why-preview section-py bg-deep-black">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h5 className="text-yellow fw-bold mb-3">WHY TRUST US</h5>
              <h2 className="fw-bold display-6 mb-4 text-white">A Methodology Driven by <span className="text-orange">Precision</span></h2>
              <p className="text-muted mb-4 fs-6">
                We specialize in delivering quality-driven hiring solutions that
                enhance workforce productivity, retention, and measurable
                organizational growth.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="benefit-item p-3 bg-dark-card rounded-3 d-flex align-items-center gap-2 border-dark-card">
                    <span className="text-orange fw-bold">✓</span> <span className="small fw-semibold text-light">Reduced Attrition</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="benefit-item p-3 bg-dark-card rounded-3 d-flex align-items-center gap-2 border-dark-card">
                    <span className="text-orange fw-bold">✓</span> <span className="small fw-semibold text-light">Quality Solutions</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="benefit-item p-3 bg-dark-card rounded-3 d-flex align-items-center gap-2 border-dark-card">
                    <span className="text-orange fw-bold">✓</span> <span className="small fw-semibold text-light">Skilled Workforce</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="benefit-item p-3 bg-dark-card rounded-3 d-flex align-items-center gap-2 border-dark-card">
                    <span className="text-orange fw-bold">✓</span> <span className="small fw-semibold text-light">Ethical Engagement</span>
                  </div>
                </div>
              </div>
              <Link to="/employers" className="btn btn-orange btn-pill fw-bold">
                Employers Guide
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="methodology-visual p-0 rounded-4 shadow-lg text-white text-center border-orange-glow overflow-hidden position-relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Process Excellence" className="w-100 h-100 object-fit-cover opacity-50" style={{ minHeight: "300px" }} />
                <div className="position-absolute top-50 start-50 translate-middle w-100 px-4">
                  <h3 className="fw-bold mb-3 text-yellow">Six Sigma Driven</h3>
                  <p className="mb-0 opacity-90 fw-medium">Our methodology ensures consistency, reliability, and measurable outcomes for every placement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT TEASER ================= */}
      <section className="contact-teaser section-py bg-dark-surface">
        <div className="container">
          <div className="contact-teaser-card p-5 bg-deep-black text-white rounded-4 shadow-2xl text-center position-relative overflow-hidden border-orange-subtle" data-aos="fade-up">
            <div className="teaser-bg-overlay-orange"></div>
            <div className="position-relative z-index-2">
              <h2 className="fw-bold display-6 mb-3">Ready to Build Your <span className="text-orange">Future</span>?</h2>
              <p className="opacity-75 mb-5 col-lg-8 mx-auto">Get in touch today for professional recruitment solutions tailored to your business needs.</p>

              <div className="row g-4 justify-content-center mb-5">
                <div className="col-auto">
                  <div className="teaser-contact-info">
                    <h6 className="text-yellow small mb-1 tracking-widest">HELPLINE</h6>
                    <p className="mb-0 fw-bold">9910135402</p>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="teaser-contact-info px-md-5">
                    <h6 className="text-yellow small mb-1 tracking-widest">EMAIL</h6>
                    <p className="mb-0 fw-bold">info@noblecore.com</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn-orange btn-pill fw-bold shadow-lg">
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;