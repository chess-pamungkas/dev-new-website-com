require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
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
