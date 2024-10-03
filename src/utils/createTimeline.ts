import { gsap } from "gsap";

/**
 * Create a timeline for use with GSAP.
 * @param options
 */
export function createTimeline(options?: gsap.TimelineVars): GSAPTimeline {
  return gsap.timeline({ paused: true, ...options });
}
