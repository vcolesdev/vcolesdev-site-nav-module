interface NavLink {
  id: string | number;
  linkClasses?: string;
  linkText: string;
  url: string;
}

/**
 * An anchor tag for navigation links. This component is used in the NavItems component in the useNavItems hook.
 * @param id
 * @param linkClasses
 * @param linkText
 * @param url
 */
function NavLink({ id, linkClasses, linkText, url }: NavLink) {
  return (
    <a
      className={`nav-link-anchor ${linkClasses || ""}`}
      id={`nav-link-anchor-${id}`}
      href={url}
    >
      <span className="nav-link-anchorspan">{linkText}</span>
    </a>
  );
}

export default NavLink;
