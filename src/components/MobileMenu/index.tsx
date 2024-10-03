import type { SlotProps } from "@/types";
import { forwardRef, ForwardedRef, useEffect } from "react";
import type { MobileMenuProps } from "@/components/MobileMenu/types";
import { Logo } from "@/components/Header/Logo";
import { MobileMenuClose } from "@/components/MobileMenu/MobileMenuClose";
import { NavList } from "@/components/Nav/NavList";
import { NavListItems } from "@/components/Nav/NavListItems";
import { useAppElements } from "@/hooks/global/useAppElements";

/* Components */

export const MenuSlot = (props: SlotProps) => <div>{props.children}</div>;
export const Spacer = () => <div style={{ marginBottom: "2rem" }} />;
export const LogoSlot = (props: SlotProps) => (
  <div style={{ marginLeft: "2rem" }}>{props.children}</div>
);

/**
 * The mobile menu.
 * @param props
 * @component MobileMenu
 */
export const MobileMenu = forwardRef(function MobileMenu(
  props: MobileMenuProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { mobileMenu } = useAppElements();

  useEffect(() => {}, [ref]);

  return (
    <>
      <aside
        className="mobile-menu"
        id={props.id}
        role="navigation"
        ref={mobileMenu}
        style={props.style}
        tabIndex={-1}
      >
        <MobileMenuClose
          id="mobileMenuClose"
          ref={props.closeBtn}
          onClick={props.handleClose}
        />
        <LogoSlot>
          <Logo id="logoMobileMenu" />
        </LogoSlot>
        <Spacer />
        <MenuSlot>
          <NavList id="mobileMenuList">
            <NavListItems
              isMobile={true}
              linkClasses="nav-link-anchor--mobile"
            />
          </NavList>
        </MenuSlot>
      </aside>
    </>
  );
});
