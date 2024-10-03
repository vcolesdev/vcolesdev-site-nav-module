import { forwardRef, ForwardedRef } from "react";
import type { NavListProps } from "@/components/Nav/types";

/**
 * A functional component that renders a list of navigation links.
 * @constructor NavList
 */
export const NavList = forwardRef(function NavList(
  props: NavListProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul className="nav-list" id={props.id} ref={ref}>
      {props.children}
    </ul>
  );
});
