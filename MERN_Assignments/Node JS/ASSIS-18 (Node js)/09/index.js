const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Event handler function
const eventHandler = () => {
  console.log('Event handler called');
};

// Register the event handler
eventEmitter.on('myEvent', eventHandler);

// Call the event
eventEmitter.emit('myEvent'); // Output: Event handler called

// Remove the event handler
eventEmitter.off('myEvent', eventHandler);

// Call the event again
eventEmitter.emit('myEvent'); // No output, as the event handler is removed
