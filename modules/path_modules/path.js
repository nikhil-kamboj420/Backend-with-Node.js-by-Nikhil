// ? Node.js Path Module Features ?*/

const path = require("path");

const filePath = path.join("school","students","data.text");
const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
const seprator = path.sep;
console.log({filePath,resolvedPath,extName,baseName,dirName,seprator})

/*============================================================*/
/*The Node.js path module provides utilities for working with file and directory paths. Here are some key features and methods:
path.parse(
Returns an object with details about a given path, including root, dir, base, ext, and name.
path.join():
Joins multiple path segments into one, using the appropriate separator (\ on Windows, / on Linux/macOS).
path.resolve():
Resolves a sequence of paths into an absolute path, starting from the current directory.
path.extname():
Extracts the file extension from a given path.
path.basename():
Returns the last part of a path (e.g., file name with extension).
path.dirname():
Returns the directory part of a path.
path.sep:
Returns the platform-specific path segment separator (\ for Windows, / for POSIX). */ 