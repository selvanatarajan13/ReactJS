import React from "react";
import { FaTrash } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

const ListItem = ({items, handleChange, handleDel}) => {
  return (
    <>
    <ul>
        {items.map((items) => (
            
            <li key={items.id}>

                <span style={(items.checked) ? { textDecoration: "line-through" } : null}>
                    {items.data}
                </span>

                <button onClick={() => handleChange(items.id)} style={{ backgroundColor: "skyblue" }}>
                    <TiTick 
                        role="icon"
                        tabIndex="0"
                    />
                </button>

                <button onClick={() => handleDel(items.id)}>
                    <FaTrash 
                        role="icon"
                        tabIndex="1"
                        aria-label={`Delete ${items.items}`}
                    />
                </button>
            </li>

        ))}
    </ul>
    <p>List items : {items.length} </p>
    </>
  )
};

export default ListItem;

