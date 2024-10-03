import React from "react";

/**
 * @interface NavProps
 */
export interface NavProps {
  children: React.ReactNode | React.ReactNode[];
  containerClasses?: string;
  id: string;
  navClasses?: string;
}

/**
 * @interface NavSlotProps
 */
export interface NavSlotProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @interface NavListProps
 */
export interface NavListProps {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
}

/**
 * @interface NavListItemsProps
 */
export interface NavListItemsProps {
  isMobile?: boolean;
  linkClasses?: string;
}

/**
 * @interface NavItemProps
 */
export interface NavItemProps {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
  isMobile?: boolean;
}

/**
 * @interface NavLinkProps
 */
export interface NavLinkProps {
  id: string | number;
  linkClasses?: string;
  linkText: string;
  url: string;
}
