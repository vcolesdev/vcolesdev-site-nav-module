import { ForwardedRef, forwardRef, useEffect } from "react";
import { IconMenu } from "@tabler/icons-react";

interface MobileMenuToggle {
  color?: string;
  id?: string;
  onClick: () => void;
}

/**
 * A button component that toggles the mobile menu.
 * @component MobileMenuToggle
 */
const MobileMenuToggle = forwardRef(function BtnToggleMobileMenu(
  props: MobileMenuToggle,
  ref: ForwardedRef<HTMLButtonElement>
) {
  useEffect(() => {}, []);

  return (
    <button
      aria-label="Open Mobile Menu"
      className="btn btn-toggle-mobile-menu"
      id="btnMobileMenuToggle"
      onClick={props.onClick}
      ref={ref}
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

export default MobileMenuToggle;
