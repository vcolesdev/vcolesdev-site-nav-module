import React, { forwardRef } from "react";

interface Nav {
  children: React.ReactNode | React.ReactNode[];
  containerClasses?: string;
  id: string;
  navClasses?: string;
}

/**
 * Contains the markup for a navigation <nav> element.  This includes the NavContainer component.
 * @component Nav
 * @param children
 * @param id
 * @param navClasses
 */
const Nav = forwardRef(function Nav(
  props: Nav,
  ref: React.ForwardedRef<HTMLDivElement>
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

export default Nav;
