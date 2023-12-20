import React from "react";
import "./LoadingSpinner.css";
//it will never show this unless theres an error
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Please wait</p>
  </div>
);

export default LoadingSpinner;
