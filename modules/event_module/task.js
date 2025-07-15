// ### Objective  
//* Create a program using Node.js EventEmitter that:  
///? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).  
///? Tracks how many times each event is emitted.  
///? Logs a summary of all event occurrences when a special summary event is triggered.  

// ### Requirements  
///? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).  
///? Emit these events multiple times with different arguments (e.g., username, item purchased).  
///? Track and store the count of each event type.  
///? Define a summary event that logs a detailed report of how many times each event was triggered.

const EventEmitter = require("events");

// Create instance of EventEmitter
const emitter = new EventEmitter();

// Initialize event counts
const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
};

// Register event listeners
emitter.on("user-login", (username) => {
    console.log(`${username} logged in!`);
    eventCounts["user-login"]++;
});

emitter.on("user-purchase", (username, item) => {
    console.log(`${username} purchased ${item}!`);
    eventCounts["user-purchase"]++;
});

emitter.on("profile-update", (username, field) => {
    console.log(`${username} updated their ${field}!`);
    eventCounts["profile-update"]++;
});

emitter.on("user-logout", (username) => {
    console.log(`${username} logged out!`);
    eventCounts["user-logout"]++;
});

// Special summary event
emitter.on("special-summary", () => {
    console.log("\n📊 Event Summary Report:");
    for (let [key, value] of Object.entries(eventCounts)) {
        console.log(`${key}: ${value}`);
    }
    console.log();
});

// Emit events
emitter.emit("user-login", "Nikhil");
emitter.emit("user-purchase", "Nikhil", "Laptop");
emitter.emit("profile-update", "Nikhil", "email");
emitter.emit("user-logout", "Nikhil");
emitter.emit("special-summary");

emitter.emit("user-login", "Shivam");
emitter.emit("user-purchase", "Shivam", "Smartphone");
emitter.emit("profile-update", "Shivam", "password");
emitter.emit("user-logout", "Shivam");
emitter.emit("special-summary");