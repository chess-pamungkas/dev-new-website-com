import React from "react";
import cn from "classnames";
import { GLOBE_TEXT } from "../../helpers/top-market-texts";
import ButtonLink from "../shared/button-link";

const Globe = ({ className }) => {
  return (
    <section className={cn("globe", className)}>
      <div className="globe__images">
        <img
          src=""
          alt=""
          className="globe__icon"
        />
      </div>      
      
      <h2 className="globe__title">
        {GLOBE_TEXT}
      </h2>

      <ButtonLink className="globe__btn button-link--red">Start Now</ButtonLink>
    </section>
  );
};

export default Globe;
