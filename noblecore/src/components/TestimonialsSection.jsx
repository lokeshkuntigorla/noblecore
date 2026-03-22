import React from "react";
import "../styles/testimonials.css";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container py-5 text-center">
      <h2 className="fw-bold mb-5 mt-3" data-aos="fade-up">Testimonials</h2>

      <div className="row g-4">
        {[
          {
            name: "Rahul Sharma",
            text: "Excellent recruitment experience! The team was highly professional and helped us hire quality candidates quickly.",
            delay: 100
          },
          {
            name: "Pooja Verma",
            text: "Very transparent and smooth hiring process. Highly recommended consultancy services.",
            delay: 200
          },
          {
            name: "Amit Kulkarni",
            text: "NobleCore understood our hiring needs perfectly and delivered beyond expectations.",
            delay: 300
          }
        ].map((testimonial, index) => (
          <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={testimonial.delay}>
            <div className="card p-4 shadow testimonial-card h-100">
              <h5 className="fw-bold">{testimonial.name}</h5>
              <p className="mt-3">
                "{testimonial.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
