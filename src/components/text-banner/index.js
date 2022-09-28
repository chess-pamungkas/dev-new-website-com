import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

const TextBanner = ({
  className,
  title,
  note,
  children,
  btnTitle1,
  link1,
  btnTitle2,
  link2,
}) => {
  return (
    <section className={cn("text-banner", className)}>
      <div className="text-banner__wrapper">
        {note && <p className="text-banner__note">{note}</p>}
        <h2 className="text-banner__title">{title}</h2>
        <p className="text-banner__description">{children}</p>
        {(btnTitle1 || btnTitle2) && (
          <div className="text-banner__btn-wrapper">
            {btnTitle1 && (
              <ButtonLink link={link1} className={cn("text-banner__btn")}>
                {btnTitle1}
              </ButtonLink>
            )}
            {btnTitle2 && (
              <ButtonLink link={link2} className={cn("text-banner__btn")}>
                {btnTitle2}
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TextBanner;
