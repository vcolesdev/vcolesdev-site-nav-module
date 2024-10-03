/**
 * Handle event listeners.
 * @hook useListeners
 */
export function useListeners() {
  function addListener(
    target: Window | Document | HTMLDivElement,
    event: string,
    callback: EventListenerOrEventListenerObject
  ) {
    target.addEventListener(event, callback);
  }

  function addListenerNoEvent(
    target: Window | Document | HTMLDivElement,
    event: string,
    callback: EventListenerOrEventListenerObject
  ) {
    // Add listener without event parameter
    target.addEventListener(event, callback);
  }

  function removeListener(
    target: HTMLElement | Window | Document,
    event: string,
    callback: EventListenerOrEventListenerObject
  ) {
    target.removeEventListener(event, callback);
  }

  function removeListenerNoEvent(
    target: HTMLElement | Window | Document,
    event: string,
    callback: EventListenerOrEventListenerObject
  ) {
    target.removeEventListener(event, callback);
  }

  function addListeners(
    targets: HTMLElement[],
    event: string,
    callback: EventListenerOrEventListenerObject
  ) {
    targets.forEach((target) => {
      target.addEventListener(event, callback);
    });
  }

  function removeListeners(
    targets: HTMLElement[],
    event: string,
    callback: EventListenerOrEventListenerObject
  ) {
    targets.forEach((target) => {
      target.removeEventListener(event, callback);
    });
  }

  return {
    addListener,
    addListenerNoEvent,
    addListeners,
    removeListener,
    removeListenerNoEvent,
    removeListeners,
  };
}
