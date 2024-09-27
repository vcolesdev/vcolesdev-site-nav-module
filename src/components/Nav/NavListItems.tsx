import { ForwardedRef, forwardRef, useEffect } from "react";
import NavItem from "../../components/Nav/NavItem";
import NavLink from "../../components/Nav/NavLink";

import navLinksJSON from "../../navlinks.json";

/**
 * Contains the markup for a list of navigation items.
 * @component NavListItems
 */
const NavListItems = forwardRef(function NavListItems(
  { ...props }: { [key: string]: unknown },
  ref: ForwardedRef<HTMLLIElement>
) {
  const links = props;
  const navLinks = navLinksJSON.data;

  useEffect(() => {}, [links]);

  return navLinks.map((navLink, i) => {
    return (
      <NavItem key={`nav-link-${i}`} id={`navLink-${i}`} ref={ref}>
        <NavLink id={navLink.id} linkText={navLink.title} url={navLink.url} />
      </NavItem>
    );
  });
});

export default NavListItems;
