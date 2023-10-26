import React from "react";

const NewPost = ({handlepost,posttitle,setposttitle,postcontent,setpostcontent}) => {
  return (
    <article className="form-container">
      <h1 style={{textAlign:"center"}}>New Post</h1><br />
      <form onSubmit={handlepost}>
        <label className="form-label">Title :</label><br />
        <input 
          type="text"
          placeholder="type here.."
          className="form-input"
          value={posttitle}
          onChange={(e) => setposttitle(e.target.value)}
          required
          autoFocus
        /><br />
        <label className="form-label">Content :</label><br />
        <textarea  
          type="text"
          placeholder="type here.."
          className="form-input2"
          value={postcontent}
          onChange={(e) => setpostcontent(e.target.value)}
          required
        /><br />
        <button type="submit" className="custom-button" style={{margin: "1em auto",textAlign:"center"}}>Post</button>
      </form>
    </article>
  );
};

export default NewPost;
