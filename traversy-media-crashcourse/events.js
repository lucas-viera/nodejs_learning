const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

//new object
myEmitter = new MyEmitter();
//event listener
myEmitter.on('event', () => console.log('Event Fired'));
// init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');