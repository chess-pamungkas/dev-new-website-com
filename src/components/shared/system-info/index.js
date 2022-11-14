import React from "react";
import cn from "classnames";
import { Link } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../../helpers/constants";

const SystemInfoComponent = ({
  classname,
  title,
  subTitle,
  image,
  goBackBtnTitle,
}) => {
  const isRTL = useRtlDirection();

  return (
    <div
      className={cn(classname, "system-info", {
        "system-info--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="system-info__img-container">
        <img src={image} alt="" className="system-info__img" />
      </div>
      <div className="system-info__title">{title}</div>
      <div className="system-info__subtitle">{subTitle}</div>
      <Link to="/" className={cn("button-link", "system-info__go-back-btn")}>
        {goBackBtnTitle}
      </Link>
    </div>
  );
};

export default SystemInfoComponent;
