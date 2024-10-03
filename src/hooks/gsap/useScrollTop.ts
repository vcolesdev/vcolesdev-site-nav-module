import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

/**
 * Handle the scroll to top functionality.
 * @hook useScrollTop
 */
export function useScrollTop() {
  // GSAP Animation Timeline
  const tl = useRef<GSAPTimeline>();

  // State
  const [isVisible, setIsVisible] = useState(false);

  // Hooks
  useEffect(() => {
    window.addEventListener("scroll", () => handleVisible());
    return () => window.removeEventListener("scroll", () => handleVisible());
  }, []);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    handleScrollTopAnim(tl.current);
  }, []);

  /**
   * Handle the animation for the scroll to top button.
   * @param animation
   */
  function handleScrollTopAnim(animation: GSAPTimeline) {
    if (!animation) return;
    animation.fromTo(
      "#backToTop",
      {
        autoAlpha: 0,
        display: "none",
        opacity: 0,
        y: "100%",
      },
      {
        autoAlpha: 1,
        display: "block",
        opacity: 1,
        y: 0,
      }
    );
  }

  /**
   * Scroll back to the top of the page.
   * @function handleScrollTop
   */
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /**
   * Handle the visibility of the scroll to top button.
   * @function handleVisible
   */
  function handleVisible() {
    if (window.scrollY > 300) {
      setIsVisible(true);
      tl.current!.play();
    } else {
      setIsVisible(false);
      console.log("not visible");
      tl.current!.reverse();
    }
  }

  return {
    handleScrollTop,
    isVisible,
    setIsVisible,
  };
}
