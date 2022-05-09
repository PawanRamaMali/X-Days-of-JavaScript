// Import the events module
var events = require("events");

// Create a eventEmitter object 
var eventEmitter = new events.EventEmitter();

// Create a event handler 
var connectHandler = function connected() {
    console.log("Connection succesfull");

    // Fire the data_received event 
    eventEmitter.emit("data_received");
}

// Bind the connection with the handler 
eventEmitter.on("connection", connectHandler);

// Bind the data_received event with the anonymous function 
eventEmitter.on('data_received', function(){
    console.log("data received successfully");
})

console.log("Started Connection")

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program ended")