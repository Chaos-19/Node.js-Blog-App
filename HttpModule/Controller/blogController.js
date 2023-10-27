const Blog = require("../Models/blog");

const blog_index = (req,res)=>{
  Blog.find()
    .then((resulte) => {
      res.render("blogs/index", { title: "All Blogs", blogs: resulte });
    })
    .catch((error) => {
      console.log(error);
    });
}

const blog_details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((resulte) => {
      res.render("blogs/details", { title: "Blog Details" ,blog:resulte})
     }).catch((error) => console.error(error));
  
}

const blog_create_get =  (req, res) => {
  res.render("blogs/create", { title: "New Blog" });
}
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((resulte) => {
      res.redirect("/blogs");
    })
    .catch((error) => { 
      res.status(404).render("404", { title: "404" });});
}

const blog_delete = (req,res)=>{
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
  .then(result=>{
    res.json({
      redirect:"/blogs"
  })
    }).catch(error=> console.log(error))
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
}