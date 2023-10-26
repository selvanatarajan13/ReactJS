import React from "react";
import { Link, useParams } from "react-router-dom";

const Posts = ({post,handleDel,handleEdit}) => {
    const { id } = useParams()
    const posts = post.find(post => (post.id).toString() === id)
    
  return (
    <article className="post">
        {posts &&
            <>
                <h2 className="post-title">{posts.title}</h2>
                <p className="post-datetime">{posts.datetime}</p>
                <p className="post-content">
                    {posts.content}
                </p>
                <button onClick={() => handleDel(posts.id)}>Delete</button>
                <Link to={`/edit/${posts.id}`}>
                    <button>Edit</button>
                </Link>
            </>
        }
        {!posts &&
            <p>No posts yet!.</p>
        }
    </article>
  );
};

export default Posts;
