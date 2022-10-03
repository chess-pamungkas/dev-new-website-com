import React from "react";
import ReactSlider from "react-slider";

const Slider = ({
  className,
  thumbClassName,
  trackClassName,
  markClassName,
  minValue,
  maxValue,
  marks,
  currentValue,
  onChange,
  renderMark,
}) => {
  return (
    <ReactSlider
      className={className}
      thumbClassName={thumbClassName}
      trackClassName={trackClassName}
      markClassName={markClassName}
      defaultValue={0}
      value={currentValue}
      min={minValue}
      max={maxValue}
      marks={marks}
      onChange={(value) => {
        onChange(value);
      }}
      renderMark={renderMark}
    />
  );
};

export default Slider;
