import { forwardRef, ForwardedRef } from "react";
import type { NavProps } from "@/components/Nav/types";

/**
 * Contains the markup for a navigation <nav> element.  This includes the NavContainer component.
 * @component Nav
 * @param children
 * @param id
 * @param navClasses
 */
export const Nav = forwardRef(function Nav(
  props: NavProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const containerClasses = props.containerClasses || "";
  const navClasses = props.navClasses || "";

  return (
    <div className={`nav-container ${containerClasses}`} ref={ref}>
      <nav
        aria-label="Main Site Navigation"
        className={`nav ${navClasses}`}
        id={props.id}
        role="navigation"
      >
        {props.children}
      </nav>
    </div>
  );
});
