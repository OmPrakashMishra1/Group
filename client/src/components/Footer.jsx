import React from "react";
import { Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#api">API</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <Twitter size={16} />
          <Instagram size={16} />
          <Linkedin size={16} />
        </div>

        <div className="footer-copy">
          © 2025 Campus Log. Made with{" "}
          <Heart size={12} fill="#00e054" color="#00e054" />
        </div>
      </div>
    </footer>
  );
}
