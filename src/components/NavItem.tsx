import React from "react";

interface NavItem {
  children: React.ReactNode | React.ReactNode[];
  id: string | number;
}

/**
 * Contains the markup for a navigation item <li>.
 * @param id
 * @param children
 */
function NavItem({ id, children }: NavItem) {
  return (
    <li className={`nav-item nav-item-${id}`} id={`nav-item-${id}`}>
      <span className="nav-item-span">{children}</span>
    </li>
  );
}

export default NavItem;
