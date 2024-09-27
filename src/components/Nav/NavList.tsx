import React, { forwardRef } from "react";

interface NavList {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
}

/**
 * A functional component that renders a list of navigation links.
 * @constructor NavList
 */
const NavList = forwardRef(function NavList(
  props: NavList,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  return (
    <ul className="nav-list" id={props.id} ref={ref}>
      {props.children}
    </ul>
  );
});

export default NavList;
