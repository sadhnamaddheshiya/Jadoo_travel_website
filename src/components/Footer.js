import React, { useState } from "react";
import fbIcon from "../assets/facebook.png";
import igIcon from "../assets/instragram.png";
import xIcon from "../assets/twitter.png";
import googlePlay from "../assets/google-play-badge.png";
import appleStore from "../assets/app-store-badge.png";
import shareImg from "../assets/share.png";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <footer 
    style={{ 
      background: "#f5f4f7", 
      paddingTop: "56px", 
      paddingBottom: "40px" }}>
      {/* Responsive Styles */}
      <style>
        {`
          /* Tablet */
          @media (max-width: 1024px) {
            .footer-main {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 30px;
              justify-content: center;
              text-align: center;
            }
            .footer-links {
              gap: 40px;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .subscribe-banner {
              padding: 30px 20px;
            }
            .subscribe-banner h3 {
              font-size: 1rem;
              line-height: 1.4rem;
            }
            .subscribe-banner form {
              flex-direction: column;
            }
            .footer-main {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 40px;
            }
            .footer-links {
              flex-direction: column;
              gap: 20px;
              align-items: center;
            }
            .footer-social {
              text-align: center;
            }
          }
        `}
      </style>

      {/* Subscription Banner */}
      <div
        className="subscribe-banner"
        style={{
          maxWidth: "900px",
          margin: "0 auto 60px auto",
          background: "#f8f7faff",
          borderRadius: "32px",
          boxShadow: "0 6px 48px rgba(65,56,43,0.08)",
          padding: "40px 30px",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Share Icon */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            background: "#f5f4f7",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <img src={shareImg} alt="Share" 
            style={{ 
              width: "45px", 
              height: "45px" 
              }} 
          />
        </div>

        <h3
          style={{
            fontSize: "1.18rem",
            fontWeight: 600,
            color: "#392d5b",
            marginBottom: "1.3rem",
          }}
        >
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h3>

        <form
          onSubmit={handleSubscribe}
          style={{
            display: "flex",
            gap: "12px",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: "0.7rem 1.1rem",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              outline: "none",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff7b54 0%, #ff4d4d 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.7rem 1.4rem",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div
        className="footer-main"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "40px",
        }}
      >
        {/* Logo */}
        <div style={{ minWidth: "160px" }}>
          <span
            style={{
              color: "#181e4b",
              fontWeight: "900",
              fontSize: "2rem",
              letterSpacing: "2px",
            }}
          >
            Jadoo.
          </span>
          <p style={{ color: "#5e6282", margin: "18px 0 0 0", fontSize: "1rem" }}>
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links" style={{ display: "flex", gap: "58px" }}>
          <div>
            <h4 style={{ color: "#181e4b", fontWeight: 700, marginBottom: "1.2rem", fontSize: "1.04rem" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#5e6282" }}>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#181e4b", fontWeight: 700, marginBottom: "1.2rem", fontSize: "1.04rem" }}>Contact</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#5e6282" }}>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#181e4b", fontWeight: 700, marginBottom: "1.2rem", fontSize: "1.04rem" }}>More</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#5e6282" }}>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social" style={{ minWidth: "180px", textAlign: "center" }}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "15px" }}>
            <img src={fbIcon} alt="facebook" style={{ width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer" }} />
            <img src={igIcon} alt="instagram" style={{ width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer" }} />
            <img src={xIcon} alt="twitter" style={{ width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer" }} />
          </div>
          <p style={{ color: "#5e6282", marginBottom: "7px", fontSize: "0.98rem" }}>Discover our app</p>
          <div style={{ display: "flex", gap: "9px", justifyContent: "center" }}>
            <img src={googlePlay} alt="Google Play" style={{ height: "40px" }} />
            <img src={appleStore} alt="Apple Store" style={{ height: "40px" }} />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: "center", color: "#5e6282", fontSize: "0.99rem", marginTop: "60px" }}>
        All rights reserved@jadoo.co
      </div>
    </footer>
  );
}

export default Footer;
