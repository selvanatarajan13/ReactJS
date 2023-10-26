import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
const Postsedit = ({post,editTitle,seteditTitle,editContent,seteditContent,handleEdit}) => {
    const { id } = useParams()
    const posts = post.find(post => (post.id).toString() === id)

    useEffect(() => {
        if(posts){
            seteditTitle(posts.title)
            seteditContent(posts.content)
        }
    }, [posts,seteditTitle,seteditContent])
    
  return (
    <article className="form-container">
        <h2>Edit Post</h2>
        {posts && 
            <form onSubmit={(e) => e.preventDefault()} >
                <label className="form-label">Title :</label><br />
                <input 
                type="text"
                placeholder="type here.."
                className="form-input"
                value={editTitle}
                onChange={(e) => seteditTitle(e.target.value)}
                required
                autoFocus
                /><br />

                <label className="form-label">Content :</label><br />
                <textarea  
                type="text"
                placeholder="type here.."
                className="form-input2"
                value={editContent}
                onChange={(e) => seteditContent(e.target.value)}
                required
                /><br />

                <button type="submit" onClick={() => handleEdit(posts.id)} className="custom-button" style={{margin: "1em auto",textAlign:"center"}}>Save & Update</button>
            </form>
        }
    </article>
  );
};

export default Postsedit;
