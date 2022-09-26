import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

const TopMarketLayout = ({ className, children, title, btnTitle, link }) => {
  return (
    <section className={cn("top-market-layout", className)}>
      <div className={"top-market-layout__wrapper"}>
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
