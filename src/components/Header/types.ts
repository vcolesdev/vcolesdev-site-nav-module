import React, { RefObject } from "react";

/**
 * @interface HeaderProps
 */
export interface HeaderProps {
  btnToggle: RefObject<HTMLButtonElement>;
  handleOpen: () => void;
  id: string;
  nav: RefObject<HTMLDivElement>;
  outerToggle: RefObject<HTMLDivElement>;
}

/**
 * @interface HeaderContainerProps
 */
export interface HeaderContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @interface LogoProps
 */
export interface LogoProps {
  id: string;
}
