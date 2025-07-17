// importing readline module
import readline from "readline";
//importing fs module
import fs from "fs/promises";
//importing path module
import path from "path";
// creating readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fileName = ``;
let fileContent = ``;

const useFileData = (fileName, fileContent) => {
  console.log("File name set to:", fileName);
  let filePath = path.join("./", fileName);

  //  Write to a File (fs.writeFile)
  const writeFileExample = async () => {
    try {
      await fs.writeFile(filePath, `${fileContent}`, "utf-8");
      console.log("file created!");
    } catch (err) {
      console.error("Error! in file Writing :", err.message);
    }
  };
  writeFileExample();
};

const getFileData = () => {
  rl.question("Enter the file name : ", (fileNameInput) => {
    if (fileNameInput) {
      fileName = `${fileNameInput}.text`;
      rl.question("Enter your file Content : ", (fileContentInput) => {
        if (fileContentInput) {
          fileContent = fileContentInput;
          useFileData(fileName, fileContent);
          rl.close();
        }
      });
    }
  });
};

getFileData();
