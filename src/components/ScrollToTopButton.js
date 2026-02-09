import React, { useEffect, useState } from "react";
import "../styles/scrollToTop.css";

const iconImages = require.context(
  "../content/images/icons",
  false,
  /\.svg$/
);
const scrollIcon = iconImages("./scroll-icon.svg");

const SHOW_AFTER_PX = 420;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span
        className="scroll-to-top-icon"
        aria-hidden="true"
        style={{
          WebkitMaskImage: `url(${scrollIcon})`,
          maskImage: `url(${scrollIcon})`
        }}
      />
    </button>
  );
}

export default ScrollToTopButton;
