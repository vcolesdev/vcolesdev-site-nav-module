import EventFactory from "./EventFactory";

/**
 * Event factory type for layout events.
 * @property {() => void} ON_MOBILE_LAYOUT_ACTIVE Event to call when the mobile layout is active.
 * @property {() => void} ON_DESKTOP_LAYOUT_ACTIVE Event to call with the desktop layout is active.
 * @type LayoutEvents
 */
type LayoutEvents = {
  ON_MOBILE_LAYOUT_ACTIVE: () => void;
  ON_DESKTOP_LAYOUT_ACTIVE: () => void;
};

/**
 * Event factory type for navigation events.
 * @property {() => void} ON_NAV_MENU_SHOW Event to call when the navigation menu (desktop) is shown. Toggle mobile menu visibility hidden.
 * @property {() => void} ON_NAV_MENU_HIDE Event to call when the navigation menu (desktop) is hidden. Toggle mobile menu visibility visible.
 * @type NavEvents
 */
type NavEvents = {
  ON_NAV_MENU_SHOW: () => void;
  ON_NAV_MENU_HIDE: () => void;
};

/**
 * Event factory type for mobile menu events.
 * @property {() => void} ON_MOBILE_MENU_SHOW Event to call when the mobile menu is shown (usually a button click, or space bar keypress).
 * @property {() => void} ON_MOBILE_MENU_HIDE Event to call when the mobile menu is hidden (usually a button click, or ESC key).
 * @type MobileMenuEvents
 */
type MobileMenuEvents = {
  ON_MOBILE_MENU_SHOW: () => void;
  ON_MOBILE_MENU_HIDE: () => void;
};

/* Event Factories */

const layoutEventsFactory = new EventFactory<LayoutEvents>();
const navEventsFactory = new EventFactory<NavEvents>();
const mobileMenuEventsFactory = new EventFactory<MobileMenuEvents>();

// Export

export { layoutEventsFactory, navEventsFactory, mobileMenuEventsFactory };
