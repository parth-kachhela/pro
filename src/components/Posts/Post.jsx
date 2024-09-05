import React from "react";
import "./Post.css";

const Post = ({ title, content, image }) => {
  return (
    <div className="post">
      <img className="post-image" src={image} alt={title} />
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;
