import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import phoneIcon from "../../../../assets/images/icons/phone.svg";
import tabletIcon from "../../../../assets/images/icons/tablet.svg";
import laptopIcon from "../../../../assets/images/icons/laptop.svg";
import devicesIcon from "../../../../assets/images/icons/devices-sm.svg";

const DeviceBlock = ({ className, isAnimationStarted, isRTL }) => {
  const calculateLeftPosition = (ref) => {
    if (isRTL) return null;
    const clientRect = ref.current?.getBoundingClientRect();
    return -(clientRect?.left + clientRect?.width) + "px";
  };

  const phoneIconRef = useRef();
  const tabletIconRef = useRef();
  const laptopIconRef = useRef();

  const [phoneLeftPosition, setPhoneLeftPosition] = useState(
    isRTL ? null : "inherit"
  );
  const [tabletLeftPosition, setTabletLeftPosition] = useState(
    isRTL ? null : "inherit"
  );
  const [laptopLeftPosition, setLaptopLeftPosition] = useState(
    isRTL ? null : "inherit"
  );

  useEffect(() => {
    if (!isRTL) {
      setPhoneLeftPosition(calculateLeftPosition(phoneIconRef));
    }
  }, [phoneIconRef, isRTL]);

  useEffect(() => {
    if (!isRTL) {
      setTabletLeftPosition(calculateLeftPosition(tabletIconRef));
    }
  }, [tabletIconRef, isRTL]);

  useEffect(() => {
    if (!isRTL) {
      setLaptopLeftPosition(calculateLeftPosition(laptopIconRef));
    }
  }, [laptopIconRef, isRTL]);

  useEffect(() => {
    if (isAnimationStarted || isRTL) {
      setLaptopLeftPosition(null);
      setTabletLeftPosition(null);
      setPhoneLeftPosition(null);
    }
  }, [isAnimationStarted, isRTL]);

  return (
    <div className={cn("device-block", className)}>
      <img
        ref={phoneIconRef}
        src={phoneIcon}
        alt="Phone"
        style={{ left: phoneLeftPosition }}
        className={cn(
          "device-block__img",
          "device-block__img--phone",
          "hidden-on-mobile"
        )}
      />
      <img
        ref={tabletIconRef}
        src={tabletIcon}
        alt="Tablet"
        style={{ left: tabletLeftPosition }}
        className={cn(
          "device-block__img",
          "device-block__img--tablet",
          "hidden-on-mobile"
        )}
      />
      <img
        ref={laptopIconRef}
        src={laptopIcon}
        alt="Laptop"
        style={{ left: laptopLeftPosition }}
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

DeviceBlock.propTypes = {
  className: PropTypes.string,
  isAnimationStarted: PropTypes.bool.isRequired,
  isRTL: PropTypes.bool,
};

DeviceBlock.defaultProps = {
  isRTL: false,
};

export default DeviceBlock;
