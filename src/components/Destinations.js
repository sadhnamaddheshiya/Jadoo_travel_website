import React from "react";
import romeImg from "../assets/rome.png";
import londonImg from "../assets/london.jpg";
import europeImg from "../assets/europe.png";
import navImg from "../assets/nav.png";

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
    <section style={{ padding: "3rem 1rem", background: "#fff" }}>
      <style>
        {`
          .destinations-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .destination-card {
            background: #fff;
            border-radius: 1.5rem;
            box-shadow: 0 8px 32px rgba(80,80,80,0.07);
            width: 100%;
            max-width: 320px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: transform 0.2s ease;
          }

          .destination-card:hover {
            transform: translateY(-5px);
          }

          .destination-image-wrapper {
            width: 314px; /* Fixed width */
            height: 305px; /* Fixed height */
            overflow: hidden;
            border-radius: 24px; /* Rounded corners */
          }

          .destination-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .destination-content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .destination-days {
            color: #777;
            font-size: 1.02rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }

          .destination-days img {
            width: 20px;
            height: 20px;
            object-fit: contain;
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .destination-card {
              width: 45%;
            }
          }

          @media (max-width: 768px) {
            .destinations-container {
              flex-direction: column;
              align-items: center;
            }
            .destination-card {
              width: 90%;
            }
            .destination-image-wrapper {
              width: 90%; /* responsive for mobile */
              height: auto; /* maintain aspect ratio */
            }
          }

          @media (min-width: 1200px) {
            .destination-card {
              width: 30%;
            }
          }
        `}
      </style>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p
          style={{
            color: "Poppins",
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
            <div className="destination-image-wrapper">
              <img src={d.src} alt={d.title} />
            </div>
            <div className="destination-content">
              <h3
                style={{
                  margin: "0.7rem 0 0.25rem 0",
                  fontSize: "1.32rem",
                  fontWeight: "700",
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontWeight: "bold",
                  color: "#4e6af3",
                  marginBottom: "0.3rem",
                  fontSize: "1.09rem",
                }}
              >
                {d.price}
              </p>
              <div className="destination-days">
                <img src={navImg} alt="navigation icon" />
                {d.days}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
