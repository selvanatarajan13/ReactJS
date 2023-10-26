import React from "react";
import Home from "./RouterComponents/Home";
import Post from "./RouterComponents/Post";
import About from "./RouterComponents/About";

const Main = () => {
  return (
    <main>
        <Home />
        <Post />
        <About />
    </main>
  );
};

export default Main;
