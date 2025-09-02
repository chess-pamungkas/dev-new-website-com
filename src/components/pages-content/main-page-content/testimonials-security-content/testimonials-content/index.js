import React from "react";
import UAEIcon from "../../../../../assets/images/icons/main-page/testimonials/uae.svg";
import MexicoIcon from "../../../../../assets/images/icons/main-page/testimonials/mexico.svg";
import SouthAfricaIcon from "../../../../../assets/images/icons/main-page/testimonials/south-africa.svg";
import TestimonialsIcon from "../../../../../assets/images/icons/main-page/testimonials/testimonials.svg";

const testimonials = [
  {
    text: "Amazing spreads, exactly as advertised. No surprises, just consistent execution.",
    name: "Ahmed",
    countryIcon: UAEIcon,
  },
  {
    text: "Best execution I’ve experienced. Lightning fast and reliable platform. – Carlos",
    name: "Carlos",
    countryIcon: MexicoIcon,
  },
  {
    text: "Professional platform with great support. Highly recommend for serious traders.",
    name: "Sarah",
    countryIcon: SouthAfricaIcon,
  },
];

const TestimonialsContent = () => (
  <div className="testimonials-content">
    {testimonials.map((item, idx) => (
      <div className="testimonial-card" key={idx}>
        <div className="testimonial-text">{item.text}</div>
        <div className="testimonial-footer">
          <span className="badge">
            <img src={TestimonialsIcon} alt="Testimonials Badge" />
            Testimonials
          </span>
          <span className="name-country">
            <span className="name">{item.name}</span>
            <img
              src={item.countryIcon}
              alt="Country"
              className="country-icon"
            />
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default TestimonialsContent;
