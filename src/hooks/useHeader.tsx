import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

/**
 * A hook that contains the logic for the Header component.
 * @hook useHeader
 */
export default function useHeader() {
  const headerContainerRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLElement>(null);

  function createHeaderContainerScrollTrigger() {
    return ScrollTrigger.create({
      trigger: headerContainerRef.current!,
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
      trigger: headerRef.current,
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
    headerContainerRef,
    headerRef,
  };
}
