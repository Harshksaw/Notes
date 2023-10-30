const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Get the current maximum number of event listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current Max Listeners:', currentMaxListeners);

// Set the maximum number of event listeners to 51
eventEmitter.setMaxListeners(51);
console.log('New Max Listeners:', eventEmitter.getMaxListeners());
