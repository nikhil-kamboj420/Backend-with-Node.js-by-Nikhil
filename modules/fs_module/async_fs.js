const fs = require("fs");
const path = require("path");

/// create a file path
let fileName = "asyncData.txt";
let filePath = path.join(__dirname, fileName);
 
// 1️⃣ Write to a File (fs.writeFile)
fs.writeFile(filePath, "hello, world!", "utf-8",(err)=>{
  if(err) console.error("Error! in file Writing :",err)
    else console.log("file created!")
})

// 2️⃣ Read a File (fs.readFile)
fs.readFile(filePath, "utf-8", (err,data)=>{
  if(err) console.error("Error! in file reading :",err)
  else console.log("file reading!\n",data)
})

// 3️⃣ update a File (fs.appendFile)
fs.appendFile(filePath, "\nUpdated hello World !", "utf-8", (err)=>{
  if(err) console.error("Error! in file updating :",err)
  else console.log("file updated!")
})

// 3️⃣ delete a File (fs.unlink)
fs.unlink(filePath, (err)=>{
  if(err) console.error("Error! in file deleting :",err)
  else console.log("file deleted!")
})