import { createContext, Dispatch, ReactNode, useEffect } from "react";
import { Layout, LayoutActions } from "@/context/Layout/layoutReducer";
import { useLayout } from "@/hooks/global/useLayout";

const LayoutContext = createContext<Layout | null>(null);
const LayoutDispatchContext = createContext<Dispatch<LayoutActions> | null>(
  null
);

interface LayoutProvider {
  children: ReactNode | ReactNode[];
}

/**
 * The layout provider component.
 * @param children
 */
function LayoutProvider({ children }: LayoutProvider) {
  const { layout, dispatch, handleInitLayout } = useLayout();

  useEffect(() => {
    handleInitLayout();
  }, []);

  return (
    <LayoutContext.Provider value={layout}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutContext.Provider>
  );
}

export { LayoutContext, LayoutDispatchContext, LayoutProvider };
