import ScrollTrigger from "gsap/ScrollTrigger";

interface FnCreateScrollTrigger {
  trigger: HTMLDivElement;
  start: string;
  end: number;
  toggleClassname: string;
  toggleTargets: string;
}

/**
 * Creates a ScrollTrigger instance.
 * @param props
 */
export function createScrollTrigger(
  props: FnCreateScrollTrigger
): ScrollTrigger {
  return ScrollTrigger.create({
    trigger: props.trigger,
    start: props.start,
    end: props.end,
    toggleClass: {
      className: props.toggleClassname,
      targets: props.toggleTargets,
    },
  });
}
