import React, { useEffect } from "react";
import HeaderContainer from "./HeaderContainer";
import useHeader from "../hooks/useHeader";

import "../assets/styles/components/Header.css";

interface Header {
  children: React.ReactNode | React.ReactNode[];
  id: string;
}

/**
 * The component containing the header contents of the app.
 * @component Header
 * @param children
 * @param id
 */
function Header({ children, id }: Header) {
  const { headerRef } = useHeader();

  useEffect(() => {}, []);

  return (
    <HeaderContainer>
      <header className="header" id={id} ref={headerRef}>
        {children}
      </header>
    </HeaderContainer>
  );
}

export default Header;
