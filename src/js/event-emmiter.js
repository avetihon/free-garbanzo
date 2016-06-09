class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  isFunction(obj) {
    return typeof obj === 'function' || false;
  }

  addListener(topic, callback) {
    // create the topic if not yet created
    this.listeners.has(topic) || this.listeners.set(topic, []);

    // add the callback
    this.listeners.get(topic).push(callback);
  }

  removeListener(topic, callback) {
    let listeners = this.listeners.get(topic);
    let index;

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        return (this.ifFunction(listener) && listener === callback)
          ? i = index
          : i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(topic, listeners);
        return true;
      }
    }

    return false;
  }

  emit(topic, ...args) {
    let listeners = this.listeners.get(topic);

    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }
}

export const emmiter = new EventEmitter();
