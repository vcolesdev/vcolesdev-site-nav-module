import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

/**
 * A hook that contains the logic for the Header component.
 * @hook useHeader
 */
export default function useHeader() {
  const headerContainer = React.useRef<HTMLDivElement>(null);
  const header = React.useRef<HTMLElement>(null);

  function createHeaderContainerScrollTrigger() {
    return ScrollTrigger.create({
      trigger: headerContainer.current!,
      start: "top -100px",
      end: 99999,
      toggleClass: {
        className: "header-container--scrolled",
        targets: ".header-container",
      },
    });
  }

  function createHeaderScrollTrigger() {
    return ScrollTrigger.create({
      trigger: header.current!,
      start: "top -100px",
      end: 99999,
      toggleClass: {
        className: "header--scrolled",
        targets: ".header",
      },
    });
  }

  useEffect(() => {
    createHeaderContainerScrollTrigger();
    createHeaderScrollTrigger();
  }, []);

  return {
    headerContainer,
    header,
  };
}
