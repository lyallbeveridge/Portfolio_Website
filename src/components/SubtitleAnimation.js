import React, { useEffect, useState } from "react";
import "../styles/subtitleAnimation.css";

export default function SubtitleAnimation() {
  const subtitleTextOptions = [
    "Sick cunt",
    "Software engineer",
    "Hardware enthusiast",
    "Full stack developer",
  ];
  const [subtitlePhraseIndex, setSubtitlePhraseIndex] = useState(0);
  const [subtitleText, setSubtitleText] = useState(subtitleTextOptions[subtitlePhraseIndex]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const delayBeforeDeleting = 2000;

    // Backspace action
    if (isDeleting) {
      const timeoutId = setTimeout(() => {
        setSubtitleText(subtitleText.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setSubtitlePhraseIndex((subtitlePhraseIndex + 1) % subtitleTextOptions.length);
          setIsDeleting(false);
        }
      }, typingSpeed);

      return () => clearTimeout(timeoutId);

      // Typing action
    } else {
      const timeoutId = setTimeout(() => {
        setSubtitleText(subtitleTextOptions[subtitlePhraseIndex].substring(0, index + 1));
        setIndex(index + 1);

        if (index === subtitleTextOptions[subtitlePhraseIndex].length) {
          setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
        }
      }, typingSpeed);

      return () => clearTimeout(timeoutId); // clean up on unmount
    }
  }, [index, isDeleting]);

  return (
    <div id="subtitle-animation">
      <div id="subtitle-input-text">{subtitleText}</div>
      <div id="subtitle-cursor">_</div>
    </div>
  );
}
