import { forwardRef, ForwardedRef, useEffect } from "react";
import { useAppElements } from "@/hooks/global/useAppElements";
import type { MobileMenuCloseProps } from "@/components/MobileMenu/types";
import { IconSquareRoundedX } from "@/components/Icons/IconSquareRoundedX";

/**
 * The close button for the mobile menu.
 * @param onCloseMenu
 * @constructor
 */
export const MobileMenuClose = forwardRef(function MobileMenuClose(
  props: MobileMenuCloseProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { closeBtn } = useAppElements();

  useEffect(() => {}, [ref]);

  return (
    <button
      className="mobile-menu-close"
      id={props.id}
      onClick={props.onClick}
      ref={closeBtn}
    >
      <div>
        <IconSquareRoundedX color="white" size={32} stroke={2} />
        <span className="visually-hidden">Close Mobile Menu</span>
      </div>
    </button>
  );
});
