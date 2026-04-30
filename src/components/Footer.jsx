import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-deep-black text-white pt-5 pb-4 border-top border-orange-subtle">
      <div className="container">
        <div className="row g-4 mb-5">
          
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-4 text-orange">NobleCore Recruitment</h4>
            <p className="text-muted mb-4 pe-lg-5">
              Empowering organizations with ethical, quality-driven recruitment solutions and structured workforce transformation.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="https://www.linkedin.com/company/noblecore-recruitment/" target="_blank" rel="noopener noreferrer" className="social-icon-box"><FaLinkedin /></a>
              <a href="https://www.instagram.com/noblecorerecruitment?igsh=MWwxcHh3bGUxeTNheA==" target="_blank" rel="noopener noreferrer" className="social-icon-box"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 text-yellow uppercase-ls">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/employers">Employers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4 text-yellow uppercase-ls">Candidate Helpline</h5>
            <div className="footer-contact-item mb-3">
                <p className="mb-0 text-muted small uppercase">Phone & WhatsApp</p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                    <FaWhatsapp className="text-orange" />
                    <a href="https://wa.me/919910135402" className="small fw-semibold text-white text-decoration-none">9910135402</a>
                </div>
            </div>
            <div className="footer-contact-item mb-3">
                <p className="mb-0 text-muted small uppercase">Submit Resume</p>
                <a href="mailto:chetanya@noblecore-hr.in" className="small fw-semibold text-white text-decoration-none">chetanya@noblecore-hr.in</a>
            </div>
          </div>

          {/* Contact Details 2 */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4 text-yellow uppercase-ls">General Contact</h5>
            <div className="footer-contact-item mb-3">
                <p className="mb-0 text-muted small uppercase">Inquiries</p>
                <a href="mailto:chetanya@noblecore-hr.in" className="small fw-semibold text-white text-decoration-none">chetanya@noblecore-hr.in</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom pt-4 border-top border-dark-surface text-center">
          <p className="mb-0 text-muted small">
            &copy; {new Date().getFullYear()} <span className="text-orange fw-bold">NobleCore Recruitment</span> (OPC) Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;