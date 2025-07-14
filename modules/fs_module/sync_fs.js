// 🟢 Key Note:
// Sync methods block the main thread until the operation finishes.
// Good for small scripts or learning, but avoid in production servers.
// 📂 Node.js fs Sync Methods
// ✅ First import the fs module:

const fs = require('fs');
const path = require('path')
let fileName = 'syncData.txt';
let filePath = path.join(__dirname,fileName)

// 1️⃣ Write to a File (fs.writeFileSync)
fs.writeFileSync(filePath, 'Hello, World!',"utf-8");

// 2️⃣  Read a File (fs.readFileSync)
const data = fs.readFileSync(filePath,"utf-8");
console.log('File Content:', data);

// 3️⃣ Append to a File (fs.appendFileSync)
// Adds new content at the end of a file without overwriting.
fs.appendFileSync(filePath,"\n Hello, World! again","utf-8");
   
// 4️⃣ Delete a File (fs.unlinkSync)
fs.unlinkSync(filePath)
console.log('File deleted');

// 5️⃣  Rename or Move a File (fs.renameSync)
// Renames a file or moves it to a different path.
const newFile = path.join(__dirname, 'newExample.txt');
fs.renameSync(filePath, newFile);
console.log('File renamed successfully');

// 6️⃣ Create a Folder (fs.mkdirSync)
const myFolder = path.join(__dirname, 'myFolder');
fs.mkdirSync(myFolder);
console.log('Folder created');

// 7️⃣ Remove a Folder (fs.rmdirSync)
// Removes an empty directory.
fs.rmdirSync('myFolder');
console.log('Folder deleted');

// 8️⃣ Check File/Folder Details (fs.statSync)
// Gets metadata about a file or folder.
const stats = fs.statSync('example.txt');
console.log('Is File?', stats.isFile());
console.log('Size:', stats.size, 'bytes');