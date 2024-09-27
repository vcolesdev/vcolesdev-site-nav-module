import React, { forwardRef } from "react";
import NavListItems from "./NavListItems";

interface NavList {
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
      <NavListItems />
    </ul>
  );
});

export default NavList;
