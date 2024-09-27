import useHeader from "../../hooks/useHeader";
import React from "react";

interface HeaderContainer {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * The container component for our site header.
 * @component HeaderContainer
 */
function HeaderContainer({ children }: HeaderContainer) {
  const { headerContainer } = useHeader();

  return (
    <div className="header-container" ref={headerContainer}>
      {children}
    </div>
  );
}

export default HeaderContainer;
