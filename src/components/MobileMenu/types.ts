import React, { MutableRefObject, RefObject } from "react";

/**
 * @interface MobileMenuOverlayProps
 */
export interface MobileMenuOverlayProps {
  id: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * @interface MobileMenuNavProps
 */
export interface MobileMenuCloseProps {
  onClick?: () => void;
  id: string;
}

/**
 * @interface MobileMenuNavProps
 */
export interface MobileMenuOpenProps {
  color?: string;
  id?: string;
  onClick: () => void;
}

/**
 * @interface MobileMenuNavProps
 */
export interface MobileMenuProps {
  animTL?: GSAPTimeline | null;
  btnToggle?: RefObject<HTMLButtonElement>;
  closeBtn?: RefObject<HTMLButtonElement>;
  handleClose?: () => void;
  handleCloseESC?: (e: KeyboardEvent) => void;
  handleOpen?: () => void;
  id?: string;
  isOpen?: boolean;
  navItems?: RefObject<HTMLLIElement>;
  outerToggle?: RefObject<HTMLDivElement>;
  overlay?: RefObject<HTMLDivElement>;
  style?: React.CSSProperties;
}

/**
 * @interface BtnShowMenuProps
 */
export interface BtnShowMenuProps {
  color?: string;
  btnRef: MutableRefObject<HTMLButtonElement | null>;
  onClick: () => void;
}
