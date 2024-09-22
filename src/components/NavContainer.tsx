import React from "react";

interface NavContainer {
  children: React.ReactNode | React.ReactNode[];
  containerClasses?: string;
}

/**
 * A container component for our main navigation component.  This component is used in the <Nav> component.
 * @param children
 * @param containerClasses
 * @constructor
 */
function NavContainer({ children, containerClasses }: NavContainer) {
  return (
    <div className={`nav-container ${containerClasses || ""}`}>{children}</div>
  );
}

export default NavContainer;
