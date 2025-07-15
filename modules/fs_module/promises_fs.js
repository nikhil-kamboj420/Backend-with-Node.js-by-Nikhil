const fs = require("fs/promises");
const path = require("path");

/// create a file path
const fileName = "promisesData.text";
const filePath = path.join(__dirname,fileName);

//  1️⃣ Write to a File (fs.writeFile)
fs.writeFile(filePath, "hello, world!", "utf-8")
.then(console.log("file is created!"))
.catch((err)=> console.error("Error! in file Writing :",err));

// 2️⃣ Read a File (fs.readFile)
fs.readFile(filePath, "utf-8")
.then((data)=>console.log("file reading!\n",data))
.catch((err)=> console.error("Error! in file reading :",err));

// 3️⃣ update a File (fs.appendFile)
fs.appendFile(filePath, "\nUpdated hello World !","utf-8")
.then((data)=>console.log("file updated!",data))
.catch((err)=> console.error("Error! in file updating :",err));


// 3️⃣ delete a File (fs.unlink)
fs.unlink(filePath)
.then(console.log("file deleted!"))
.catch((err)=> console.error("Error! in file deleting :",err));