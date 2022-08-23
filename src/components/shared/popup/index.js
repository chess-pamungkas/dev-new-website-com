import React from 'react';
import cn from 'classnames';

const Popup = ({
  className,
  children,
  isPopupOpen = false,
  handlePopupClose = () => {}
}) => {
  return (
    <div className={cn("popup", {"popup--active": isPopupOpen}, className)}>
      {/* Close the popup on outer wrapper click */}
      <div className={cn("popup__wrapper")} onClick={handlePopupClose} role="presentation">

        {/* Prevent from closing the popup on content click */}
        <div className="popup__content" onClick={e => e.stopPropagation()} role="presentation">
          <div className="popup__header"></div>
          <div className="popup__body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
