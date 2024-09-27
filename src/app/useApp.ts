import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

/**
 * Handle the application state and actions.
 * @hook useApp
 */
export default function useApp() {
  const mm = gsap.matchMedia();
  const breakPoint = 1000;

  //const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {}, []);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".nav-container",
      {
        autoAlpha: 1,
        display: "flex",
        opacity: 1,
        y: 0,
      },
      {
        autoAlpha: 0,
        display: "none",
        duration: 0.2,
        opacity: 0,
        y: "-100%",
      }
    );

    tl.fromTo(
      ".toggle-mobile-menu",
      {
        autoAlpha: 0,
        display: "none",
        opacity: 0,
        position: "absolute",
        x: 100,
      },
      {
        autoAlpha: 1,
        display: "block",
        opacity: 1,
        x: 0,
      },
      ">"
    );

    mm.add(`(min-width: ${breakPoint}px)`, () => {
      tl.reverse();
    });

    mm.add(`(max-width: ${breakPoint - 1}px)`, () => {
      tl.play();
    });
  });
}
