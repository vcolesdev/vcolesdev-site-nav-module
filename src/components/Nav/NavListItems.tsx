import { ForwardedRef, forwardRef, useEffect } from "react";
import type { NavListItemsProps } from "@components/Nav/types";
import { NavItem } from "@/components/Nav/NavItem";
import { NavLink } from "@/components/Nav/NavLink";

import navLinksJSON from "../../navlinks.json";

/**
 * Contains the markup for a list of navigation items.
 * @component NavListItems
 */
export const NavListItems = forwardRef(function NavListItems(
  props: NavListItemsProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  const links = props;
  const navLinks = navLinksJSON.data;

  useEffect(() => {}, [links]);

  return navLinks.map((navLink, i) => {
    return (
      <NavItem
        key={`nav-item-${i}`}
        id={`navItem-${i}`}
        isMobile={props.isMobile}
        ref={ref}
      >
        <NavLink
          id={navLink.id}
          linkText={navLink.title}
          linkClasses={props.linkClasses}
          url={navLink.url}
        />
      </NavItem>
    );
  });
});
