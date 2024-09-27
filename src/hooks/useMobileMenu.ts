import React from "react";

/**
 * Handle Mobile Menu state and actions, like `isOpen`.
 * @hook useMobileMenu
 */
export default function useMobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return {
    isOpen,
    setIsOpen,
  };
}
