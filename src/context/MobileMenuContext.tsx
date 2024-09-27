import React, { createContext, useEffect } from "react";
import useMobileMenu from "../hooks/useMobileMenu";

interface IMobileMenuContext {
  isOpen: boolean;
}

/**
 * The mobile menu context.
 * @context MobileMenuContext
 */
const MobileMenuContext = createContext({
  isOpen: false,
} as IMobileMenuContext);

/**
 * Provider for the mobile menu context.
 * @param children
 * @component MobileMenuProvider
 */
function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const { isOpen } = useMobileMenu();

  useEffect(() => {
    console.log("MobileMenuProvider: ", isOpen);
  }, [isOpen]);

  return (
    <MobileMenuContext.Provider value={{ isOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export { MobileMenuContext, MobileMenuProvider };
export type { IMobileMenuContext };
