import React from "react";
import { Link } from "react-router-dom";

const Post = ({post}) => {

  return (
    <article className="post">
      <Link to={`/NewPost/${post.id}`}>
        <h2 className="post-title">{post.title}</h2>
      </Link>
      <p className="post-datetime">{post.datetime}</p>
      <p className="post-content">
        {(post.content).length <=100 ? (post.content) : (`${(post.content).slice(0,100)}..`)}
        {(post.content).length >= 100 ? (<Link to={`NewPost/${post.id}`}>See more..</Link>) : (null)}
      </p>
    </article>
  );
};

export default Post;
