import React, { useEffect, useState } from "react";
import cn from "classnames";

const TradingSectionDropdown = ({
  className,
  items,
  selectedItem,
  setSelectedItem,
  isOpen,
  setIsOpen,
  isSelectionByClick,
  isDropdownShown,
}) => {
  const onSelectionByClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const renderItems = () => {
    return items.map((item) => {
      return (
        <div
          key={`TradingSectionDropdownItem${item.value}`}
          className="dropdown__item"
          onClick={() => onSelectionByClick(item)}
        >
          <span>{item.title}</span>
        </div>
      );
    });
  };

  return (
    <div className={cn("dropdown", className)} onClick={() => setIsOpen(!isOpen)}>
      <div className="dropdown__title">
        <span className="dropdown__title-content">{selectedItem.title}</span>
      </div>
      {isOpen && isDropdownShown && (
        <div
          className="dropdown__content"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="dropdown__items">
            <div>{renderItems()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingSectionDropdown;
