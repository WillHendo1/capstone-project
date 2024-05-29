const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

// CREATE A BLOG
router.post("/", (req, res) => {
  createBlog(req, res);
});

// GET ALL
router.get("/", (req, res) => {
  getBlogs(req, res);
});

// GET BLOG BY ID
router.get("/:id", (req, res) => {
  getBlog(req, res);
});

// UPDATE A BLOG BY ID
router.put("/:id", (req, res) => {
  updateBlog(req, res);
});

// DELETE A BLOG BY ID
router.delete("/:id", (req, res) => {
  deleteBlog(req, res);
});

module.exports = router;