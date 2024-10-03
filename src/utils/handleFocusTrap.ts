/**
 * Handle tab key press to control focus within the mobile menu.
 * @function handleTabKeyPress
 * @param e
 */
export function handleFocusTrap(e: KeyboardEvent, element: HTMLElement) {
  if (e.key !== "Tab") return;

  const focusableEls = element.querySelectorAll(
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
  );
  const firstEl = focusableEls?.[0] as HTMLElement;
  const lastEl = focusableEls?.[focusableEls.length - 1] as HTMLElement;

  if (e.shiftKey && document.activeElement === firstEl) {
    e.preventDefault();
    lastEl.focus();
  } else if (!e.shiftKey && document.activeElement === lastEl) {
    e.preventDefault();
    firstEl.focus();
  }
}
