import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  const { title, content, image } = post;
  console.log(post);
  return (
    <div className="post">
      <img className="post-image" src={image} alt={title} />
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;
