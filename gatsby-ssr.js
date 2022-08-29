const React = require("react");

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      defer
      id="convrs-webchat"
      src={process.env.CONVRS_LIVECHAT}
    ></script>,
  ]);
};
