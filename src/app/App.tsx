import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import useApp from "./useApp";
import AppContent from "./AppContent";
import { MobileMenuProvider } from "../context/MobileMenuContext";
import useMobileMenu from "../hooks/useMobileMenu";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import MobileMenuOverlay from "../components/MobileMenu/MobileMenuOverlay";

import "./App.css";
import "../assets/styles/components/Header.css";
import "../assets/styles/components/Nav.css";

/**
 * The main application component.
 * @component App
 */
function App() {
  /* GSAP */
  const menuAnim = useRef<GSAPTimeline>();

  /* Components */
  const nav = useRef<HTMLDivElement>(null);
  const navItems = useRef<HTMLLIElement>(null);
  const btnToggle = useRef<HTMLButtonElement>(null);
  const outerToggle = useRef<HTMLDivElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  /* State */
  const { isOpen, setIsOpen } = useMobileMenu();

  /* Hooks */
  useApp();

  useEffect(() => {
    window.addEventListener("keydown", handleCloseESC);
    return () => {
      window.removeEventListener("keydown", handleCloseESC);
    };
  }, [isOpen, menuAnim]);

  useGSAP(() => {
    menuAnim.current = gsap.timeline({ reversed: true });
    handleMenuAnimFrom(menuAnim.current);
    handleMenuAnimTo(menuAnim.current);
  });

  /**
   * Handle the menu animation from.
   * @param animation
   */
  function handleMenuAnimFrom(animation: GSAPTimeline) {
    if (!animation) return;
    animation.from(mobileMenu.current, {
      autoAlpha: 0,
      display: "none",
      left: "-100%",
      opacity: 0,
    });
    animation.from(overlay.current, {
      autoAlpha: 0,
      display: "none",
      opacity: 0,
    });
    animation.from(".nav-link-anchor", {
      autoAlpha: 0,
      display: "none",
      left: "-100%",
      opacity: 0,
      stagger: 0.5,
      x: -100,
    });
  }

  /**
   * Handle the menu animation to.
   * @param animation
   */
  function handleMenuAnimTo(animation: GSAPTimeline) {
    if (!animation) return;

    animation.to(mobileMenu.current, {
      autoAlpha: 1,
      display: "block",
      duration: 0.4,
      left: 0,
      opacity: 1,
    });
    animation.to(
      overlay.current,
      {
        autoAlpha: 1,
        display: "block",
        duration: 0.4,
        opacity: 1,
      },
      ">"
    );
    animation.to(
      ".nav-link-anchor",
      {
        autoAlpha: 1,
        display: "block",
        left: 0,
        opacity: 1,
        stagger: 0.5,
      },
      ">"
    );
  }

  /**
   * Handle opening the mobile menu.
   * @function handleOpen
   */
  function handleOpen() {
    if (menuAnim.current && menuAnim.current.reversed()) {
      menuAnim.current.play();
      setIsOpen(true);
    } else {
      console.error("Menu animation not found.", menuAnim.current);
    }
  }

  /**
   * Handle closing the mobile menu.
   * @function handleClose
   */
  function handleClose() {
    if (menuAnim.current && !menuAnim.current.reversed()) {
      menuAnim.current.reverse();
      setIsOpen(false);
    } else {
      console.error("Menu animation not found.", menuAnim.current);
    }
  }

  /**
   * Handle closing the mobile menu with the ESC key.
   * @function handleCloseESC
   * @param e
   */
  function handleCloseESC(e: KeyboardEvent) {
    if (e.key !== "Escape") return;
    handleClose();
  }

  return (
    <MobileMenuProvider>
      <div>
        <Header
          btnToggle={btnToggle}
          handleOpen={handleOpen}
          id="vcolesdev-site-header"
          nav={nav}
          outerToggle={outerToggle}
        />
        <AppContent />
      </div>
      <MobileMenu
        animTl={menuAnim.current}
        btnToggle={btnToggle}
        closeBtn={closeBtn}
        handleClose={() => handleClose()}
        handleCloseESC={(e: KeyboardEvent) => handleCloseESC(e)}
        handleOpen={() => handleOpen()}
        id="mobileMenu"
        isOpen={isOpen}
        navItems={navItems}
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
  );
}

export default App;
