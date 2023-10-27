const fs = require("fs");
// read fikes
/*
fs.r,eadFile("./mydata.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});*/

//write
/*
fs.writeFile("./writeFileDemo.text", "This Write file Demo using Nodjs", () => {
  console.log("data write successfully");
});
*/
//Directoeies
/*
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Created successfully!");
  });
} else {
  fs.rmdir("./assets", (error) => {
    console.log("Directore Exists");
  });
}
*/

// delete files
/*
if (fs.existsSync("./assets/deleteme.txt")) {
  fs.unlink("./assets/deleteme.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("File Deleted");
  });
}
*/