import useNavItems from "../hooks/useNavItems.tsx";

/**
 * A functional component that renders a list of navigation links.
 * @constructor NavLinks
 */
function NavLinks() {
  const { NavLinkItems } = useNavItems();

  return (
    <ul className="nav-list">
      <NavLinkItems />
    </ul>
  );
}

export default NavLinks;
