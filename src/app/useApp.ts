import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useDebouncedCallback } from "use-debounce";
import { layoutEventsFactory } from "../events";
import MatchMedia = gsap.MatchMedia;

type LayoutEvents = "ON_DESKTOP_LAYOUT_ACTIVE" | "ON_MOBILE_LAYOUT_ACTIVE";

/**
 * Handle the application state and actions.
 * @hook useApp
 */
export default function useApp() {
  /* GSAP */
  const matchMedia = gsap.matchMedia();

  /* State */
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  /**
   * Handle the match media event.
   * @function handleMatchMedia
   * @param media
   * @param eventName
   * @param condition
   */
  function handleMatchMedia(
    media: MatchMedia,
    eventName: LayoutEvents,
    condition: string
  ) {
    media.add(condition, function () {
      layoutEventsFactory.subscribe(eventName, () => {
        console.log(layoutEventsFactory);
      });
      layoutEventsFactory.notify(eventName);
    });
  }

  /**
   * Debounce the resize event to prevent excessive calls.
   * @function handleLayoutResize
   */
  const handleLayoutResize = useDebouncedCallback(() => {
    setInnerWidth(window.innerWidth);
    handleMatchMedia(
      matchMedia,
      "ON_DESKTOP_LAYOUT_ACTIVE",
      "(min-width: 1000px)"
    );
    handleMatchMedia(
      matchMedia,
      "ON_MOBILE_LAYOUT_ACTIVE",
      "(max-width: 999px)"
    );
  }, 1000);

  /* Animations */
  useGSAP(() => {
    handleMatchMedia(
      matchMedia,
      "ON_DESKTOP_LAYOUT_ACTIVE",
      "(min-width: 1000px)"
    );
    handleMatchMedia(
      matchMedia,
      "ON_MOBILE_LAYOUT_ACTIVE",
      "(max-width: 999px)"
    );

    window.addEventListener("resize", handleLayoutResize);
    return () => {
      window.removeEventListener("resize", handleLayoutResize);
    };
  }, [innerWidth]);

  return {
    handleMatchMedia,
    innerWidth,
    setInnerWidth,
  };
}
