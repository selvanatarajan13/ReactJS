import Post from "./Post";

const Feed = ({post}) => {
  return (
    <>
        {post.map(post => (
            <Post 
                post={post}
                key={post.id}
            /> 
        ))}
    </>
  );
};

export default Feed;
