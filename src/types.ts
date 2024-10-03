import React from "react";
import { gsap } from "gsap";

export type GSAPTimeline = gsap.core.Timeline;

export interface TablerIconProps {
  color?: string;
  stroke?: number;
  size?: number;
}

export interface SlotProps {
  children: React.ReactNode | React.ReactNode[];
}
