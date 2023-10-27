const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //  console.log(req.url, req.method);
  //lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("once ");
  });
greet()
  //set Header
  res.setHeader("Content-Type", "text/html");

  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "demoPage";
      res.statusCode = 200;
      break;
    case "/about":
      path += "About";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      res.statusCode = 404;
      path += "404";
  }

  fs.readFile(`${path}.html`, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listen for requiest on port 3000");
});
