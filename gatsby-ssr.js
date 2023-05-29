import React, { cloneElement, createElement } from "react";
import Layout from "./src/components/shared/layout";

export const onRenderBody = ({
  setPostBodyComponents,
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setPreBodyComponents([
    // // Default content for Google bot fast mode (Hidden for users)
    <section
      key="default-nojs-content"
      id="default-nojs"
      className="main-promotion"
    >
      <div className="main-promotion__wrapper">
        <div className="main-promotion__block">
          <h1 className="main-promotion__title-wrapper">
            <span className="main-promotion__title">
              A Perfectly optimised trading experience for YOU
            </span>
          </h1>
        </div>
      </div>
      <div className="promotion">
        <div className="promotion__wrapper">
          <div className="promotion__block">
            <div className="promotion__description">
              Start building your trading portfolio with as little as $20 USD or
              equivalent, with 8 base currencies available. Trade EURUSD, XAUUSD
              and many other assets with one of the lowest average spreads in
              the industry, starting at 0.0 pips. Your money, your way, enjoy
              instant withdrawals with multiple withdrawal methods and multiple
              trusted funding channels with no fees.
            </div>
          </div>
          <div className="promotion__block">
            <img src="" alt="" className="promotion__img" />
          </div>
        </div>
      </div>
    </section>,
  ]);
  setPostBodyComponents([
    <script
      key="live-chat"
      defer
      id="convrs-webchat"
      src={process.env.GATSBY_CONVRS_LIVECHAT}
    />,
  ]);
  setHeadComponents([
    <script
      key="disable-ga"
      dangerouslySetInnerHTML={{
        __html: `window['ga-disable-${process.env.GATSBY_GA}'] = true;`,
      }}
    />,
    // Default title and description for Google bot fast mode
    <title key="default-title">
      Forex & CFD Trading on Stocks, Indices, Oil, Gold by OQtima™
    </title>,
    <meta
      key="default-description"
      name="description"
      content="Forex, cfd trading on stocks, indices, oil and gold with the most advanced trading platforms. Trade with OQtima™, a licensed forex broker."
    />,
  ]);
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  const orderedComponents = headComponents.sort((item) =>
    item.key === "disable-ga" ? -1 : 1
  );
  replaceHeadComponents(orderedComponents);
};

export const wrapPageElement = ({ element }) => {
  // We have to do it if we want to use localization plugin for Layout content
  const newElement = cloneElement(
    element,
    element.props,
    cloneElement(
      element.props.children,
      element.props.children.props,
      createElement(Layout, undefined, element.props.children.props.children)
    )
  );

  return newElement;
};
