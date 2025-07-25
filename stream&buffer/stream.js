import { createReadStream, createWriteStream, read } from "fs";
import path from "path";
// !import {pipeline} from 'stream';
const readablePath = createReadStream(
  path.join(import.meta.dirname, "input.text"),
  {
    encoding: "utf8",
    highWaterMark: 14,
  }
);
const writablePath = createWriteStream(
  path.join(import.meta.dirname, "output.text")
);
readablePath.on("data", (chunk) => {
  console.log("data chunk: ", Buffer.from(chunk));
  console.log("data stream: ", chunk);
  writablePath.write(chunk);
});
readablePath.on("end", () => {
  readablePath.pipe(writablePath);
  console.log("✅ File read completed and written to output.txt");
});

readablePath.on("error", (err) => {
  console.error("❌ Error reading file:", err);
});

writablePath.on("error", (err) => {
  console.error("❌ Error writing file:", err);
});
