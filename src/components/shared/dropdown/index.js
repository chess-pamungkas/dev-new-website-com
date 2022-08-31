import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Dropdown = ({
  className,
  items,
  selectedItem,
  setSelectedItem,
  isOpen,
  setIsOpen,
  isDropdownShown,
}) => {
  const { t } = useTranslation();

  const onSelectionByClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const renderItems = () => {
    return items.map((item) => {
      return (
        <button
          key={`dropdown-item-${item.value}`}
          type="button"
          className={cn("dropdown__item", {
            // TODO refactor this to avoid id prop here
            "dropdown__item--active":
              (selectedItem.id || selectedItem.value) === item.value,
          })}
          onClick={() => onSelectionByClick(item)}
        >
          <span>{t(item.title)}</span>
        </button>
      );
    });
  };

  return (
    <div
      className={cn("dropdown", className, {
        "dropdown--opened": isOpen,
      })}
    >
      <button
        className="dropdown__title"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown__title-content">{t(selectedItem.title)}</span>
      </button>
      {isOpen && isDropdownShown && (
        <div className="dropdown__content">
          <div className="dropdown__items">
            <div>{renderItems()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
