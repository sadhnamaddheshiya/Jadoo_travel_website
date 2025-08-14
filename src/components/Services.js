import React from "react";
import weatherImg from "../assets/weather-icon.png";
import flightsImg from "../assets/flights-icon.png";
import eventsImg from "../assets/events-icon.png";
import settingsImg from "../assets/settings-icon.png";

const serviceData = [
  { icon: weatherImg, link: " " },
  { icon: flightsImg, link: " " },
  { icon: eventsImg, link: " " },
  { icon: settingsImg, link: " " },
];

function Services() {
  return (
    <section style={{ background: "#fff", padding: "3rem 1rem" }}>
      <style>
        {`
          .services-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .service-card {
            background: #f7fafd;
            border-radius: 18px;
            padding: 1.5rem;
            text-align: center;
            transition: transform 0.2s ease;
            box-shadow: 0 4px 18px rgba(210,205,195,0.08);
            flex: 1 1 220px; /* flexible width */
            max-width: 260px;
          }

          .service-card:nth-child(2) {
            background: #fff4e3;
            box-shadow: 0 6px 28px rgba(84,74,66,0.12);
          }

          .service-card img {
            width: 100%;
            max-width: 160px;
            height: auto;
            margin: 0 auto;
          }

          .service-card:nth-child(2) img {
            max-width: 200px;
          }

          .service-card h3 {
            font-size: 1.1rem;
            font-weight: bold;
            color: #211f3e;
            margin-top: 0.8rem;
          }

          .service-card p {
            color: #938b8b;
            font-size: 1rem;
            line-height: 1.5;
          }

          @media (max-width: 1024px) {
            .service-card {
              flex: 1 1 45%;
            }
            .service-card img {
              max-width: 140px;
            }
            .service-card:nth-child(2) img {
              max-width: 180px;
            }
          }

          @media (max-width: 768px) {
            .service-card {
              flex: 1 1 90%;
            }
            .service-card img {
              max-width: 120px;
            }
            .service-card:nth-child(2) img {
              max-width: 150px;
            }
          }

          @media (max-width: 480px) {
            .service-card h3 {
              font-size: 1rem;
            }
            .service-card p {
              font-size: 0.95rem;
            }
            .services-container {
              gap: 1rem;
            }
          }

          .service-card:hover {
            transform: translateY(-5px);
          }
        `}
      </style>

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

      <div className="services-container">
        {serviceData.map((service, idx) => (
          <div key={idx} className="service-card">
            <button
              onClick={() => window.open(service.link, "_blank")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img src={service.icon} alt={service.title} />
            </button>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
