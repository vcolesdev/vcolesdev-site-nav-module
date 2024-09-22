import { useEffect } from "react";
import navLinksJSON from "../navlinks.json";
import NavItem from "../components/NavItem";
import NavLink from "../components/NavLink";

/**
 * @hook useNavItems
 */
export default function useNavItems() {
  const navLinks = navLinksJSON.data;

  useEffect(() => {}, []);

  const NavLinkItems = () => {
    return navLinks.map((navLink) => {
      return (
        <NavItem key={navLink.id} id={navLink.id}>
          <NavLink id={navLink.id} linkText={navLink.title} url={navLink.url} />
        </NavItem>
      );
    });
  };

  return {
    navLinks: navLinks,
    NavLinkItems: NavLinkItems,
  };
}
