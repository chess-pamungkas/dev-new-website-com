import React from "react";
import cn from "classnames";

const TradingSectionDropdown = ({
  className,
  items,
  selectedItem,
  setSelectedItem,
  isOpen,
  setIsOpen,
  isDropdownShown,
}) => {
  const onSelectionByClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const renderItems = () => {
    return items.map((item) => {
      return (
        <button
          key={`TradingSectionDropdownItem${item.value}`}
          className={cn("dropdown__item", {
            "dropdown__item--active": selectedItem.id === item.value
          })}
          onClick={() => onSelectionByClick(item)}
        >
          <span>{item.title}</span>
        </button>
      );
    });
  };

  return (
    <div className={cn("dropdown", className, {
      "dropdown--opened": isOpen
    })}>
      <button className="dropdown__title" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown__title-content">{selectedItem.title}</span>
      </button>
      {isOpen && isDropdownShown && (
        <div
          className="dropdown__content"
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
