import React, { useState } from "react";
import cn from "classnames";
import person from "../../assets/images/person.png";
import ButtonLink from "../shared/button-link";
import { REGISTRATION_LINK } from "../../helpers/constants";
import TitlesAnimation from "../shared/titles-animation";

const MainPromotion = ({ className }) => {
  const keywords = [
    "Crypto traders",
    "Gold enthusiasts",
    "Forex veterans",
    "You",
  ];
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

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
              <TitlesAnimation
                titles={keywords}
                isAnimationFinished={isAnimationFinished}
                setIsAnimationFinished={setIsAnimationFinished}
              />
            </span>
          </h1>
          <ButtonLink
            link={REGISTRATION_LINK}
            className={cn({
              "button-link--snake-animation": isAnimationFinished,
            })}
          >
            {isAnimationFinished && (
              <>
                <span className="button-link--snake-animation-line-top" />
                <span className="button-link--snake-animation-line-left" />
                <span className="button-link--snake-animation-line-right" />
                <span className="button-link--snake-animation-line-bottom" />
              </>
            )}
            Trade now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default MainPromotion;
