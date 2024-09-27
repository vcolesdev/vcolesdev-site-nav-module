import React, { forwardRef } from "react";

interface NavItem {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
}

/**
 * Contains the markup for a navigation item <li>.
 * @param id
 * @param children
 */
const NavItem = forwardRef(function NavItem(
  props: NavItem,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  return (
    <li className={`nav-item`} id={props.id} ref={ref} role="menuitem">
      <span className="nav-item-span">{props.children}</span>
    </li>
  );
});

export default NavItem;
