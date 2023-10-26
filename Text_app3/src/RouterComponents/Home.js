import React from "react";
import Feed from "./Feed";

const Home = ({post}) => {
  return (
    <main>
      <h1 className="post-title1">posts</h1>
      {(post.length) ? (
        <Feed post={post}/>
      ) : (
        <p style={{margin: "1em",color: "red",textAlign:"center"}}>No posts yet..</p>
      )}
    </main>
  );
};

export default Home;
