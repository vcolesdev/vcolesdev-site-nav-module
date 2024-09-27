import React, { useEffect } from "react";

interface MobileMenuOverlay {
  id: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * The overlay for the mobile menu.
 * @param onCloseMenu
 * @param overlayRef
 * @component MobileMenuOverlay
 */
const MobileMenuOverlay = React.forwardRef(function MobileMenuOverlay(
  props: MobileMenuOverlay,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  useEffect(() => {
    // console.log("MobileMenuOverlay: ", ref);
  }, []);

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

export default MobileMenuOverlay;
