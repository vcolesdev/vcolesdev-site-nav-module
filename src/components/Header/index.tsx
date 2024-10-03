import { ForwardedRef, forwardRef, useEffect } from "react";
import type { HeaderProps } from "./types";
import { useAppElements } from "@/hooks/global/useAppElements";
import { HeaderContainer } from "@/components/Header/HeaderContainer";
import { Logo } from "@/components/Header/Logo";
import { Nav } from "@/components/Nav";
import { NavSlot } from "@/components/Nav/NavSlot";
import { NavList } from "@/components/Nav/NavList";
import { NavListItems } from "@/components/Nav/NavListItems";
import { BtnShowMenu } from "@/components/MobileMenu/BtnShowMenu";

/**
 * The component containing the header contents of the app.
 * @component Header
 * @param children
 * @param id
 */
export const Header = forwardRef(function Header(
  props: HeaderProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { header } = useAppElements();

  useEffect(() => {}, [ref]);

  return (
    <HeaderContainer>
      <header className="header" id={props.id} ref={header}>
        <Logo id="vcSiteLogo" />
        <NavSlot>
          <Nav id="vcSiteNav" ref={props.nav}>
            <NavList id="vcSiteNavList">
              <NavListItems />
            </NavList>
          </Nav>
          <BtnShowMenu
            btnRef={props.btnToggle}
            color={"#fefefe"}
            onClick={props.handleOpen}
            ref={props.outerToggle}
          />
        </NavSlot>
      </header>
    </HeaderContainer>
  );
});
