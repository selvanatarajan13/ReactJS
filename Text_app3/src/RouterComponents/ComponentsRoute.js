import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import Postsedit from "./Postsedit";


const ComponentsRoute = ({post,handlepost,posttitle,setposttitle,postcontent,setpostcontent,handleDel,editTitle,seteditTitle,editContent,seteditContent,handleEdit}) => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home post={post} />} />
            <Route path="NewPost">
              <Route index
                element={
                  <NewPost 
                    handlepost={handlepost}
                    posttitle={posttitle}
                    setposttitle={setposttitle}
                    postcontent = {postcontent}
                    setpostcontent = {setpostcontent}
                  />
                } >
              </Route>
              <Route path=":id" element={<Posts post={post} key={post.id} handleDel={handleDel} />} />
            </Route>
            <Route path="/edit/:id" element={
              <Postsedit
                post={post}
                key={post.id} 
                handleEdit={handleEdit} 
                editTitle = {editTitle}
                seteditTitle = {seteditTitle}
                editContent = {editContent}
                seteditContent = {seteditContent}
              />
            } />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Missing />} />
        </Routes>
    </>
  );
};

export default ComponentsRoute;
