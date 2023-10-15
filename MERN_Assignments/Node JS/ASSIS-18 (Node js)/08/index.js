const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

customEmitter.on('subscribe', () => {
  console.log('User has subscribed!');
});

// Trigger the 'subscribe' event
customEmitter.emit('subscribe');
