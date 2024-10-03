import { useGSAP } from "@gsap/react";
import { useTimelines } from "@/hooks/gsap/useTimeline";
import { useMatchMedia } from "@/hooks/gsap/useMatchMedia";
import { BREAKPOINT_LG } from "@/app/const";

/**
 * Use the navigation items.
 * @hook useNavItems
 */
export function useNavItems() {
  const { addMatchMedia } = useMatchMedia();
  const { navItemTL } = useTimelines();

  useGSAP(() => {
    // At 1000px and above, hide the mobile menu toggle button.
    addMatchMedia(`(min-width: ${BREAKPOINT_LG}px)`, () => {
      if (!navItemTL || !navItemTL.current) return;
      navItemTL.current.play();
    });

    // At 999px and below, show the mobile menu toggle button.
    addMatchMedia(`(max-width: ${BREAKPOINT_LG - 1}px)`, () => {
      if (!navItemTL || !navItemTL.current) return;
      navItemTL.current.reverse();
    });
  });
}
