import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import "./Todo.css";
const Todo = () => {

    const [items, setItems] = useState(
        [
            {
                id:1,
                checked: false,
                data:"The Earth orbits the Sun. Water boils at 100 degrees Celsius. Dogs bark.The Earth revolves around its axis."
            },
            {
                id:2,
                checked: false,
                data:"The sun rises in the east.Cats meow.The Earth revolves around its axis."
            },
            {
                id:3,
                checked: false,
                data:"Plants need sunlight to grow"
            }

        ]
    );

    const handleChange = (id) => {
       console.log(`${id}`)

       const listItems =items.map((items) => (
        items.id === id ? {...items, checked:!items.checked} : items
       ))


       setItems(listItems)
       
    }

    const handleDel = (id) => {
        const delItem = items.filter((items) => (
            items.id !== id))

        setItems(delItem);

        
    }
    


  return (
    <article>
        <h3>Function 3 (UseState ToDo function)</h3>
        <p>The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
        <br></br>
        <a href="https://legacy.reactjs.org/docs/hooks-state.html" className="App-link">Learn more</a>
        <div className="todo-container">
            <h4>TODO List</h4>
            <input type="text"></input>
            <button>ADD</button>
            {(items.length) ? (
                <>
                <ul>
                      {items.map((items) => (
                          <li key={items.id}>
                              <span style={(items.checked) ? { textDecoration: "line-through" } : null}>
                                  {items.data}
                              </span>
                              <button onClick={() => handleChange(items.id)} style={{ backgroundColor: "skyblue" }}><TiTick /></button>
                              <button onClick={() => handleDel(items.id)}><FaTrash /></button>
                          </li>
                      ))}
                  </ul>
                  <p>List items : {items.length} </p>
                  </>
            ) : (
                <p style={{fontWeight:"bold"}}>The Todo list is empty..</p>
            )}
        </div>
    </article>
  )
};

export default Todo;
