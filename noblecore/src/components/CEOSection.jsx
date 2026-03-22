import React from "react";
import ceo from "../images/ceo.jpeg";
import "./CEOSection.css";

function CEOSection({ darkMode = true }) {
  return (
    <section className={`ceo-section py-5 ${darkMode ? 'bg-deep-black' : 'bg-light'}`}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image Side */}
          <div className="col-lg-5" data-aos="fade-up">
            <div className="ceo-image-wrapper border-orange-subtle shadow-2xl">
              <img
                src={ceo}
                alt="Chetanya Singh - Founder & CEO"
                className="ceo-img"
              />
              <div className="ceo-overlay-p">
                <h4 className="fw-bold mb-0 text-white">Chetanya Singh</h4>
                <p className="small mb-0 text-orange fw-bold tracking-widest">FOUNDER & CEO</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h5 className="text-yellow fw-bold mb-3 tracking-widest">LEADERSHIP VISION</h5>
            <h2 className="ceo-title text-white fw-bold mb-4 display-5">Driving Strategic <span className="text-orange">Excellence</span></h2>

            <div className="ceo-quote-box p-4 bg-dark-surface border-start border-orange border-4 mb-4 rounded-3">
              <p className="ceo-quote mb-0 text-light fst-italic">
                “Our mission is to build a scalable, trusted recruitment brand that drives
                measurable business growth — not just closures.”
              </p>
            </div>

            <p className="ceo-desc text-muted mb-4 lead-sm">
              NobleCore operates with a sophisticated, ethical, and performance-driven
              recruitment methodology. We don't just fill roles; we catalyze
              long-term workforce evolution and drive measurable business outcomes.
            </p>

            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="text-orange fw-bold">✓</span>
                  <span className="text-light small fw-semibold">Lean Six Sigma Excellence</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-orange fw-bold">✓</span>
                  <span className="text-light small fw-semibold">Performance-Driven Results</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="text-orange fw-bold">✓</span>
                  <span className="text-light small fw-semibold">Ethical Talent Sourcing</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-orange fw-bold">✓</span>
                  <span className="text-light small fw-semibold">Workforce Transformation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CEOSection;