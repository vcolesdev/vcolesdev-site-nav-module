export type EventFactoryBufferDir = "FIFO" | "LIFO"; // FIFO: First In First Out, LIFO: Last In First Out

/**
 * Event factory options.
 * @property {EventFactoryBufferDir} bufferDir The buffer direction to store events. FIFO: First In First Out, LIFO: Last In First Out
 * @property {number} bufferSize The size of the buffer to store events.
 * @type EventFactoryOptions
 */
export type EventFactoryOptions = {
  bufferDir?: EventFactoryBufferDir;
  bufferSize?: number;
};

/**
 * Event factory subscriber interface.
 * @interface EventFactorySubscriber
 */
export interface EventFactorySubscriber<
  E extends Record<
    string,
    (...args: Parameters<E[keyof E]>) => ReturnType<E[keyof E]>
  >,
  K extends keyof E,
> {
  event: K;
  handler: (...args: Parameters<E[K]>) => void;
}

/**
 * Default options for the EventFactory constructor.
 * @constant DEFAULT_OPTIONS
 */
export const DEFAULT_OPTIONS: Required<EventFactoryOptions> = {
  bufferDir: "FIFO",
  bufferSize: 5,
};
