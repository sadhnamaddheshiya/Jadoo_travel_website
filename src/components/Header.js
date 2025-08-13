import React, { useState, useEffect } from "react";
import heroImg from "../assets/girl.jpg";
import jadooLogoImg from "../assets/jadoo-logo.png";
import playButtonImg from "../assets/play-button.png";

function JadooLogo() {
  return (
    <img
      src={jadooLogoImg}
      alt="Jadoo Logo"
      style={{
        height: "40px",
        width: "auto",
        userSelect: "none",
      }}
    />
  );
}

function HeaderNav({ isMobile, isTablet }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        background: "#fff",
        padding: isMobile ? "15px" : "22px 5vw 12px 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f4ede9",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 3,
        flexWrap: "wrap",
      }}
    >
      <JadooLogo />

      {/* Hamburger for mobile */}
      {isMobile && (
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{ width: "25px", height: "3px", background: "#181e4b" }} />
          <span style={{ width: "25px", height: "3px", background: "#181e4b" }} />
          <span style={{ width: "25px", height: "3px", background: "#181e4b" }} />
        </div>
      )}

      {/* Navigation */}
      <ul
        style={{
          display: isMobile
            ? menuOpen
              ? "flex"
              : "none"
            : "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "1rem" : "2.6rem",
          alignItems: "center",
          listStyle: "none",
          padding: isMobile ? "1rem" : 0,
          margin: 0,
          flex: isMobile ? "100%" : 1,
          justifyContent: isMobile ? "flex-start" : "center",
          background: isMobile ? "#fff" : "transparent",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <li style={{ fontWeight: 600, color: "#181e4b", cursor: "pointer" }}>Destinations</li>
        <li style={{ fontWeight: 600, color: "#181e4b", cursor: "pointer" }}>Hotels</li>
        <li style={{ fontWeight: 600, color: "#181e4b", cursor: "pointer" }}>Flights</li>
        <li style={{ fontWeight: 600, color: "#181e4b", cursor: "pointer" }}>Bookings</li>

        {/* Add Login/Signup/EN inside mobile menu too */}
        {isMobile && (
          <>
            <li style={{ color: "#181e4b", fontWeight: 600, cursor: "pointer" }}>Login</li>
            <li>
              <button
                style={{
                  border: "1.5px solid #181e4b",
                  background: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  padding: "7px 25px",
                  color: "#181e4b",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Sign up
              </button>
            </li>
            <li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.33rem",
                  cursor: "pointer",
                  color: "#181e4b",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                EN <span style={{ fontSize: "1.13em" }}>▼</span>
              </div>
            </li>
          </>
        )}
      </ul>

      {/* Right side actions for desktop */}
      {!isMobile && (
        <ul
          style={{
            display: "flex",
            gap: "1.4rem",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={{ color: "#181e4b", fontWeight: 600, cursor: "pointer" }}>Login</li>
          <li>
            <button
              style={{
                border: "1.5px solid #181e4b",
                background: "none",
                fontWeight: 600,
                borderRadius: "8px",
                padding: "7px 25px",
                color: "#181e4b",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Sign up
            </button>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.33rem",
                cursor: "pointer",
                color: "#181e4b",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              EN <span style={{ fontSize: "1.13em" }}>▼</span>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  return (
    <header>
      <HeaderNav isMobile={isMobile} isTablet={isTablet} />

      <div
        className="hero-section"
        style={{
          minHeight: "520px",
          background: "#fff2de",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "20px" : "48px 5vw 0 5vw",
          flexWrap: "wrap",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div style={{ maxWidth: "530px", flex: "1 1 300px" }}>
          <p
            style={{
              color: "#DF6951",
              fontWeight: 600,
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            BEST DESTINATIONS AROUND THE WORLD
          </p>
          <h1
            style={{
           
            fontSize: isMobile ? "1.8rem" : "2.8rem",
            width: "545",
            height: "267",

            angle: "0 deg",
            opacity: "1",
            top: "271px",
            left: "150px",
            }}
          >
            Travel, enjoy<br />
            and live a new<br />
            and full life
          </h1>
          <p
            style={{
              color: "#5E6282",
              fontSize: isMobile ? "0.95rem" : "1.08rem",
              lineHeight: "1.6",
              marginBottom: "2.2rem",
            }}
          >
            Life is either a daring adventure or nothing at all.
            Because the world is a book, and those who do not travel read only one page.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1.2rem",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button
              style={{
                background: "#f1a501",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                padding: "0.8rem 1.9rem",
                fontSize: "1.07rem",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(241,165,1,0.18)",
              }}
            >
              Find out more
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                background: "none",
                border: "none",
                color: "#686d8a",
                fontWeight: "500",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "2.2em",
                  height: "2.2em",
                  boxShadow: "0 2px 10px #eee",
                  marginRight: "0.7em",
                }}
              >
                <img
                  src={playButtonImg}
                  alt="Play"
                  style={{
                    width: "250%",
                    height: "250%",
                    objectFit: "contain",
                  }}
                />
              </span>
              Play Demo
            </button>
          </div>
        </div>

        <div
          style={{
            minWidth: isMobile ? "100%" : "700px",
            maxWidth: isMobile ? "100%" : "780px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: isMobile ? "20px" : "0",
          }}
        >
          <img
            src={heroImg}
            alt="Traveler"
            style={{
              width: isMobile ? "90%" : "500px",
              height: isMobile ? "auto" : "500px",
              objectFit: "cover",
              borderRadius: "1.4rem",
              marginBottom: "1.2rem",
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
