let Post = require("../models/Blog");

let createPost = async (req, res) => {
  try {
    let post = await Post.create(req.body);
    res.status(201).json(post);    
  } catch (error) {
    console.log(`getting error in creating post.`,error)
  }

};

let getPosts = async (req, res) => {

  try {
    let posts = await Post.find();  
    res.status(200).json({ posts, count: posts.length });
  } catch (error) {
    console.log(`getting error in getting posts.`,error)
  }

};

let getPost = async (req, res) => {
  try {
    let postId = req.params.id;
    let post = await Post.findOne({ _id: postId });
    res.status(200).json(post);
  } catch (error) {
    console.log(`getting error in getting single post: `,error)
  }
};

let updatePost = async (req, res) => {

  try {
    let post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true, new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    console.log(`getting eror in updating post`,error) 
  }
};

let deletePost = async (req, res) => {
  try {
    let post = await Post.findOneAndDelete({
      _id: req.params.id,
    });
    if (!post) {
      res.status(504).json({ msg: `Post with id ${req.params.id} not found` });
    }
    res.status(204).json({ data: "Post deleted" });
    
  } catch (error) {
    console.log(`getting error in deleting post`,error)
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
