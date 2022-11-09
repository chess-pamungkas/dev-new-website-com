import React from "react";
import cn from "classnames";
import { Logo } from "../shared/icons";
import AdvantageBlock from "./components/advantage-block";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import ButtonLink from "../shared/button-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";

const Performance = ({
  className,
  title,
  advantages,
  btnTitle,
  link,
  isAnchorLink,
  note,
}) => {
  const isRTL = useRtlDirection();
  // TODO refactor it, move to helper
  const getButton = () => {
    switch (true) {
      case isAnchorLink:
        return (
          <AnchorLink
            href={link}
            className={cn(
              "button-link",
              "button-link--red",
              "performance__btn"
            )}
          >
            {btnTitle}
          </AnchorLink>
        );

      default:
        return (
          <ButtonLink
            link={link}
            className={cn("button-link--red", "performance__btn")}
          >
            {btnTitle}
          </ButtonLink>
        );
    }
  };

  return (
    <section
      className={cn("performance", className, {
        "performance--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="performance__title-wrapper">
        <Logo className="performance__icon" />
        <h2 className="performance__title">{title}</h2>
      </div>
      <div className="performance__advantages">
        {advantages.length > 0 &&
          advantages.map((block) => (
            <AdvantageBlock
              key={`advantage-${stringTransformToKebabCase(block.text)}`}
              icon={block.icon}
              text={block.text}
              accent={block.accent}
            />
          ))}
      </div>
      {(btnTitle || note) && (
        <div className="performance__btn-wrapper">
          {btnTitle && getButton()}
          {note && <p className="performance__note">{note}</p>}
        </div>
      )}
    </section>
  );
};

export default Performance;
