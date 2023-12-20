import React from "react";
import "./LoadingSpinner.css";
//it will never show this unless theres an error
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

export default LoadingSpinner;
