import { useRef } from "react";

/**
 * A hook that returns references to the main application elements.
 * @hook useAppElements
 */
export function useAppElements() {
  const backToTop = useRef<HTMLDivElement | null>(null);
  const btnToggle = useRef<HTMLButtonElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement | null>(null);
  const header = useRef<HTMLDivElement | null>(null);
  const mobileMenu = useRef<HTMLDivElement | null>(null);
  const nav = useRef<HTMLDivElement | null>(null);
  const navItem = useRef<HTMLLIElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  const outerToggle = useRef<HTMLDivElement | null>(null);

  return {
    backToTop,
    btnToggle,
    closeBtn,
    header,
    mobileMenu,
    nav,
    navItem,
    overlay,
    outerToggle,
  };
}
