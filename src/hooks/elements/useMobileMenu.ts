import { useEffect, useReducer, useState } from "react";
import {
  initialMobileMenu,
  mobileMenuReducer,
} from "@/context/MobileMenu/mobileMenuReducer";
import { useTimelines } from "@/hooks/gsap/useTimeline";
import { useListeners } from "@/hooks/global/useListeners";
import { useAppElements } from "@/hooks/global/useAppElements";
import { handleFocusTrap } from "@/utils/handleFocusTrap";

/**
 * Handle Mobile Menu state and actions, like `isOpen`.
 * @hook useMobileMenu
 */
export function useMobileMenu() {
  const { mobileMenuTL } = useTimelines();
  const { mobileMenu: el } = useAppElements();
  const { addListener, removeListener } = useListeners();

  const [mobileMenu, dispatch] = useReducer(
    mobileMenuReducer,
    initialMobileMenu
  );

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update the state of the mobile menu.
    if (mobileMenu.isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (el.current) {
      addListener(window, "keydown", (e) => handleCloseESC(e as KeyboardEvent));
      addListener(el.current!, "keydown", (e) =>
        handleFocusTrap(e as KeyboardEvent, el.current!)
      );

      return () => {
        removeListener(window, "keydown", (e) =>
          handleCloseESC(e as KeyboardEvent)
        );
        removeListener(el.current!, "keydown", (e) =>
          handleFocusTrap(e as KeyboardEvent, el.current!)
        );
      };
    }
  }, [isOpen]);

  /**
   * Dispatch action to close the mobile menu.
   * @function handleDispatchClose
   */
  const handleDispatchClose = () => {
    dispatch({
      type: "CLOSE_MOBILE_MENU",
      payload: { element: el, isOpen: false },
    });
  };

  /**
   * Dispatch action to open the mobile menu.
   * @function handleDispatchOpen
   */
  const handleDispatchOpen = () => {
    dispatch({
      type: "OPEN_MOBILE_MENU",
      payload: { element: el, isOpen: isOpen },
    });
  };

  /**
   * Dispatch action to close the mobile menu with the ESC key.
   * @function handleDispatchCloseESC
   */
  const handleDispatchCloseESC = () => {
    dispatch({
      type: "CLOSE_MOBILE_MENU_ESC",
      payload: { element: el, isOpen: isOpen },
    });
  };

  /**
   * Handle opening the mobile menu.
   * @function handleOpen
   */
  function handleOpen() {
    if (!isOpen) handleDispatchOpen();
    if (mobileMenuTL.current && mobileMenuTL.current.reversed()) {
      mobileMenuTL.current.play();
      console.log("Mobile menu animation played.", mobileMenuTL.current);
    } else {
      console.error("Menu animation not found.", mobileMenuTL.current);
    }
  }

  /**
   * Handle closing the mobile menu.
   * @function handleClose
   */
  function handleClose() {
    if (isOpen) handleDispatchClose();
    if (mobileMenuTL.current && !mobileMenuTL.current.reversed()) {
      mobileMenuTL.current.reverse();
      console.log("Mobile menu animation reversed.", mobileMenuTL.current);
    } else {
      console.error("Menu animation not found.", mobileMenuTL.current);
    }
  }

  /**
   * Handle closing the mobile menu with the ESC key.
   * @function handleCloseESC
   * @param e
   */
  function handleCloseESC(e: KeyboardEvent) {
    if (e.key !== "Escape") return;
    if (isOpen) handleDispatchCloseESC();

    if (mobileMenuTL.current && !mobileMenuTL.current.reversed()) {
      mobileMenuTL.current.reverse();
      console.log("Mobile menu animation reversed with ESC key.");
    } else {
      console.error("Menu animation not found.", mobileMenuTL.current);
    }
  }

  return {
    dispatch,
    handleClose,
    handleCloseESC,
    handleOpen,
    isOpen,
    mobileMenu,
    setIsOpen,
  };
}
