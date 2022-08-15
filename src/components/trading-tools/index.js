import React from "react";
import cn from "classnames";
import { PLATFORMS } from "../../helpers/config";
import PlatformBlock from "./components/platform-block";
import { TRADING_TOOLS_TITLE } from "../../helpers/promo-texts";
import ButtonLink from "../shared/button-link";
import DeviceBlock from "./components/device-block";
import {REGISTRATION_LINK} from "../../helpers/constants";

const TradingTools = ({ className }) => {
  return (
    <section className={cn("trading-tools", className)}>
      <div className="trading-tools__wrapper">
        <div className="trading-tools__icon-wrapper">
          {Object.values(PLATFORMS).map((platform) => (
            <PlatformBlock
              key={`platform-${platform.title}`}
              icon={platform.icon}
              title={platform.title}
            />
          ))}
        </div>
        <DeviceBlock className="trading-tools__img-wrapper" />
        <h2 className="trading-tools__title">{TRADING_TOOLS_TITLE}</h2>
        <ButtonLink link={REGISTRATION_LINK} className="trading-tools__btn">
          Create your account
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingTools;
