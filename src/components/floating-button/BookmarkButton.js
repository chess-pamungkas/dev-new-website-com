import React, { useState, useEffect, useRef } from "react";
import "../../assets/styles/Bookmark.scss";
import ButtonLink from "../shared/button-link";
import { GetRegistrationLink } from "../../helpers/constants";
import { useTranslation } from "gatsby-plugin-react-i18next";

function Bookmark() {
  const [isExpanded, setExpanded] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const bookmarkRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        // Adjust this value as per your first section height
        setVisible(true);
      } else {
        setVisible(false);
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
    setExpanded(!isExpanded);
  };

  const bookmarkClass = `${isExpanded ? "expanded" : "closed"} ${
    isVisible ? "" : "hidden"
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
          link={GetRegistrationLink()}
          className={"button-link--header header__start"}
        >
          {t("button-sign-up")}
        </ButtonLink>
      ) : (
        "<"
      )}
    </div>
  );
}

export default Bookmark;
