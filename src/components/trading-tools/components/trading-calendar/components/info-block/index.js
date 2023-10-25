import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../../../helpers/hooks/use-rtl-direction";

const CalendarInfoBlock = ({ img, title, description }) => {
  const isRTL = useRtlDirection();

  return (
    <div
      className={cn("calendar-info-block", {
        "calendar-info-block--rtl": isRTL,
      })}
    >
      <div className="calendar-info-block__img-wrapper">
        <img className="calendar-info-block__img" src={img} alt={""} />
      </div>
      <div className="calendar-info-block__title-wrapper">
        <h2 className="calendar-info-block__title">{title}</h2>
        <hr className="calendar-info-block__line" />
        <p className="calendar-info-block__description">{description}</p>
      </div>
    </div>
  );
};

export default CalendarInfoBlock;
