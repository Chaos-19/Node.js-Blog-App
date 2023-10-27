const fs = require("fs");
const readStream = fs.createReadStream("./mydata.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./blog4.txt", { encoding: "utf8" });
/*
readStream.on("data", (chunk) => {
  console.log("------ New CHUNK -----");
  //console.log(chunk.toString());
  console.log(chunk);
  writeStream.write("------ New CHUNK -----");
  writeStream.write(chunk);
});
*/
//pip stream
readStream.pipe(writeStream);
