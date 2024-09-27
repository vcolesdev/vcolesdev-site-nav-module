import React, { MutableRefObject } from "react";
import MobileMenuToggle from "../MobileMenu/MobileMenuToggle";

interface NavToggle {
  color?: string;
  btnRef: MutableRefObject<HTMLButtonElement | null>;
  onClick: () => void;
}

/**
 * A container component for our navigation toggle button.
 * @component NavToggle
 * @param props
 * @param ref
 */
const NavToggle = React.forwardRef(function NavToggle(
  props: NavToggle,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className="toggle-mobile-menu" ref={ref}>
      <MobileMenuToggle
        color={props.color || "white"}
        onClick={props.onClick}
        ref={props.btnRef}
      />
    </div>
  );
});

export default NavToggle;
