import {
  DEFAULT_OPTIONS,
  EventFactoryBufferDir,
  EventFactoryOptions,
  EventFactorySubscriber,
} from "./_types.ts";
import { CircularBuffer } from "mnemonist";

/**
 * An event factory that allows you to create events and subscribe to them.
 * Buffer events and notify subscribers when an event is triggered.
 * @link https://github.com/NickSettler/events-system/
 * @class EventFactory
 */
export default class EventFactory<
  E extends Record<
    string,
    (...args: Parameters<E[keyof E]>) => ReturnType<E[keyof E]>
  >,
> {
  /**
   * The buffer direction to store events.
   * FIFO: First In First Out, LIFO: Last In First Out
   * LIFO is the default buffer direction.
   * @type {EventFactoryBufferDir}
   * @private
   */
  private readonly bufferDir: EventFactoryBufferDir;

  /**
   * The size of the buffer to store events.
   * 5 is the default buffer size.
   * @type {number}
   * @private
   */
  private readonly bufferSize: number;

  /**
   * A map of event names and their circular buffer. The buffer stores the event arguments.
   * @type {Map<keyof E, CircularBuffer<Parameters<E[keyof E]>>}
   * @private
   */
  private readonly buffer: Map<
    keyof E,
    CircularBuffer<Parameters<E[keyof E]>>
  > = new Map();

  /**
   * An array of event subscribers. Each subscriber has an event name and a handler function.
   * @private
   */
  private subscribers: EventFactorySubscriber<E, keyof E>[] = [];

  /**
   * EventFactory constructor.
   * @param options {EventFactoryOptions} Event factory options.
   */
  constructor(options?: EventFactoryOptions) {
    this.bufferDir = options?.bufferDir || DEFAULT_OPTIONS["bufferDir"];
    this.bufferSize = options?.bufferSize || DEFAULT_OPTIONS["bufferSize"];
  }

  /**
   * Subscribe to an event. Listen for an event and call a handler function when the event is triggered.
   * @param event The event name to subscribe to.
   * @param handler The handler function to call when the event is triggered.
   * @method subscribe
   */
  subscribe<K extends keyof E & string>(
    event: K,
    handler: (...args: Parameters<E[K]>) => ReturnType<E[K]>
  ) {
    const bufferEvent = this.buffer.get(event);
    const hasBufferEvent = this.buffer.has(event);

    this.subscribers.push({ event, handler });

    if (hasBufferEvent) {
      bufferEvent?.forEach((args: Parameters<E[K]>) => {
        handler.call(handler, ...args);
      });
    }
  }

  /**
   * Unsubscribe from an event. Stop listening for an event.
   * @param event
   * @param handler
   * @method unsubscribe
   */
  unsubscribe<K extends keyof E & string>(
    event: K,
    handler: (...args: Parameters<E[K]>) => ReturnType<E[K]>
  ) {
    this.subscribers = this.subscribers.filter(
      (subscriber: EventFactorySubscriber<E, keyof E>) => {
        return subscriber.event !== event || subscriber.handler !== handler;
      }
    );
  }

  /**
   * Notify subscribers of an event. Trigger an event and call all subscribed handler functions.
   * @param event
   * @param args
   * @method notify
   */
  notify<K extends keyof E & string>(
    event: K,
    ...args: Parameters<E[K]>
  ): void {
    const bufferEvent = this.buffer.get(event);
    const hasBufferEvent = this.buffer.has(event);

    this.subscribers.forEach(
      (subscriber: EventFactorySubscriber<E, keyof E>) => {
        if (subscriber.event === event)
          return subscriber.handler.call(subscriber.handler, ...args);
      }
    );

    if (!hasBufferEvent) {
      this.buffer.set(event, new CircularBuffer(Array, this.bufferSize));
    }

    const arrPushOrUnshift = this.bufferDir === "FIFO" ? "push" : "unshift";
    bufferEvent?.[arrPushOrUnshift](args);
  }
}
