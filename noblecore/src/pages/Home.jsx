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
      <section className="hero-section d-flex align-items-center position-relative overflow-hidden">
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-orange-subtle text-orange px-3 py-2 rounded-pill mb-3 fw-bold" data-aos="fade-up">PREMIUM RECRUITMENT SOLUTIONS</span>
              <h1 className="fw-bold display-4 mb-4 hero-title-reveal">
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
              <p className="lead mb-4 description-reveal">
                <span className="line-reveal" style={{ animationDelay: "1.4s" }}>
                  Redefining excellence in hiring and workforce readiness through elite,
                </span>
                <span className="line-reveal" style={{ animationDelay: "1.6s" }}>
                  ethical, and results-driven talent solutions.
                </span>
              </p>
              <div className="d-flex gap-3">
                <Link to="/services" className="btn btn-orange btn-pill shadow-lg hero-btn">
                  Our Services →
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-pill">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="hero-img-wrapper position-relative">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                  alt="Corporate Strategy Boardroom"
                  className="img-fluid rounded-4 shadow-2xl main-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-orange"></div>
      </section>

      {/* ================= ABOUT HIGHLIGHT ================= */}
      <section className="about-highlight py-5 bg-deep-black text-white">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="about-img-grid position-relative">
                <img src="https://images.unsplash.com/photo-1600880210830-804477c7391b?auto=format&fit=crop&q=80&w=800" alt="Professional Recruitment Team" className="img-fluid rounded-4 shadow-sm mb-4 border-dark-card" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h5 className="text-yellow fw-bold mb-3 tracking-widest">ABOUT NOBLECORE</h5>
              <h2 className="fw-bold mb-4 display-6">Bridging the Gap Between <span className="text-orange">Talent</span> and <span className="text-orange">Opportunity</span></h2>
              <p className="text-bright mb-4 fs-5" style={{ lineHeight: "1.7" }}>
                NobleCore Recruitment is a modern manpower recruitment and corporate consultancy firm
                dedicated to enhancing organizational efficiency through quality-driven hiring.
              </p>
              <div className="mb-5">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="check-icon-circle bg-orange-subtle text-orange">✓</div>
                  <span className="fw-semibold text-light">Ethical and Results-driven approach</span>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
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
      <section className="services-preview py-5 bg-dark-surface position-relative overflow-hidden">
        <div className="container py-5">
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
      <section className="why-preview py-5 bg-deep-black">
        <div className="container py-5">
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
      <section className="contact-teaser py-5 bg-dark-surface">
        <div className="container py-4">
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
                  <div className="teaser-contact-info px-md-5 border-start border-secondary">
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