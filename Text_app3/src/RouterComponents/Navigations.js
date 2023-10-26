import React from "react";
import { Link } from 'react-router-dom';


const Navigations = () => {
  // console.log(post.length)

  return (
    <>
        <nav className="App-link">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/NewPost">NewPost</Link></li>
                {/* <li><Link to="/NewPost">NewPost</Link></li> */}
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    </>
  );
};

export default Navigations;
