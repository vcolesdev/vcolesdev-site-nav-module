import { forwardRef, ForwardedRef } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";

interface MobileMenuClose {
  onClick?: () => void;
  id: string;
}

/**
 * The close button for the mobile menu.
 * @param onCloseMenu
 * @constructor
 */
const MobileMenuClose = forwardRef(function MobileMenuClose(
  props: MobileMenuClose,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      className="mobile-menu-close"
      id={props.id}
      onClick={props.onClick}
      ref={ref}
    >
      <IconSquareRoundedX
        className="mobile-menu-close-icon"
        color="white"
        height={32}
        stroke={2}
        width={32}
      />
      <span className="visually-hidden">Close Mobile Menu</span>
    </button>
  );
});

export default MobileMenuClose;
