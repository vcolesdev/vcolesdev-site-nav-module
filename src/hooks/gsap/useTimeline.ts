import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { GSAPTimeline } from "@/types";
import { useTweenVars } from "@/hooks/gsap/useTweenVars";
import { createTimeline } from "@/utils/createTimeline";

/**
 * Contains the timelines for the application.
 * @hook useTimelines
 */
export function useTimelines() {
  const mobileToggleTL = useRef<GSAPTimeline | null>(null);
  const mobileMenuTL = useRef<GSAPTimeline | null>(null);
  const navItemTL = useRef<GSAPTimeline | null>(null);
  const headerTL = useRef<GSAPTimeline | null>(null);

  const {
    VARS_MOBILE_MENU_OVERLAY,
    VARS_MOBILE_MENU,
    VARS_MOBILE_MENU_LOGO,
    VARS_MOBILE_MENU_NAV_LINK,
    VARS_HEADER_NAV,
    VARS_HEADER_NAV_ITEM,
  } = useTweenVars();

  // Create the timelines
  useGSAP(() => {
    createMobileMenuTL();
    createHeaderNavItemTL();
    createHeaderNavTL();
  });

  // Use the timelines
  useGSAP(() => {
    handleMobileMenuTL();
    handleHeaderNavTL();
    handleHeaderNavItemTL();
  });

  /**
   * Create the mobile menu timeline.
   * @function createMobileMenuTL
   */
  function createMobileMenuTL() {
    mobileToggleTL.current = createTimeline({ reversed: true });
    mobileMenuTL.current = createTimeline({
      ease: "none",
      reversed: true,
    });
  }

  /**
   * Create the header navigation timeline.
   * @function createHeaderNavTL
   */
  function createHeaderNavTL() {
    headerTL.current = createTimeline({
      ease: "none",
      reversed: true,
    });
  }

  /**
   * Create the header navigation items timeline.
   * @function createHeaderNavItemTL
   */
  function createHeaderNavItemTL() {
    navItemTL.current = createTimeline({
      ease: "none",
      reversed: true,
    });
  }

  /**
   * Handle the mobile menu timeline.
   * @function handleMobileMenuTL
   */
  function handleMobileMenuTL() {
    mobileMenuTL.current!.fromTo(
      "#mobileMenuOverlay",
      VARS_MOBILE_MENU_OVERLAY.from,
      VARS_MOBILE_MENU_OVERLAY.to
    );
    mobileMenuTL.current!.fromTo(
      "#mobileMenu",
      VARS_MOBILE_MENU.from,
      VARS_MOBILE_MENU.to,
      "-=0.4"
    );
    mobileMenuTL.current!.fromTo(
      "#logoMobileMenu",
      VARS_MOBILE_MENU_LOGO.from,
      VARS_MOBILE_MENU_LOGO.to
    );
    mobileMenuTL.current!.fromTo(
      ".nav-link-anchor--mobile",
      VARS_MOBILE_MENU_NAV_LINK.from,
      VARS_MOBILE_MENU_NAV_LINK.to,
      "-=0.4"
    );
  }

  /**
   * Handle the header navigation timeline.
   * @function handleHeaderNavTL
   */
  function handleHeaderNavTL() {
    headerTL.current!.fromTo(
      ".nav-container",
      VARS_HEADER_NAV.from,
      VARS_HEADER_NAV.to
    );
  }

  /**
   * Handle the header navigation items timeline.
   * @function handleHeaderNavItemTL
   */
  function handleHeaderNavItemTL() {
    navItemTL.current!.fromTo(
      ".nav-item",
      VARS_HEADER_NAV_ITEM.from,
      VARS_HEADER_NAV_ITEM.to
    );
  }

  return {
    headerTL,
    mobileMenuTL,
    mobileToggleTL,
    navItemTL,
  };
}
