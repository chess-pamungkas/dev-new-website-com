import React from "react";
import cn from "classnames";
import person from "../../assets/images/person.png";
import ButtonLink from "../shared/button-link";
import { REGISTRATION_LINK } from "../../helpers/constants";

const MainPromotion = ({ className }) => {
  return (
    <section className={cn("main-promotion", className)}>
      <div className="main-promotion__person">
        <span className="main-promotion__name">Gianluigi Buffon</span>
        <span className="main-promotion__description">
          goalkeeper legend and veteran trader, trades with Oqtima.
        </span>
      </div>
      <div className="main-promotion__photo">
        <img
          src={person}
          alt="Gianluigi Buffon"
          className="main-promotion__img"
        />
      </div>
      <div className="main-promotion__wrapper">
        <div className="main-promotion__block">
          <h1 className="main-promotion__title-wrapper">
            <span className="main-promotion__title">
              A Perfectly optimised trading experience for
            </span>
            <span className="main-promotion__title main-promotion__title--big">
              you
            </span>
          </h1>
          <ButtonLink link={REGISTRATION_LINK}>Trade now</ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default MainPromotion;
