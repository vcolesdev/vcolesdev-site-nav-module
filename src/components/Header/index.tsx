import { RefObject } from "react";
import useHeader from "../../hooks/useHeader";
import HeaderContainer from "./HeaderContainer";
import Logo from "./Logo";
import NavSlot from "../Nav/NavSlot";
import Nav from "../Nav/";
import NavList from "../Nav/NavList";
import NavToggle from "../Nav/NavToggle";

interface Header {
  btnToggle: RefObject<HTMLButtonElement>;
  handleOpen: () => void;
  id: string;
  nav: RefObject<HTMLDivElement>;
  outerToggle: RefObject<HTMLDivElement>;
}

/**
 * The component containing the header contents of the app.
 * @component Header
 * @param children
 * @param id
 */
function Header(props: Header) {
  const { header } = useHeader();

  return (
    <HeaderContainer>
      <header className="header" id={props.id} ref={header}>
        <Logo id="vcSiteLogo" />
        <NavSlot>
          <Nav id="vcSiteNav" ref={props.nav}>
            <NavList />
          </Nav>
          <NavToggle
            btnRef={props.btnToggle}
            color={"#fefefe"}
            onClick={() => props.handleOpen()}
            ref={props.outerToggle}
          />
        </NavSlot>
      </header>
    </HeaderContainer>
  );
}

export default Header;
