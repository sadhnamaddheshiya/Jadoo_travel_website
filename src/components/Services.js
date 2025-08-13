import React from "react";
import weatherImg from "../assets/weather-icon.png";
import flightsImg from "../assets/flights-icon.png";
import eventsImg from "../assets/events-icon.png";
import settingsImg from "../assets/settings-icon.png";

const serviceData = [
  {
    icon: weatherImg,
    title: "Calculated Weather",
    link: " "
  },
  {
    icon: flightsImg,
    link: " "
  },
  {
    icon: eventsImg,
    link: " "
  },
  {
    icon: settingsImg,
    link: " "
  },
];

function Services() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "3rem 1rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            letterSpacing: "2px",
            color: "#938b8b",
            fontSize: "1rem",
          }}
        >
          Category
        </span>
        <h2
          style={{
            fontSize: "2.1rem",
            fontWeight: "bold",
            marginTop: "0.5rem",
            color: "#211f3e",
            letterSpacing: "-1px",
          }}
        >
          We Offer <span style={{ color: "#211f3e" }}>Best Services</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {serviceData.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: idx === 1 ? "#fff4e3" : "#f7fafd",
              boxShadow:
                idx === 1
                  ? "0 6px 28px rgba(84,74,66,0.12)"
                  : "0 4px 18px rgba(210,205,195,0.08)",
              borderRadius: "18px",
              padding: "1.5rem",
              textAlign: "center",
              transition: "transform 0.2s ease",
            }}
          >
            <button
              onClick={() => window.open(service.link, "_blank")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{
                  width: idx === 1 ? "200px" : "160px",
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
            </button>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#211f3e",
                marginTop: "0.8rem",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                color: "#938b8b",
                fontSize: "1rem",
                lineHeight: "1.5",
              }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;


