const express = require("express");
const blogController = require("../Controller/blogController.js")

const router = express.Router()
/*
//mongoose and san.dbox route
router.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Top React Projects",
    snippet: "top React Projects to get you started with react",
    body: "Magna pariatur sint minim nulla voluptate amet ad occaecat magna duis enim est excepteur. In tempor non non ullamco enim elit laboris. Est ullamco sunt Lorem eu consectetur enim et eu irure. Id ea sint nisi quis consequat sit consequat do ipsum ea esse.",
  });

  blog
    .save()
    .then((resulte) => {
      res.send(resulte);
    })
    .catch((error) => console.log(error));
});
/*
// get all Bloh
router.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((resulte) => {
      res.send(resulte);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/single-blog", (req, res) => {
  Blog.findById("65298f7328cf43d8a5e22f78")
    .then((resulte) => {
      res.send(resulte);
    })
    .catch((error) => {
      console.log(error);
    });
});
//middle wate to logger
router.use((req, res, next) => {
  console.log("new request Made");
  console.log("host:", req.hostname);
  console.log("path :", req.path);
  console.log("Method:", req.method);
  console.log("-----------------");
  next();
});*

router.get("/", (req, res) => {
  //res.send("<h3>Home Page</h3>");
  // res.sendFile("./view/demoPage.html", { root: __dirname });
  //res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});*/
//blog route

router.get("/create",blogController.blog_create_get);
router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create_post);
router.get("/:id", blogController.blog_details)
//Delete Blog
router.delete("/:id",blogController.blog_delete)


module.exports = router