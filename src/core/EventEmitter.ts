interface Handler {
  (...args: any[]): any;
  namespace?: string;
}

class EventEmitter {
  private events: Map<string, Handler[] | undefined>;

  constructor() {
    this.events = new Map();
  }

  emit(key: string, ...args: any[]) {
    const handlers = this.events.get(key) || [];

    handlers.forEach((fn) => fn(...args));
  }

  listen(key: string, handler: Handler) {
    const handlers = this.events.get(key) || [];

    handlers.push(handler);

    this.events.set(key, handlers);
  }

  removeEventListener(key: string) {
    if (this.events.has(key)) {
      this.events.delete(key);
    }
  }
}

export default EventEmitter;
