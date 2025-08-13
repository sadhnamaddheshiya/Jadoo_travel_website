import React from "react";
import romeImg from "../assets/rome.png";
import londonImg from "../assets/london.jpg";
import europeImg from "../assets/europe.png";

const destinations = [
  {
    src: romeImg,
    title: "Rome, Italy",
    price: "$5.42k",
    days: "10 Days Trip",
  },
  {
    src: londonImg,
    title: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
  },
  {
    src: europeImg,
    title: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
  },
];

function Destinations() {
  return (
    <section style={{ paddingTop: "3rem", paddingBottom: "3rem", background: "#fff" }}>
      {/* Responsive CSS */}
      <style>
        {`
          .destinations-container {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .destination-card {
            background: #fff;
            border-radius: 1.5rem;
            box-shadow: 0 8px 32px rgba(80,80,80,0.07);
            width: 320px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.2s ease;
          }

          .destination-card:hover {
            transform: translateY(-5px);
          }

          .destination-card img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 1.2rem;
            margin-bottom: 1rem;
          }

          /* Tablet */
          @media (max-width: 1024px) {
            .destination-card {
              width: 45%;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .destinations-container {
              flex-direction: column;
              align-items: center;
            }
            .destination-card {
              width: 90%;
            }
          }
        `}
      </style>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p
          style={{
            color: "#6e6e6e",
            fontSize: "1rem",
            letterSpacing: "2px",
            marginBottom: "0.4rem",
          }}
        >
          Top Selling
        </p>
        <h2 style={{ fontSize: "2.2rem", fontWeight: "800", margin: "0" }}>
          Top Destinations
        </h2>
      </div>

      <div className="destinations-container">
        {destinations.map((d) => (
          <div key={d.title} className="destination-card">
            <img src={d.src} alt={d.title} />
            <h3 style={{ margin: "0.7rem 0 0.25rem 0", fontSize: "1.32rem", fontWeight: "700" }}>
              {d.title}
            </h3>
            <p style={{ fontWeight: "bold", color: "#4e6af3", marginBottom: "0.3rem", fontSize: "1.09rem" }}>
              {d.price}
            </p>
            <div
              style={{
                color: "#777",
                fontSize: "1.02rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span style={{ fontSize: "1.09rem" }}>🧭</span>
              {d.days}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
