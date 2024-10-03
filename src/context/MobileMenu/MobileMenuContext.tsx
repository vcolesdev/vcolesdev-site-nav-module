import { createContext, Dispatch, ReactNode } from "react";
import {
  MobileMenuActions,
  MobileMenuApi,
} from "@/context/MobileMenu/mobileMenuReducer";
import { useMobileMenu } from "@/hooks/elements/useMobileMenu";

const MobileMenuContext = createContext<MobileMenuApi | null>(null);
const MobileMenuDispatchContext =
  createContext<Dispatch<MobileMenuActions> | null>(null);

interface MobileMenuProvider {
  children: ReactNode | ReactNode[];
}

/**
 * The mobile menu provider component.
 * @param children
 */
function MobileMenuProvider({ children }: MobileMenuProvider) {
  const { mobileMenu, dispatch } = useMobileMenu();

  return (
    <MobileMenuContext.Provider value={mobileMenu}>
      <MobileMenuDispatchContext.Provider value={dispatch}>
        {children}
      </MobileMenuDispatchContext.Provider>
    </MobileMenuContext.Provider>
  );
}

export { MobileMenuContext, MobileMenuDispatchContext, MobileMenuProvider };
