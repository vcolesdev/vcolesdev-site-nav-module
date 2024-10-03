import { ForwardedRef, forwardRef, useEffect } from "react";
import type { NavItemProps } from "@/components/Nav/types";
import { useAppElements } from "@/hooks/global/useAppElements";

/**
 * Contains the markup for a navigation item <li>.
 * @param id
 * @param children
 */
export const NavItem = forwardRef(function NavItem(
  props: NavItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  const { navItem } = useAppElements();

  useEffect(() => {}, [ref]);

  return (
    <li
      className={`${props.isMobile ? "nav-item-mobile" : "nav-item"}`}
      id={props.id}
      ref={navItem}
      role="menuitem"
    >
      <span className="nav-item-span">{props.children}</span>
    </li>
  );
});
