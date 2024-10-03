import type { HeaderContainerProps } from "@/components/Header/types";
import { useHeader } from "@/hooks/elements/useHeader";

/**
 * The container component for our site header.
 * @component HeaderContainer
 */
export function HeaderContainer({ children }: HeaderContainerProps) {
  const { headerContainer } = useHeader();

  return (
    <div
      className="header-container"
      id="headerContainer"
      ref={headerContainer}
    >
      {children}
    </div>
  );
}
