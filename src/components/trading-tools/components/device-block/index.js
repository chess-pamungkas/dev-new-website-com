import React from "react";
import cn from "classnames";
import phoneIcon from "../../../../assets/images/icons/phone.svg";
import tabletIcon from "../../../../assets/images/icons/tablet.svg";
import laptopIcon from "../../../../assets/images/icons/laptop.svg";
import devicesIcon from "../../../../assets/images/icons/devices-sm.svg";

const DeviceBlock = ({ className }) => {
  return (
    <div className={cn("device-block", className)}>
      <img
        src={phoneIcon}
        alt="Phone"
        className={cn(
          "device-block__img",
          "device-block__img--phone",
          "hidden-on-mobile"
        )}
      />
      <img
        src={tabletIcon}
        alt="Tablet"
        className={cn(
          "device-block__img",
          "device-block__img--tablet",
          "hidden-on-mobile"
        )}
      />
      <img
        src={laptopIcon}
        alt="Laptop"
        className={cn(
          "device-block__img",
          "device-block__img--laptop",
          "hidden-on-mobile"
        )}
      />
      <img
        src={devicesIcon}
        alt="Devices"
        className={cn("device-block__img--all-devices")}
      />
    </div>
  );
};

export default DeviceBlock;
