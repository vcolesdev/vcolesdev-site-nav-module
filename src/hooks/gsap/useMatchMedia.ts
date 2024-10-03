import gsap from "gsap";

/**
 * Add a GSAP match media query.
 * @hook useMatchMedia
 */
export function useMatchMedia() {
  const mm = gsap.matchMedia();

  function addMatchMedia(query: string, cb: () => void) {
    return mm.add(query, () => cb());
  }

  return { addMatchMedia };
}
