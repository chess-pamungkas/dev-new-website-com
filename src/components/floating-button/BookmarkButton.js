import React, { useState, useEffect, useRef } from "react";
import "../../assets/styles/Bookmark.scss";
import ButtonLink from "../shared/button-link";
import { GetRegistrationLink } from "../../helpers/constants";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ChevronIcon from "../../assets/images/icons/chevron.svg";

function Bookmark() {
  const [isExpanded, setExpanded] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isBlinking, setBlinking] = useState(true);
  const [isShaking, setShaking] = useState(false);
  const [isClosing, setClosing] = useState(false);

  const bookmarkRef = useRef(null);
  const buttonRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Start blinking when first appears
    if (isVisible && !isExpanded) {
      const timeout = setTimeout(() => {
        setBlinking(false); // stop blinking after 5 seconds
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, isExpanded]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Adjust this value as per your first section height
        setVisible(true);
      } else {
        setVisible(false);
        setBlinking(true); // Reset blinking when it disappears
      }
    };

    const handleClickOutside = (e) => {
      if (bookmarkRef.current && !bookmarkRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleBookmarkClick = () => {
    if (!isExpanded) {
      // Expand the bookmark
      setExpanded(true);
      // Set the shake effect after 1 second
      setTimeout(() => {
        setShaking(true);
        // Set the closing effect after 2 seconds
        setTimeout(() => {
          setShaking(false);
          setClosing(true);
          // Close the bookmark after 0.5 seconds
          setTimeout(() => {
            setExpanded(false);
            setClosing(false);
          }, 500);
        }, 2000);
      }, 1000);
    }
  };

  const bookmarkClass = `${isExpanded ? "expanded" : "closed"} ${
    isVisible ? "" : "hidden"
  }`;

  const buttonClass = `${isShaking ? "shaking" : ""} ${
    isClosing ? "closing" : ""
  }`;

  return (
    <div
      ref={bookmarkRef}
      className={`bookmark ${bookmarkClass}`}
      onClick={handleBookmarkClick}
    >
      {/* If expanded, show 'Close' otherwise show the bookmark icon */}
      {isExpanded ? (
        <ButtonLink
          ref={buttonRef}
          link={GetRegistrationLink()}
          className={`bookmark-button-link ${buttonClass}`}
        >
          {t("button-sign-up")}
        </ButtonLink>
      ) : (
        <img
          src={ChevronIcon}
          alt="Chevron"
          className={`text ${isBlinking ? "blinking" : ""}`}
        />
      )}
    </div>
  );
}

export default Bookmark;
