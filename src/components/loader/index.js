import React from "react";
import loader from "../../assets/images/bg/loader.svg";

export const Loader = () => {
  return (
    <div className="global-loader">
      <img src={loader} alt="" className="global-loader__img" />
    </div>
  );
};
