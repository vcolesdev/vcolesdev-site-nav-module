import React from "react";
import NavContainer from "./NavContainer";

import "../assets/styles/components/Nav.css";

interface Nav {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  navClasses?: string;
}

/**
 * Contains the markup for a navigation <nav> element.  This includes the NavContainer component.
 * @param children
 * @param id
 * @param navClasses
 */
function Nav({ children, id, navClasses }: Nav) {
  return (
    <NavContainer>
      <nav
        aria-label="Main Site Navigation"
        className={`nav ${navClasses || ""}`}
        id={id}
        role="navigation"
      >
        {children}
      </nav>
    </NavContainer>
  );
}

export default Nav;
