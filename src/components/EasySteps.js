import React from "react";
import greeceImg from "../assets/greece.jpg";
import destinationImg from "../assets/destination.png";
import paymentImg from "../assets/payment.png";
import airportImg from "../assets/airport.png";

function EasySteps() {
  return (
    <section className="easy-steps-section">
      <div className="easy-steps-container">
        {/* Left content */}
        <div className="steps-left">
          <p className="steps-subtitle">Easy and Fast</p>
          <h2 className="steps-title">
            Book Your Next Trip
            <br />
            <span>In 3 Easy Steps</span>
          </h2>

          {/* Steps */}
          <div className="step">
            <span className="step-icon">
              <img src={destinationImg} alt="Choose Destination" />
            </span>
            <div>
              <strong>Choose Destination</strong>
              <p>
                Select your preferred destination
                <br />
                where you want to enjoy your holidays.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-icon">
              <img src={paymentImg} alt="Make Payment" />
            </span>
            <div>
              <strong>Make Payment</strong>
              <p>
                Use your VISA or RUPAY cards
                <br />
                for faster and secure transactions.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-icon">
              <img src={airportImg} alt="Reach Airport" />
            </span>
            <div>
              <strong>Reach Airport on Selected Date</strong>
              <p>
                Don't forget to reach your Airport on time
                <br />
                Be safe and happy journey.
              </p>
            </div>
          </div>
        </div>

        {/* Right illustration */}
        <div className="steps-right">
          <div className="trip-card">
            <img src={greeceImg} alt="Trip to Greece" />
          </div>
        </div>
      </div>

      <style>
        {`
        .easy-steps-section {
          background: #fff;
          padding: 3rem 1rem 4rem;
          margin-bottom: 2.5rem;
        }

        .easy-steps-container {
          max-width: 1110px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .steps-left {
          flex: 1 1 400px;
          min-width: 300px;
        }

        .steps-subtitle {
          font-weight: 600;
          color: #3f3f47;
          font-size: 1.03rem;
          margin-bottom: 0.9rem;
          letter-spacing: 1px;
        }

        .steps-title {
          font-weight: 800;
          font-size: 2.4rem;
          line-height: 1.18;
          color: #181e4b;
          margin: 0 0 1.8rem 0;
        }

        .steps-title span {
          color: #181e4b;
        }

        .step {
          display: flex;
          gap: 18px;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .step-icon {
          background: #fbfbfd;
          border-radius: 12px;
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .step-icon img {
          width: 36px;
          height: 36px;
        }

        .step strong {
          font-size: 1.12rem;
          color: #181e4b;
        }

        .step p {
          margin: 7px 0 0 0;
          color: #5e6282;
          font-size: 1.01rem;
        }

        .steps-right {
          flex: 1 1 370px;
          min-width: 290px;
          display: flex;
          justify-content: center;
        }

        .trip-card {
          background: #eef4ff;
          border-radius: 2.1rem;
          box-shadow: 0 8px 28px rgba(80,80,80,0.18);
          padding: 2.1rem 2.2rem 1.1rem;
        }

        .trip-card img {
          width: 100%;
          max-width: 370px;
          height: auto;
          object-fit: cover;
          border-radius: 1.4rem;
        }

        /* Mobile (≤768px) */
        @media (max-width: 768px) {
          .easy-steps-container {
            flex-direction: column;
            gap: 2rem;
          }
          .steps-title {
            font-size: 1.8rem;
          }
          .trip-card img {
            height: 250px;
          }
        }

        /* Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .easy-steps-container {
            flex-direction: row;
            gap: 32px;
          }
          .steps-title {
            font-size: 2rem;
          }
          .trip-card img {
            height: 300px;
          }
        }

        /* Desktop (≥1025px) */
        @media (min-width: 1025px) {
          .steps-title {
            font-size: 2.4rem;
          }
          .trip-card img {
            height: 350px;
          }
        }
        `}
      </style>
    </section>
  );
}

export default EasySteps;
