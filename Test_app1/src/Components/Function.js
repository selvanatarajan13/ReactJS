import React, { useState } from "react";

const Function = () => {
  // Automatic reload name function
  const name = () => {
    const nameArray = ["Hi","Hello"]
    let int = Math.floor(Math.random()*2);

    return nameArray[int];
  }

  // click event(onClick)
  function clickHandle(f){
    console.log(`Have you nice day ${f}`)
  }

  // Use State Hook function
  const [count, setCount] = useState(26)
  const likeIncrement = () => {
    return setCount((prevcount) => prevcount + 1)
  }
  const likeDecrement = () => {
    return setCount((prevcount) => prevcount - 1)
  }
  return (
    <div>
      <article>
        <h2>Intro</h2>
        <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook. React is a tool for building UI components. React creates a VIRTUAL DOM in memory.
        Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed! React finds out what changes have been made, and changes only what needs to be changed.</p>
        <br></br>
        <h3>JSX</h3>
        <p>
          * JSX stands for JavaScript XML.<br></br>

          * JSX allows us to write HTML in React.<br></br>

          * JSX makes it easier to write and add HTML in React.
        </p>
        <br></br>
        <p>Click to more info for <mark>React Js</mark></p><br></br>
        <a href="https://react.dev/" className="App-link">Learn more</a>
      </article>
      <article>
        <h2>Function Method</h2>
        <p>This is automatically name change funtion when the page is reload..</p>
        <span>{name()} User!</span>
      </article>

      <article>
        <h2>Click event in React</h2>
        <h3 style={{fontWeight: "bold"}}>Function 1 (Anonymous Function)</h3>
        <p>when the below subscribe button is click, the value is psented the console box. (Ctrl + Shift + i).. It is onClick method function. </p>
        
        {/* Do not use this method because the function start the action before click the button after refresh */}
        {/* <button onClick={clickHandle()}>Subcribe</button> */}
        {/* This problem is solve by using the anonymous function. below-> */}
        <p>The below button is the anonymous function model button.</p>
        <button onClick={() => clickHandle("Mahendran")}>Click</button> {/*  it should also passes the parameter value. */}<br></br>
        <p>Click to more info for <mark>anonymous function</mark></p><br></br>
        <a href="https://www.geeksforgeeks.org/javascript-anonymous-functions/" className="App-link">Learn more</a>
        <br></br>
        <br></br>
      </article>
      <article>
        <h3 style={{fontWeight: "bold"}}>Function 2 (Use State Hook function)</h3>
        <p>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Although Hooks generally replace class components, there are no plans to remove classes from React. Although Hooks generally replace class components, there are no plans to remove classes from React.</p>
        <h4>Hook Rules</h4>
        <ol>
          <li>Hooks can only be called inside React function components.</li>
          <li>Hooks can only be called at the top level of a component.</li>
          <li>Hooks cannot be conditional,</li>
        </ol>
        <br></br>
        <div>
          <button onClick={()=> likeIncrement()}>+</button>
          <p>Likes {count}</p>
          <button onClick={() => likeDecrement()}>-</button>
        </div>
      </article>
    </div>
  )
}

export default Function;
