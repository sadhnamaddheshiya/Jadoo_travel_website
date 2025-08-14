import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import heroImg from "../assets/girl.jpg";
import logoImg from "../assets/jadoo-logo.png";
import playIcon from "../assets/play-button.png";

export default function HeaderHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  const navLinks = ["Destinations", "Hotels", "Flights", "Bookings", "Login"];

  return (
    <header
      style={{
        background: "linear-gradient(to right, #f6e7ff 50%, #fff2de 50%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "15px" : "22px 5vw 0 5vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            borderBottom: "1px solid #f4ede9",
            flexWrap: "wrap",
            gap: "1rem",
            position: "relative",
          }}
        >
          <img src={logoImg} alt="Logo" style={{ height: "40px" }} />
          {!isMobile ? (
            <ul
              style={{
                display: "flex",
                gap: isTablet ? "1.5rem" : "2.5rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
                alignItems: "center",
              }}
            >
              {navLinks.map((item) => (
                <li
                  key={item}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </li>
              ))}
              <li
                style={{
                  background: "#ff6b35",
                  color: "#fff",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Sign up
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
          ) : (
            <>
              {/* Mobile menu button */}
              <div
                style={{ fontSize: "1.8rem", cursor: "pointer" }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </div>

              {/* Mobile dropdown */}
              {menuOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "60px",
                    right: "0",
                    background: "#fff",
                    listStyle: "none",
                    padding: "1rem",
                    margin: 0,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    width: "200px",
                    zIndex: 10,
                  }}
                >
                  {navLinks.map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "10px 0",
                        borderBottom: "1px solid #eee",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </li>
                  ))}

                  {/* Sign up */}
                  <li
                    style={{
                      background: "#ff6b35",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "6px",
                      textAlign: "center",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Sign up
                  </li>

                  {/* EN ▼ Language Selector */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.33rem",
                      cursor: "pointer",
                      color: "#181e4b",
                      fontWeight: 600,
                      fontSize: "1rem",
                      marginTop: "12px",
                    }}
                  >
                    EN <span style={{ fontSize: "1.13em" }}>▼</span>
                  </li>
                </ul>
              )}
            </>
          )}
        </nav>

        {/* Hero Section */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile
              ? "20px 0"
              : isTablet
              ? "40px 0"
              : "48px 0",
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Left Text */}
          <div
            style={{
              flex: 1,
              maxWidth: isMobile || isTablet ? "100%" : "50%",
              paddingRight: isMobile ? "0" : "20px",
            }}
          >
            <p
              style={{
                color: "#DF6951",
                fontWeight: 600,
                fontSize: isMobile ? "0.85rem" : isTablet ? "1.2rem" : "20px",
                margin: 0,
                letterSpacing: "1px",
              }}
            >
              BEST DESTINATIONS AROUND THE WORLD
            </p>
            <h1
              style={{
                fontSize: isMobile ? "1.8rem" : isTablet ? "3rem" : "84px",
                color: "#181E4B",
                fontFamily: "Volkhov, serif",
                fontWeight: 700,
                margin: "10px 0 20px 0",
                lineHeight: isMobile ? "1.2" : "1.1",
              }}
            >
              Travel, enjoy
              
              and live a new
              
              and full life
            </h1>
            <p
              style={{
                color: "#5E6282",
                fontFamily: "Poppins, sans-serif",
                fontSize: isMobile ? "14px" : "16px",
                marginBottom: "24px",
                lineHeight: "1.4",
              }}
            >
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell
              they west hard for the.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <button
                style={{
                  background: "#ff6b35",
                  color: "#fff",
                  padding: isMobile ? "8px 18px" : "10px 24px",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  cursor: "pointer",
                }}
              >
                Find out more
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={playIcon}
                  alt="Play"
                  style={{
                    width: isMobile ? "38px" : "45px",
                    marginRight: "8px",
                  }}
                />
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                  }}
                >
                  Play Demo
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            style={{
              flex: 1,
              maxWidth: isMobile || isTablet ? "100%" : "50%",
              display: "flex",
              justifyContent: "center",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            <img
              src={heroImg}
              alt="Hero"
              style={{
                width: isMobile ? "85%" : "100%",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </div>
        </section>
      </div>
    </header>
  );
}
