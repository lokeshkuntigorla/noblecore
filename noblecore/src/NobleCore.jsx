import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

function NobleCore() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const showSection = (section) => {
    setActiveSection(section);
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-warning" href="#">
            NobleCore Pvt Ltd
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <span className="nav-link" onClick={() => showSection("home")}>
                  Home
                </span>
              </li>
              <li className="nav-item mx-2">
                <span className="nav-link" onClick={() => showSection("about")}>
                  About
                </span>
              </li>
              <li className="nav-item mx-2">
                <span
                  className="nav-link"
                  onClick={() => showSection("services")}
                >
                  Services
                </span>
              </li>
              <li className="nav-item mx-2">
                <span
                  className="nav-link"
                  onClick={() => showSection("employers")}
                >
                  Employers
                </span>
              </li>
              <li className="nav-item mx-2">
                <span
                  className="nav-link"
                  onClick={() => showSection("testimonials")}
                >
                  Testimonials
                </span>
              </li>
              <li className="nav-item mx-2">
                <span
                  className="nav-link"
                  onClick={() => showSection("contact")}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: "90px" }} />

      {/* ================= HOME ================= */}
      {activeSection === "home" && (
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h1 className="fw-bold display-5">
                Discover the power of{" "}
                <span style={{ color: "#f4b400" }}>professional</span>{" "}
                recruiting
              </h1>
              <p className="mt-4">
                NobleCore delivers strategic hiring solutions and workforce
                excellence.
              </p>
              <button
                className="btn btn-warning text-white mt-3"
                onClick={() => showSection("services")}
              >
                Explore Services →
              </button>
            </div>

            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                alt="Hero"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>
      )}

      {/* ================= ABOUT ================= */}
      {activeSection === "about" && (
        <section className="container py-5 text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            About Us
          </h2>
          <p className="mb-5" data-aos="fade-up">
            We connect top-tier professionals with industry-leading companies
            through precision recruitment and modern workforce strategies.
          </p>
        </section>
      )}

      {/* ================= SERVICES ================= */}
      {activeSection === "services" && (
        <section className="container py-5 text-center">
          <h2 className="fw-bold mb-5" data-aos="fade-up">
            Our Services
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 shadow">
                <h5>Talent Acquisition</h5>
                <p>Strategic hiring across industries.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow">
                <h5>IT & Non-IT Hiring</h5>
                <p>Enterprise workforce recruitment.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow">
                <h5>Executive Search</h5>
                <p>Leadership talent placement.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= CONTACT ================= */}
      {activeSection === "contact" && (
        <section className="container py-5 text-center">
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <form className="card p-4 shadow-lg">
            <input className="form-control mb-3" placeholder="Your Name" />
            <input
              className="form-control mb-3"
              placeholder="Email Address"
            />
            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-warning text-white">
              Send Message
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default NobleCore;