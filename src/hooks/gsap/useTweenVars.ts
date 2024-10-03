type TweenVars = gsap.TweenVars;

import { createTweenVars } from "@/utils/createTweenVars";

/**
 * Contains the tween variables for the application.
 * @hook useTweenVars
 */
export function useTweenVars() {
  /**
   * Tween variables for default hidden state.
   * @constant HIDDEN
   */
  const HIDDEN: TweenVars = { autoAlpha: 0, display: "none", opacity: 0 };

  /**
   * Tween variables for default visible state.
   * @constant VISIBLE
   */
  const VISIBLE: TweenVars = { autoAlpha: 1, display: "block", opacity: 1 };

  /**
   * Tween variables for the mobile menu.
   * @constant VARS_MOBILE_MENU
   */
  const VARS_MOBILE_MENU = createTweenVars(
    { ...HIDDEN, left: "-100%" },
    { ...VISIBLE, left: 0 }
  );

  /**
   * Tween variables for the mobile menu logo.
   * @constant VARS_MOBILE_MENU_LOGO
   */
  const VARS_MOBILE_MENU_LOGO = createTweenVars(
    { ...HIDDEN, x: -100 },
    { ...VISIBLE, duration: 0.4, x: 0 }
  );

  /**
   * Tween variables for the mobile menu overlay.
   * @constant VARS_MOBILE_MENU_OVERLAY
   */
  const VARS_MOBILE_MENU_OVERLAY = createTweenVars(
    { ...HIDDEN },
    { ...VISIBLE }
  );

  /**
   * Tween variables for the mobile menu navigation links.
   * @constant VARS_MOBILE_MENU_NAV_LINK
   */
  const VARS_MOBILE_MENU_NAV_LINK = createTweenVars(
    { ...HIDDEN, stagger: 0.1, x: -100 },
    { ...VISIBLE, duration: 0.4, stagger: 0.1, x: 0 }
  );

  /**
   * Tween variables for the header navigation.
   * @constant VARS_HEADER_NAV
   */
  const VARS_HEADER_NAV = createTweenVars({ ...HIDDEN }, { ...VISIBLE });

  /**
   * Tween variables for the header navigation items.
   * @constant VARS_HEADER_NAV_ITEM
   */
  const VARS_HEADER_NAV_ITEM = createTweenVars(
    {
      autoAlpha: 0,
      opacity: 0,
      y: -100,
    },
    {
      autoAlpha: 1,
      duration: 0.4,
      opacity: 1,
      stagger: 0.1,
      y: 0,
    }
  );

  return {
    HIDDEN,
    VISIBLE,
    VARS_HEADER_NAV,
    VARS_HEADER_NAV_ITEM,
    VARS_MOBILE_MENU,
    VARS_MOBILE_MENU_OVERLAY,
    VARS_MOBILE_MENU_LOGO,
    VARS_MOBILE_MENU_NAV_LINK,
  };
}
