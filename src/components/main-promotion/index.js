import React from "react";
import { Link } from "gatsby";

const MainPromotion = () => {
  return (
    <section className="main-promotion">
      <div className="wrapper">
        <div className="block">
          <div className="person">
            <div className="name-wrapper">
              <span className="name">GIANLUIGI BUFFON</span>
              <span className="description">goalkeeper legend and veteran trader, trades with Oqtima.</span>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="block">
          <h1 className="title-wrapper">
            <span className="title">
              A Perfectly optimised trading experience for
            </span>
            <span className="title title--big">you</span>
          </h1>
          <Link to="/" className="button-link">Trade now</Link>
        </div>
      </div>
    </section>
  );
};

export default MainPromotion;
