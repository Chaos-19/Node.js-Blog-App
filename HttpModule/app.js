const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes.js")

// express app
const app = express();

const dbUrl =
  "mongodb+srv://kalgetachew375:AhdQNm78xlhBPzSV@blogdb.gui3dnh.mongodb.net/blogdb?retryWrites=true&w=majority";
// "mongodb+srv://kalgetachew375:AhdQNm78xlhBPzSV@blogdb.gui3dnh.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((resulte) => {
    console.log("connected to db");
    //listen for request
    app.listen(3000);
  })
  .catch((error) => console.log(error));
//registre view engin
app.set("view engine", "ejs");

//static middle ware
app.use(express.static("public"));
//used to make static file public
//middle ware third party
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//used to encode post request data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use("/blogs",blogRoutes)
//404 page
app.use((req, res) => {
  // res.status(404).sendFile("./view/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
