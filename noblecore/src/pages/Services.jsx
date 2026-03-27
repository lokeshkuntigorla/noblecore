import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/services.css";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-quad" });
  }, []);

  const servicesData = [
    {
      title: "Manpower Recruitment",
      points: [
        "Permanent & contractual staffing solutions",
        "End-to-end recruitment lifecycle management",
        "Candidate sourcing, screening, evaluation, and onboarding support",
      ],
      description: "We provide permanent and contractual staffing solutions with end-to-end recruitment lifecycle management.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Corporate Consultancy",
      points: [
        "HR process optimization",
        "Workforce planning & performance improvement",
        "Strategic talent development programs",
      ],
      description: "We help organizations optimize HR processes and improve workforce planning through strategic consulting.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Specialized Hiring",
      points: [
        "Expert hiring for IT & Non-IT sectors",
        "KPO, BPO & RPO specialist recruitment",
        "Niche and volume hiring with precision",
      ],
      description: "We offer expert hiring solutions for IT, Non-IT, and Outsourcing sectors with professional precision.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="services-section py-5 bg-deep-black text-white">
      <div className="container py-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <h5 className="text-yellow fw-bold mb-2">SERVICES OFFERED</h5>
          <h2 className="fw-bold display-5 text-white">Our Enterprise <span className="text-orange">Solutions</span></h2>
        </div>
      {servicesData.map((service, index) => (
        <div
          className={`row align-items-center mb-5 service-card-container ${
            index % 2 !== 0 ? "flex-lg-row-reverse" : ""
          }`}
          key={index}
        >
          {/* Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0" data-aos="fade-up">
            <div className="image-hover-wrapper rounded-4 overflow-hidden border-orange-subtle shadow-lg">
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="card bg-dark-card border-0 shadow-lg p-4 p-md-5 rounded-4 h-100">
              <h3 className="fw-bold text-orange mb-4">{service.title}</h3>
              <ul className="list-unstyled service-list">
                {service.points.map((point, i) => (
                  <li key={i} className="mb-3 d-flex align-items-start">
                    <span className="text-yellow me-3 fw-bold">✓</span> 
                    <span className="text-white fw-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-0 fst-italic fs-6 text-muted">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Services;
