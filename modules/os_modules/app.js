// OS Module - NodeJS
const os = require('os');
console.log("platform : ", os.platform());
console.log("platform : ", os.userInfo());
console.log("architecture :",os.arch());
console.log(`Free memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB (${os.freemem()} bytes)`);
console.log(`total memory : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB (${os.freemem()} bytes)`);
console.log("Uptime (hours):", (os.uptime() / 3600).toFixed(2));
console.log("home directory :",os.homedir());
console.log("hostname :",os.hostname());
// console.log("details about network interfaces :",os.networkInterfaces());
console.log("CPU/CORS details :",os.cpus());
console.log("default dir for temp files :",os.tmpdir());
// 1. os.platform(): Returns the OS platform (e.g., 'win32' for Windows, 'linux' for Linux, 'darwin' for macOS).
// Usage: Useful for writing cross-platform applications.
// 2. os.arch(): Returns the CPU architecture (e.g., 'x64', 'arm').
// Usage: Helps optimize code for specific architectures.
// 3. os.freemem(): Returns the amount of free system memory in bytes.
// Usage: Useful for monitoring system performance.
// 4. os.totalmem(): Returns the total system memory in bytes.
// Usage: Provides insights into the machine's capacity.
// 5. os.uptime(): Returns the system uptime in seconds.
// Usage: Commonly used in logging or monitoring tools || Useful for storing temporary data.
// 6. os.homedir(): Returns the home directory of the current user.
// Usage: Useful for locating user-specific files.
// 7. os.hostname(): Returns the hostname of the system.
// Usage: Useful for logging or identifying machines in networks.
// 8. os.networkInterfaces(): Returns an object with details about the network interfaces.
// Usage: Helps in network diagnostics or configuration.
// 9. os.cpus(): Returns details about each logical CPU/core.
// Usage: Helps optimize code for multi-core processing.
// 10. os.tmpdir(): Returns the default directory for temporary files.