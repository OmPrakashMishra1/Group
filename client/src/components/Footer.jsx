import React from "react";
import { Twitter, Instagram, Linkedin, Heart, Phone, PenLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP ROW – 3 COLUMNS */}
      <div className="footer-top">
        <div className="footer-col">
          <h4>About Campus Log</h4>
          <a href="#about">About Us</a>
          <a href="#team">Our Team</a>
          <a href="#careers">Careers</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#exams">Entrance Exams Guide</a>
          <a href="#universities">University Directory</a>
          <a href="#community">Student Community</a>
          <a href="#blog">Blog & Articles</a>
          <a href="#support">Help & Support</a>
        </div>

        <div className="footer-col">
          <h4>For Colleges</h4>
          <a href="#partner">Partner With Us</a>
          <a href="#list-college">List Your College</a>
          <a href="#advertise">Advertising / Sales</a>
          <a href="#api">Developer API</a>
        </div>
      </div>

      {/* MIDDLE ROW – BRAND + CONTACT + CONTRIBUTE + FOLLOW */}
      <div className="footer-middle">
        {/* Brand */}
        <div className="footer-brand-block">
          <div className="footer-logo-mark">🎓</div>
          <div className="footer-logo-text">
            <span className="footer-logo-main">Campus</span>
            <span className="footer-logo-sub">Log</span>
          </div>
        </div>

        {/* Get in touch */}
        <div className="footer-pill-block">
          <h5>Get in Touch</h5>
          <button className="footer-pill">
            <Phone size={16} />
            8826978461
          </button>
        </div>

        {/* Contribute */}
        <div className="footer-pill-block">
          <h5>Contribute</h5>
          <button className="footer-pill">
            <PenLine size={16} />
            Write a Review
          </button>
        </div>

        {/* Follow us */}
        <div className="footer-follow-block">
          <h5>Follow Us</h5>
          <div className="footer-follow-icons">
            <a href="#"><Twitter size={16} /></a>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW – COPYRIGHT */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Campus Log. Made with{" "}
          <Heart size={12} fill="#00e054" color="#00e054" /> for students.
        </span>
      </div>
    </footer>
  );
}

