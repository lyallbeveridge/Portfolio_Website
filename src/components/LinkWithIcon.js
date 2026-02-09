import React from "react";
import "../styles/linkWithIcon.css";

const iconImages = require.context(
  "../content/images/icons",
  false,
  /\.svg$/
);

const ICONS = {
  youtube: {
    kind: "img",
    src: iconImages("./youtube-icon.svg")
  },
  github: {
    kind: "img",
    src: iconImages("./github-icon.svg")
  },
  pdf: {
    kind: "img",
    src: iconImages("./pdf-icon.svg")
  },
  website: {
    color: "var(--font-color)",
    svg: (
      <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.8 9H16a15 15 0 0 0-1.4-5.1A8 8 0 0 1 19.8 11zM12 4.1c.9 1.3 1.6 3.3 1.8 5.4H10.2c.2-2.1.9-4.1 1.8-5.4zM4.2 13H8a15 15 0 0 0 1.4 5.1A8 8 0 0 1 4.2 13zm0-2a8 8 0 0 1 5.2-5.1A15 15 0 0 0 8 11H4.2zm7.8 8.9c-.9-1.3-1.6-3.3-1.8-5.4h3.6c-.2 2.1-.9 4.1-1.8 5.4zM16 13h3.8a8 8 0 0 1-5.2 5.1A15 15 0 0 0 16 13z" />
      </svg>
    )
  },
  default: {
    color: "var(--font-color)",
    svg: (
      <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" />
        <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" />
      </svg>
    )
  }
};

function LinkWithIcon({ href, text, type }) {
  const key = (type || "").toLowerCase();
  const icon = ICONS[key] || ICONS.default;
  const chainIcon = ICONS.default;

  const iconNode =
    icon.kind === "img" ? (
      <img className="link-icon-image" src={icon.src} alt="" />
    ) : (
      icon.svg
    );

  return (
    <a
      href={href}
      className="link-tag"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="link-icon-prefix" aria-hidden="true" style={{ color: chainIcon.color }}>
        {chainIcon.svg}
      </span>
      <span className="link-text-with-icon">
        <span className="link-text">{text}</span>
        <span className="link-icon-wrapper" aria-hidden="true" style={{ color: icon.color }}>
          {iconNode}
        </span>
      </span>
    </a>
  );
}

export default LinkWithIcon;
