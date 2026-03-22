import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/employers.css";

function Employers() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  return (
    <section className="employers-section py-5 bg-deep-black text-white">
      <div className="container py-4">
        
        {/* Hero Content */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h5 className="text-yellow fw-bold mb-2">WHY CHOOSE US</h5>
          <h1 className="fw-bold display-4 mb-4">The <span className="text-orange">NobleCore</span> Advantage</h1>
          <p className="lead col-lg-9 mx-auto">
            At NobleCore Recruitment, we go beyond traditional hiring by preparing candidates for long-term success. 
            Our approach focuses on quality, cultural fit, and employee readiness.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          
          {/* Left Column: Visual/Card */}
          <div className="col-lg-6" data-aos="fade-up">
            <div className="highlight-card p-5 shadow-lg border-0 rounded-4 bg-dark-card border-orange-subtle transition-hover">
              <h4 className="fw-bold text-orange mb-4">Structured Training</h4>
              <p className="text-muted mb-4">
                Candidates placed through our process receive elite training in:
              </p>
              <ul className="list-unstyled training-list">
                {[ 
                  "Personality Development", 
                  "Communication Skills", 
                  "Corporate Etiquette", 
                  "Professional Behavior" 
                ].map((item, idx) => (
                  <li className="mb-3 d-flex align-items-center gap-3" key={idx}>
                    <span className="dot bg-orange shadow-orange"></span> 
                    <span className="text-light fw-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Methodology & Delivery */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="methodology-content">
              <h3 className="fw-bold mb-4 text-white">Our Methodology</h3>
              <p className="text-muted mb-4">
                Our Six Sigma-driven recruitment methodology ensures consistency, reliability, and measurable outcomes.
              </p>
              
              <div className="row g-4">
                {[
                  { title: "Quality-driven hiring solutions", icon: "✓" },
                  { title: "Reduced attrition through preparedness", icon: "✓" },
                  { title: "Skilled and industry-ready workforce", icon: "✓" },
                  { title: "Ethical and transparent engagement", icon: "✓" }
                ].map((item, index) => (
                  <div className="col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="delivery-item d-flex align-items-start gap-3">
                      <div className="icon-wrapper-orange bg-orange text-white rounded-circle d-flex align-items-center justify-content-center">
                        {item.icon}
                      </div>
                      <span className="fw-semibold text-light small uppercase-ls">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Text */}
        <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="400">
          <div className="partnership-box p-4 rounded-4 bg-dark-surface border-orange-subtle border-start border-orange border-4">
            <p className="mb-0 fs-5 text-muted fst-italic">
              "We build long-term partnerships by helping organizations achieve faster hiring, improved performance, and reduced operational costs."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Employers;
