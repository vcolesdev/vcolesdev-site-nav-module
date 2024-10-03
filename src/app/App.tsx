import { LayoutProvider } from "@/context/Layout/LayoutContext";
import { MobileMenuProvider } from "@/context/MobileMenu/MobileMenuContext";
import { useAppElements } from "@/hooks/global/useAppElements";
import { useMobileMenu } from "@/hooks/elements/useMobileMenu";
import { useNav } from "@/hooks/elements/useNav";
import { useNavItems } from "@/hooks/elements/useNavItems";
import { useScrollTop } from "@/hooks/gsap/useScrollTop";
import { useTimelines } from "@/hooks/gsap/useTimeline";
import { BackToTop } from "@/components/BackToTop";
import { MainContent } from "@/components/MainContent";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { MobileMenuOverlay } from "@/components/MobileMenu/MobileMenuOverlay";

import "./App.css";

import "@/assets/styles/components/Header.css";
import "@/assets/styles/components/Logo.css";
import "@/assets/styles/components/Nav.css";
import "@/assets/styles/components/MobileMenu.css";
/**
 * The main application component.
 * @component App
 */
export function App() {
  const {
    backToTop,
    btnToggle,
    closeBtn,
    mobileMenu,
    nav,
    navItem,
    overlay,
    outerToggle,
  } = useAppElements();

  const { mobileMenuTL } = useTimelines();
  const { isVisible: isScrollTopVisible } = useScrollTop();
  const { isOpen, handleOpen, handleClose, handleCloseESC } = useMobileMenu();

  useNav();
  useNavItems();

  function handleScrollTop(e: Event) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Scroll finished", e);
  }

  return (
    <>
      <LayoutProvider>
        <MobileMenuProvider>
          <div style={{ position: "relative" }}>
            {/* Skip to content link */}
            <a href="#mainContent" className="visually-hidden">
              Skip to main content
            </a>
            {/* Header */}
            <Header
              btnToggle={btnToggle}
              handleOpen={() => {
                console.log("Mobile menu opened.", mobileMenuTL);
                handleOpen();
              }}
              id="vcSiteHeader"
              nav={nav}
              outerToggle={outerToggle}
            />
            <MainContent id="mainContent" />
            <BackToTop
              isVisible={isScrollTopVisible}
              id="backToTop"
              onClick={() => handleScrollTop()}
              ref={backToTop}
            />
          </div>
          {/* Mobile menu */}
          <MobileMenu
            animTL={mobileMenuTL.current}
            btnToggle={btnToggle}
            closeBtn={closeBtn}
            handleClose={() => handleClose()}
            handleCloseESC={(e) => handleCloseESC(e)}
            handleOpen={() => handleOpen()}
            id="mobileMenu"
            isOpen={isOpen}
            navItems={navItem}
            outerToggle={outerToggle}
            overlay={overlay}
            ref={mobileMenu}
          />
          <MobileMenuOverlay
            id="mobileMenuOverlay"
            onClick={() => handleClose()}
            ref={overlay}
          />
        </MobileMenuProvider>
      </LayoutProvider>
    </>
  );
}
