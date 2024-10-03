type TweenVars = gsap.TweenVars;

/**
 * Create tween variables for use with GSAP.
 * @param from
 * @param to
 */
export const createTweenVars = (from: TweenVars, to: TweenVars) => ({
  from,
  to,
});
