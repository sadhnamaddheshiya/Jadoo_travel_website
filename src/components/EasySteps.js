import React from "react";
import greeceImg from "../assets/greece.png";
import destinationImg from "../assets/destination.png";
import paymentImg from "../assets/payment.png";
import airportImg from "../assets/airport.png";
import romeImg from "../assets/rome.jpg";

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
            <img src={greeceImg} alt="Trip to Greece" className="trip-main-img" />
            <div className="trip-title">Trip To Greece</div>
            <div className="trip-subtitle">14-29 June &nbsp;&nbsp;|&nbsp; by Robbin Joseph</div>
            <div className="trip-icons">
              <span role="img" aria-label="Leaf">🍃</span>
              <span role="img" aria-label="Map">🗺️</span>
              <span role="img" aria-label="Paper plane">✈️</span>
            </div>
            <div className="trip-people">
              <span role="img" aria-label="People">👥</span> 24 people going
            </div>

            {/* Floating Rome Card */}
            <div className="floating-card">
              <img src={romeImg} alt="Rome" className="floating-img" />
              <div>
                <div className="floating-title">Trip to Rome</div>
                <div className="floating-progress-text">
                  40% completed
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .easy-steps-section {
          background: #fff;
          padding: 3rem 1rem 4rem;
        }

        .easy-steps-container {
          max-width: 1110px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 48px;
          flex-wrap: wrap;
        }

        .steps-left {
          flex: 1 1 400px;
          min-width: 280px;
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
          margin-bottom: 1.8rem;
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
          display: flex;
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
          margin-top: 0.3rem;
          color: #5e6282;
          font-size: 1.01rem;
        }

        .steps-right {
          flex: 1 1 370px;
          min-width: 280px;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .trip-card {
          background: #eef4ff;
          border-radius: 2rem;
          box-shadow: 0 8px 28px rgba(80,80,80,0.18);
          padding: 2rem;
          width: 100%;
          max-width: 370px;
          position: relative;
        }

        .trip-main-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 1.4rem;
          margin-bottom: 1rem;
        }

        .trip-title {
          font-weight: 700;
          font-size: 1.18rem;
          color: #181e4b;
          margin-bottom: 0.5rem;
        }

        .trip-subtitle {
          color: #686d8a;
          font-size: 0.96rem;
          margin-bottom: 1rem;
        }

        .trip-icons {
          display: flex;
          gap: 16px;
          color: #8e93ad;
          font-size: 1.18rem;
          margin-bottom: 1rem;
        }

        .trip-people {
          color: #686d8a;
          font-size: 0.96rem;
        }

        /* Floating Rome card */
        .floating-card {
          position: absolute;
          right: -10%;
          bottom: 10px;
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 8px 38px rgba(80,80,80,0.10);
          padding: 1rem 1.2rem;
          min-width: 180px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .floating-img {
          width: 42px;
          height: 42px;
          border-radius: 0.6rem;
          object-fit: cover;
          border: 2px solid #efefef;
        }

        .floating-title {
          font-weight: 700;
          font-size: 1.12rem;
          color: #464e5f;
        }

        .floating-progress-text {
          font-size: 0.88rem;
          color: #686d8a;
        }

        .progress-bar {
          background: #eef4ff;
          border-radius: 6px;
          width: 100%;
          height: 6px;
          margin-top: 4px;
          overflow: hidden;
        }

        .progress-fill {
          background: linear-gradient(90deg,#4472ce,#fff4e3 100%);
          height: 100%;
          width: 40%;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .easy-steps-container {
            flex-direction: column;
            gap: 2rem;
          }
          .steps-title {
            font-size: 1.8rem;
          }
          .trip-main-img {
            height: auto;
          }
          .floating-card {
            position: relative;
            right: 0;
            bottom: 0;
            margin-top: 1rem;
          }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .steps-title {
            font-size: 2rem;
          }
          .trip-main-img {
            height: auto;
          }
          .floating-card {
            right: -5%;
          }
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .steps-title {
            font-size: 2.4rem;
          }
          .trip-main-img {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default EasySteps;
