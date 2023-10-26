import React from "react";
import { useRef } from "react";

const AddItems = ({newItem, setnewItem, handleSubmit}) => {

  const inputRef = useRef()
  return (
    <>
    {/* React Controll inputs */}
    {/* React useRef Hook */}
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            ref={inputRef}
            placeholder="Type to add.."
            autoFocus
            required
            value={newItem}
            onChange={(e) => setnewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add Items"
            onClick={() => inputRef.current.focus()}
        >ADD
        </button>
    </form>
    </>
  );
};

export default AddItems;
