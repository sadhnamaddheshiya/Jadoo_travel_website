import React, { useState } from "react";
import logosImg from "../assets/logos.jpg";
import avatarImg from "../assets/avatar.jpg";

const testimonialsData = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike taylor",
    location: "Delhi, India",
  },
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Chris Thomas",
    location: "CEO of Red Button",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Left Side */}
        <div className="testimonials-left">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">
            What People Say <br /> About Us.
          </h2>

          {/* Pagination dots */}
          <div className="dots">
            {testimonialsData.map((_, i) => (
              <span
                key={i}
                className={`dot ${activeIndex === i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="testimonials-right">
          {testimonialsData.map((t, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`testimonial-card ${isActive ? "active" : ""}`}
              >
                {isActive && (
                  <>
                    <img
                      src={avatarImg}
                      alt={t.author}
                      className="avatar"
                    />
                    <p className="quote">{t.quote}</p>
                  </>
                )}
                <strong className="author">{t.author}</strong>
                <span className="location">{t.location}</span>
                <span
                  className={`arrow ${isActive ? "open" : ""}`}
                >
                  ▼
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logos Row */}
      <img
        src={logosImg}
        alt="Partner logos"
        className="logos-img"
      />

      {/* Styles */}
      <style>{`
        .testimonials-section {
          background: #fff;
          padding: 3rem 1rem;
          margin-top: 2rem;
        }
        .testimonials-container {
          max-width: 1020px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .section-subtitle {
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 2px;
          color: #938b8b;
          font-size: 1rem;
          margin-bottom: 1.2rem;
        }
        .section-title {
          font-size: 2.1rem;
          font-weight: bold;
          line-height: 1.18;
          margin-bottom: 2rem;
        }
        .dots {
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 6px;
          height: 6px;
          background: #e0dde8;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .dot.active {
          width: 18px;
          border-radius: 3px;
          background: #7b64e9;
        }
        .testimonial-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 3px 18px rgba(210, 205, 195, 0.1);
          padding: 1.1rem 1.5rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .testimonial-card.active {
          box-shadow: 0 6px 32px rgba(84, 74, 66, 0.1);
          padding: 2rem;
        }
        .avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          position: absolute;
          left: -28px;
          top: -28px;
          border: 2px solid #fff;
        }
        .quote {
          color: #5E6282;
          font-size: 1.05rem;
          line-height: 1.55;
          margin-bottom: 1.2rem;
        }
        .author {
          color: #181e4b;
          font-weight: 700;
          font-size: 1rem;
        }
        .location {
          color: #938b8b;
          font-size: 0.95rem;
          margin-left: 0.75rem;
        }
        .arrow {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #7b64e9;
          transition: transform 0.3s ease;
        }
        .arrow.open {
          transform: translateY(-50%) rotate(180deg);
        }
        .logos-img {
          display: block;
          margin: 40px auto 0 auto;
          max-width: 1000px;
          width: 100%;
          height: auto;
          opacity: 0.85;
        }

        /* Tablet view */
        @media (max-width: 992px) {
          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .section-title {
            font-size: 1.8rem;
          }
        }

        /* Mobile view */
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.5rem;
          }
          .testimonial-card {
            padding: 1rem;
          }
          .avatar {
            width: 48px;
            height: 48px;
            left: -24px;
            top: -24px;
          }
          .quote {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
