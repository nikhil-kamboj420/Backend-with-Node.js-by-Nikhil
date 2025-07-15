const  fs = require("fs/promises");
const path = require("path");
/// create a file path
let fileName = "async_awaitData.text";
let filePath = path.join(__dirname,fileName);

//  1️⃣ Write to a File (fs.writeFile)

const writeFileExample = async()=>{
try{
    await fs.writeFile(filePath,"hello world !", "utf-8");
    console.log("file created!")
}catch(err){
    console.error("Error! in file Writing :",err.message)
}            
}
writeFileExample();

// 2️⃣ Read a File (fs.readFile)

const readFileExample = async()=>{
try{
    let data = await fs.readFile(filePath, "utf-8");
    console.log("file reading!\n",data)
}catch(err){
    console.error("Error! in file reading :",err.message)
}
}
readFileExample();

// 3️⃣ update a File (fs.appendFile)

const appendFileExample = async()=>{
try{
    await fs.appendFile(filePath, "\nUpdated hello World !", "utf8");
    console.log("file updated!")
}catch(err){
    console.error("Error! in file updating :",err.message)
}
}
appendFileExample();

// 4️⃣ delete a File (fs.unlink)

const deleteFileExample = async()=>{
try{
    await fs.unlink(filePath);
    console.log("file deleted!")
}catch(err){
    console.error("Error! in file deleting :",err.message)
}
}
deleteFileExample();