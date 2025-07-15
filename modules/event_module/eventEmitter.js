// import EventEmitter class 
const EventEmitter = require("events");

// creating a instances of EventEmitter
const emitter = new EventEmitter();

// defining  a  event 
emitter.on("greet", (data)=>{
    const {name, prof}= data;
    console.log(`hello and welcome to the nodeJs ${name} ! are you a ${prof}. `)
})

// calling/triggering  a event 
emitter.emit("greet", {name : "Nikhil" , prof : "full stack developer"})