import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";

const TopMarketLayout = ({
  className,
  children,
  title,
  btnTitle,
  link,
  headerTemplate,
}) => {
  const isRTL = useRtlDirection();

  return (
    <section
      className={cn("top-market-layout", className, {
        "top-market-layout--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className={"top-market-layout__wrapper"}>
        {headerTemplate && headerTemplate}
        {title && <h2 className="top-market-layout__title">{title}</h2>}
        <div className="top-market-layout__content">{children}</div>
        {btnTitle && (
          <ButtonLink
            link={link}
            className={cn("top-market-layout__btn", "button-link--red")}
          >
            {btnTitle}
          </ButtonLink>
        )}
      </div>
    </section>
  );
};

export default TopMarketLayout;
