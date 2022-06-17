var events = require('events');
var fs = require('fs');

// File reader
var rs = fs.createReadStream('./README.md');
rs.on('open', function () {
    console.log('The file is open.');
});

var eventEmitter = new events.EventEmitter();
//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
