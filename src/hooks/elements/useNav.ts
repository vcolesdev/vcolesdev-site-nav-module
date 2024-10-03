import { useGSAP } from "@gsap/react";
import { useMatchMedia } from "@/hooks/gsap/useMatchMedia";
import { useTimelines } from "@/hooks/gsap/useTimeline";
import { BREAKPOINT_LG } from "@/app/const";

export function useNav() {
  const { addMatchMedia } = useMatchMedia();
  const { headerTL } = useTimelines();

  useGSAP(() => {
    // At 1000px and above, hide the mobile menu toggle button.
    addMatchMedia(`(min-width: ${BREAKPOINT_LG}px)`, () => {
      if (!headerTL || !headerTL.current) return;
      headerTL.current.play();
    });

    // At 999px and below, show the mobile menu toggle button.
    addMatchMedia(`(max-width: ${BREAKPOINT_LG - 1}px)`, () => {
      if (!headerTL || !headerTL.current) return;
      headerTL.current.reverse();
    });
  });
}
