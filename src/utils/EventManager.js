import Vue from "vue";

class EventManager {
  constructor() {
    if (EventManager.instance) return EventManager.instance;

    this.eventBus = new Vue();
    EventManager.instance = this;
  }

  $emit(name, eventName, eventMessage) {
    this.eventBus.$emit(`${name}-${eventName}`, eventMessage);
  }

  $on(name, eventName, callback) {
    this.eventBus.$on(`${name}-${eventName}`, callback);
  }

  $off(name, eventName) {
    this.eventBus.$off(`${name}-${eventName}`);
  }
}

export default new EventManager();
