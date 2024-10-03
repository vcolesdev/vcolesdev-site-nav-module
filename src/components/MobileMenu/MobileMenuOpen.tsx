import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { IconMenu } from "@/components/Icons/IconMenu";
import type { MobileMenuOpenProps } from "@/components/MobileMenu/types";

/**
 * A button component that toggles the mobile menu.
 * @component MobileMenuToggle
 */
export const MobileMenuOpen = forwardRef(function MobileMenuOpen(
  props: MobileMenuOpenProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const btnToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {}, [ref]);

  return (
    <button
      aria-label="Open Mobile Menu"
      className="btn btn-toggle-mobile-menu"
      id="btnMobileMenuToggle"
      onClick={props.onClick}
      ref={btnToggle}
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
  );
});
