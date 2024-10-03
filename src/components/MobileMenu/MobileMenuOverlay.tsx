import { useEffect, forwardRef, ForwardedRef } from "react";
import type { MobileMenuOverlayProps } from "@/components/MobileMenu/types";

/**
 * The overlay for the mobile menu.
 * @param onCloseMenu
 * @param overlayRef
 * @component MobileMenuOverlay
 */
export const MobileMenuOverlay = forwardRef(function MobileMenuOverlay(
  props: MobileMenuOverlayProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  useEffect(() => {}, [ref]);

  return (
    <div
      id={props.id}
      className="mobile-menu-overlay"
      onClick={props.onClick}
      ref={ref}
      style={props.style}
    />
  );
});
