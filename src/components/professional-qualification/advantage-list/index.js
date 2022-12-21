import React from "react";
import cn from "classnames";
import { DIR_LTR, DIR_RTL } from "../../../helpers/constants";
import { Logo } from "../../shared/icons";
import {useRtlDirection} from "../../../helpers/hooks/use-rtl-direction";

const AdvantageList = ({ className, title }) => {
  const isRTL = useRtlDirection();

  return (
    <section
      className={cn("pq-advantage-list", className, {
        "pq-advantage-list--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="pq-advantage-list__title-wrapper">
        <Logo className="pq-advantage-list__icon" />
        <h2 className="pq-advantage-list__title">{title}</h2>
      </div>
    </section>
  );
};

export default AdvantageList;