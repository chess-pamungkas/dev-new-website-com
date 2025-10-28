import React, { useState, useContext, useRef, useEffect } from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import BadgeSecurityIcon from "../../../../assets/images/icons/main-page/badge-security.svg";
import CircleMarkIcon from "../../../../assets/images/icons/circle-mark.svg";
import CloseOverlayIcon from "../../../../assets/images/icons/main-page/trust/close-overlay.svg";
import { ShowRegistrationPopup } from "../../../../helpers/constants";
import LanguageContext from "../../../../context/language-context";
import { StandardButtons } from "../../../shared/reusable-buttons";
import BuffonVideo from "../../../../assets/video/Buffon-Precision-Protection-Performance-Website-version.mp4";

const TrustContent = () => {
  const { isMobile } = useWindowSize();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);
  const { t } = useTranslationWithVariables();
  const videoRef = useRef(null);

  // Autoplay video when it's clicked
  useEffect(() => {
    if (isVideoClicked && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [isVideoClicked]);

  // Pause and reset video when closed
  useEffect(() => {
    if (!isVideoClicked && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isVideoClicked]);

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleVideoClick = () => {
    setIsVideoClicked(true);
  };

  const handleVideoClose = () => {
    setIsVideoClicked(false);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current
          .requestFullscreen()
          .then(() => {
            setIsFullscreen(true);
          })
          .catch(() => {
            console.log("Fullscreen request failed");
          });
      } else {
        document
          .exitFullscreen()
          .then(() => {
            setIsFullscreen(false);
          })
          .catch(() => {
            console.log("Exit fullscreen failed");
          });
      }
    }
  };

  // Listen for fullscreen changes to keep state in sync
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const trustFeatures = [
    {
      boldText: t("trust-content_feature1-bold"),
      text: t("trust-content_feature1-text"),
      icon: CircleMarkIcon,
    },
    {
      boldText: t("trust-content_feature2-bold"),
      text: t("trust-content_feature2-text"),
      icon: CircleMarkIcon,
    },
    {
      boldText: t("trust-content_feature3-bold"),
      text: t("trust-content_feature3-text"),
      icon: CircleMarkIcon,
    },
  ];

  return (
    <section className="trust-content">
      <div className="trust-content__container">
        {/* Video Section */}
        <div
          className={`trust-content__video-section ${
            isVideoHovered ? "trust-content__video-section--hovered" : ""
          } ${isVideoClicked ? "trust-content__video-section--clicked" : ""}`}
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => setIsVideoHovered(false)}
          onClick={handleVideoClick}
        >
          <div className="trust-content__video-container">
            {/* Default/Hovered State */}
            <div className="trust-content__video-background"></div>
            {/* Video overlay text */}
            <div className="trust-content__video-overlay">
              <h3 className="trust-content__video-name">
                {t("trust-content_video-name")}
              </h3>
              <p className="trust-content__video-title">
                {t("trust-content_video-title")}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="trust-content__content-section">
          {/* Trust Badge */}
          <div className="trust-content__badge">
            <img
              src={BadgeSecurityIcon}
              alt={t("trust-content_badge-icon-alt")}
              className="trust-content__badge-icon"
            />
            <span className="trust-content__badge-text">
              {t("trust-content_badge-text")}
            </span>
          </div>

          {/* Main Title */}
          <h2 className="trust-content__title">
            {t("trust-content_title")}{" "}
            <span className="trust-content__title-highlight">
              {t("trust-content_title-highlight")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="trust-content__subtitle">
            {t("trust-content_subtitle")}
          </p>

          {/* Features List */}
          <ul className="trust-content__features">
            {trustFeatures.map((feature, index) => (
              <li key={index} className="trust-content__feature">
                <img
                  src={feature.icon}
                  alt={t("trust-content_check-icon-alt")}
                  className="trust-content__feature-icon"
                />
                <span className="trust-content__feature-text">
                  <strong>{feature.boldText}</strong>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Button Group */}
          <div className="navbar-dropdown-highlight__button-group">
            <StandardButtons
              primaryText={t("button-start-trading")}
              secondaryText={t("button-try-demo")}
              onPrimaryClick={handleShowRegistrationPopup}
              onSecondaryClick={handleShowRegistrationPopup}
            />
          </div>
        </div>
      </div>

      {/* Video Overlay - Full Screen */}
      {isVideoClicked && (
        <div className="trust-content__youtube-overlay">
          {/* Video player */}
          <div className="trust-content__youtube-player">
            <video
              ref={videoRef}
              src={BuffonVideo}
              className="trust-content__video-element"
              autoPlay
              loop
              playsInline
              width="100%"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={handleVideoEnded}
            />

            {/* Custom Video Controls - Bottom of container */}
            <div className="trust-content__video-controls">
              <button
                className="trust-content__play-pause-button"
                onClick={handlePlayPause}
                type="button"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>
              <button
                className="trust-content__fullscreen-button"
                onClick={handleFullscreen}
                type="button"
                aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? "🔲 Exit" : "⛶"}
              </button>
            </div>

            <button
              className="trust-content__close-button"
              onClick={(e) => {
                e.stopPropagation();
                handleVideoClose();
              }}
            >
              <img
                src={CloseOverlayIcon}
                alt={t("trust-content_close-icon-alt")}
                className="trust-content__close-icon"
              />
            </button>
          </div>
        </div>
      )}

      {/* Registration Popup */}
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={selectedLanguage.id}
        />
      )}
    </section>
  );
};

export default TrustContent;
