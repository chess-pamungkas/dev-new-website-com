import React from "react";

export const TableTitle = ({ title, subtitle }) => (
  <div className="table-title-wrapper">
    <h4 className="table-title">{title}</h4>
    {subtitle && <span className="table-title__subtitle">{subtitle}</span>}
  </div>
);

export const TableTip = ({ tip }) => (
  <div className="tip">
    <p className="tip__text">{tip}</p>
  </div>
);
