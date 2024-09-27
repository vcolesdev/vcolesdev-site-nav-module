import React, { forwardRef, RefObject } from "react";
import Logo from "../Header/Logo";
import MobileMenuClose from "./MobileMenuClose";
import NavListItems from "../Nav/NavListItems";

interface MobileMenu {
  animTl?: GSAPTimeline;
  btnToggle?: RefObject<HTMLButtonElement>;
  closeBtn?: RefObject<HTMLButtonElement>;
  handleClose?: () => void;
  handleCloseESC?: (e: KeyboardEvent) => void;
  handleOpen?: () => void;
  id?: string;
  isOpen?: boolean;
  navItems?: RefObject<HTMLLIElement>;
  outerToggle?: RefObject<HTMLDivElement>;
  overlay?: RefObject<HTMLDivElement>;
  style?: React.CSSProperties;
}

interface Slot {
  children: React.ReactNode | React.ReactNode[];
}

/* Components */

const MenuSlot = (props: Slot) => <div>{props.children}</div>;
const Spacer = () => <div style={{ marginBottom: "2rem" }} />;
const LogoSlot = (props: Slot) => (
  <div style={{ marginLeft: "2rem" }}>{props.children}</div>
);

/**
 * The mobile menu.
 * @param props
 * @component MobileMenu
 */
const MobileMenu = forwardRef(function MobileMenu(
  props: MobileMenu,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <>
      <aside
        className="mobile-menu"
        id={props.id}
        role="navigation"
        ref={ref}
        style={props.style}
        tabIndex={-1}
      >
        <MobileMenuClose
          id="mobileMenuClose"
          ref={props.closeBtn}
          onClick={props.handleClose}
        />
        <LogoSlot>
          <Logo id="logoMobileMenu" />
        </LogoSlot>
        <Spacer />
        <MenuSlot>
          <NavListItems ref={props.navItems} />
        </MenuSlot>
      </aside>
    </>
  );
});

export default MobileMenu;
