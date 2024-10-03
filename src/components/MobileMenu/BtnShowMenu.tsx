import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import { useGSAP } from "@gsap/react";
import { IconMenu } from "@/components/Icons/IconMenu";
import type { BtnShowMenuProps } from "@/components/MobileMenu/types";
import { useMatchMedia } from "@/hooks/gsap/useMatchMedia";
import { useTimelines } from "@/hooks/gsap/useTimeline";
import { BREAKPOINT_LG } from "@/app/const";

type TweenVars = gsap.TweenVars;

export function useBtnShowMenu(
  element: MutableRefObject<HTMLDivElement | null>
) {
  const { addMatchMedia } = useMatchMedia();
  const { mobileToggleTL } = useTimelines();

  const mobileToggle = {
    from: {
      autoAlpha: 0,
      display: "none",
      opacity: 0,
      position: "absolute",
      x: 100,
    } as TweenVars,
    to: {
      autoAlpha: 1,
      display: "block",
      opacity: 1,
      x: 0,
    } as TweenVars,
  };

  useGSAP(() => {
    mobileToggleTL.current!.fromTo(
      element.current!,
      mobileToggle.from,
      mobileToggle.to,
      ">=-0.75"
    );

    // At 1000px and above, hide the mobile menu toggle button.
    addMatchMedia(`(min-width: ${BREAKPOINT_LG}px)`, () => {
      if (!mobileToggleTL || !mobileToggleTL.current) return;
      mobileToggleTL.current.reverse();
    });

    // At 999px and below, show the mobile menu toggle button.
    addMatchMedia(`(max-width: ${BREAKPOINT_LG - 1}px)`, () => {
      if (!mobileToggleTL || !mobileToggleTL.current) return;
      mobileToggleTL.current.play();
    });
  });
}

/**
 * A container component for our navigation toggle button.
 * @component NavToggle
 * @param props
 * @param ref
 */
export const BtnShowMenu = forwardRef(function BtnShowMenu(
  props: BtnShowMenuProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const toggleRef = useRef<HTMLDivElement>(null);

  useBtnShowMenu(toggleRef);

  useEffect(() => {}, [ref]);

  return (
    <div className="toggle-mobile-menu" ref={toggleRef}>
      <button
        aria-label="Open Mobile Menu"
        className="btn btn-toggle-mobile-menu"
        id="btnOpenMobileMenu"
        onClick={props.onClick}
        ref={props.btnRef}
      >
        <span
          style={{
            alignItems: "center",
            display: "flex",
            maxWidth: "24px",
            width: "100%",
          }}
        >
          <IconMenu size={24} stroke={2} color={props.color || "#333"} />
        </span>
      </button>
    </div>
  );
});
