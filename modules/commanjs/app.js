// ? Key Features of CommonJS //

const math = require("./math")

console.log(math.add(4,6));
console.log(math.sub(4,6));
console.log(math.mul(4,6));
console.log(math.dev(4,6));

// Uses require() to import modules.
// Uses module.exports or exports to export modules.
// Loads modules synchronously (good for servers, not browsers).
// If you're working with Node.js, you’ll often see CommonJS (require, module.exports).
// In frontend projects or modern Node.js (with "type": "module"), ES Modules (import/export) are preferred.