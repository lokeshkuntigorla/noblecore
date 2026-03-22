import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import CEOSection from "../components/CEOSection";

function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: "ease-out-quad",
      offset: 100
    });
  }, []);

  return (
    <div className="about-wrapper bg-deep-black text-white">

      {/* ================= HERO ================= */}
      <section className="about-hero d-flex align-items-center text-center position-relative">
        <div className="container" data-aos="fade-up">
          <h1 className="fw-bold display-4 mb-3">
            About <span className="text-orange">NobleCore</span> Recruitment
          </h1>
          <p className="lead col-lg-8 mx-auto mb-4" data-aos="fade-up" data-aos-delay="200">
            Redefining quality hiring and workforce readiness through structured,
            ethical, and performance-driven recruitment solutions.
          </p>
        </div>
        <div className="hero-blob-orange"></div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-vision-section py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="mv-card p-5 rounded-4 h-100 position-relative overflow-hidden">
                <div className="mv-icon mb-4">🎯</div>
                <h2 className="fw-bold mb-4 text-orange h3">Our Mission</h2>
                <div className="mv-divider mb-4"></div>
                <p className="mv-text lead mb-0">
                  Empowering organizations by identifying <span className="text-yellow fw-bold">elite talent</span> and delivering ethical, results-driven recruitment solutions that bridge the gap between human potential and corporate excellence.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="mv-card p-5 rounded-4 h-100 position-relative overflow-hidden">
                <div className="mv-icon mb-4">👁️</div>
                <h2 className="fw-bold mb-4 text-orange h3">Our Vision</h2>
                <div className="mv-divider mb-4"></div>
                <p className="mv-text lead mb-0">
                  To be the <span className="text-yellow fw-bold">global benchmark</span> for professional consultancy and workforce transformation, recognized for redefining industry standards through integrity, innovation, and sustainable human capital growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="overview-section py-5 bg-deep-black">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="badge bg-orange text-white mb-3 px-3 py-2 rounded-pill fw-bold">ESTABLISHED 2025</span>
              <h2 className="mb-4 fw-bold display-6">Company Overview</h2>
              <p className="lead mb-4">
                NobleCore Recruitment (OPC) Private Limited is a modern manpower recruitment 
                and corporate consultancy firm, dedicated to enhancing organizational efficiency.
              </p>
              <p className="text-muted mb-4">
                We specialize in delivering quality-driven hiring solutions that
                enhance workforce productivity, retention, and measurable
                organizational growth.
              </p>
              <div className="row g-3">
                {[ "Ethical Hiring", "Quality First", "Structured Process", "Talent Readiness" ].map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="check-mark bg-orange text-white rounded-circle p-1" style={{width: "20px", height: "20px", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center"}}>✓</div>
                      <span className="fw-semibold text-light">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="overview-image-wrapper p-3 bg-dark-card shadow-lg rounded-4 border-orange-subtle">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Corporate Strategy Session" 
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CEO SECTION ================= */}
      <CEOSection darkMode={true} />

      {/* ================= USP SECTION ================= */}
      <section className="usp-banner py-5 text-white text-center position-relative overflow-hidden bg-dark-surface">
        <div className="banner-bg-dark"></div>
        <div className="container position-relative z-index-2" data-aos="fade-up">
          <h2 className="mb-4 text-orange fw-bold display-5">
            Our Unique Proposition
          </h2>
          <p className="col-lg-8 mx-auto lead mb-0 text-muted fst-italic">
            "Led by a Lean Six Sigma Master Black Belt, NobleCore ensures structured training, 
            process optimization, and performance-driven workforce transformation."
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-section py-5 bg-deep-black text-center">
        <div className="container py-4">
          <div data-aos="fade-up">
            <h2 className="mb-4 fw-bold display-6 text-white">Why Choose <span className="text-orange">NobleCore</span>?</h2>
          </div>

          <div className="row g-4 mt-2">
            {[
              { title: "Personality Development", icon: "✨", delay: 100 },
              { title: "Corporate Etiquette", icon: "👔", delay: 200 },
              { title: "Communication Skills", icon: "🗣️", delay: 300 },
              { title: "Professional Behavior", icon: "🤝", delay: 400 }
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="benefit-card p-4 bg-dark-card shadow-lg border-0 rounded-4 h-100 transition-hover border-orange-subtle">
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h5 className="fw-bold text-yellow">{item.title}</h5>
                  <p className="small text-muted mb-0">Enhancing employability through focused skill readiness.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
