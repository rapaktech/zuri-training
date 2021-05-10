const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('hello', () => {
    console.log('This event was called.');
});

myEmitter.emit('hello');

