import { useEffect, useRef } from "react";
import { createScrollTrigger } from "@/hooks/gsap/useCreateScrollTrigger";
import { useAppElements } from "@/hooks/global/useAppElements";

/**
 * A hook that contains the logic for the Header component.
 * @hook useHeader
 */
export function useHeader() {
  const headerContainer = useRef<HTMLDivElement>(null);
  const { header } = useAppElements();

  const scrollTriggers = {
    headerContainer: () =>
      createScrollTrigger({
        trigger: headerContainer.current!,
        start: "top -100px",
        end: 99999,
        toggleClassname: "header-container--scrolled",
        toggleTargets: ".header-container",
      }),
    header: () =>
      createScrollTrigger({
        trigger: header.current!,
        start: "top -100px",
        end: 99999,
        toggleClassname: "header--scrolled",
        toggleTargets: ".header",
      }),
  };

  useEffect(() => {
    scrollTriggers.headerContainer();
    scrollTriggers.header();
  }, []);

  return {
    headerContainer,
    header,
  };
}
