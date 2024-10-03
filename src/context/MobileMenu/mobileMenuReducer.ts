import { MutableRefObject } from "react";

type OPEN_MOBILE_MENU = "OPEN_MOBILE_MENU";
type CLOSE_MOBILE_MENU = "CLOSE_MOBILE_MENU";

interface MobileMenuApi {
  element: MutableRefObject<HTMLDivElement | null> | null;
  isOpen: boolean | null;
}

interface OpenMobileMenu {
  type: OPEN_MOBILE_MENU;
  payload: MobileMenuApi;
}

interface CloseMobileMenu {
  type: CLOSE_MOBILE_MENU;
  payload: MobileMenuApi;
}

interface CloseMobileMenuESC {
  type: "CLOSE_MOBILE_MENU_ESC";
  payload: MobileMenuApi;
}

type MobileMenuActions = OpenMobileMenu | CloseMobileMenu | CloseMobileMenuESC;

const initialMobileMenu: MobileMenuApi = {
  element: null,
  isOpen: null,
};

/**
 * The mobile menu reducer.  Controls the state of the mobile menu.
 * @param menu
 * @param action
 */
const mobileMenuReducer = (
  menu: MobileMenuApi = initialMobileMenu,
  action: MobileMenuActions
) => {
  switch (action.type) {
    case "OPEN_MOBILE_MENU":
      return {
        ...menu,
        element: action.payload.element,
        isOpen: true,
      };
    case "CLOSE_MOBILE_MENU":
      return {
        ...menu,
        element: action.payload.element,
        isOpen: false,
      };
    case "CLOSE_MOBILE_MENU_ESC":
      return {
        ...menu,
        element: action.payload.element,
        isOpen: false,
      };
    default:
      return menu;
  }
};

export type {
  MobileMenuApi,
  MobileMenuActions,
  OpenMobileMenu,
  CloseMobileMenu,
};
export { initialMobileMenu, mobileMenuReducer };
