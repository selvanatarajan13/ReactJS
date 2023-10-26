import React,{useState} from "react";
import ListItem from "./ListItem";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";
import apiRequest from "../apiRequest";


const TodoFrame = ({items, setItems, handleChange, handleDel,title,API_URL,setError}) => {

    const [newItem, setnewItem] = useState('')
    const [search, setsearch] = useState('')

    
    const addItems = async(data) => {
        const id = items.length ? items[items.length -1 ].id + 1 : 1;
        const addnewItems = {id, checked:false, data}
        const listItems = [...items, addnewItems]
        setItems(listItems);
        localStorage.setItem("todo_list",JSON.stringify(listItems))
        console.log(id)

        const postObj = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(addnewItems)
        }

        const result = await apiRequest(API_URL,postObj);
        console.log(API_URL,"correct")
        if(result) {
            setError(result) 
            console.log("confirmed")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        console.log(newItem)
        addItems(newItem)
        setnewItem('')
    }

  return (
    <>
    {/* <h2>React_Props & Props_Drilling method</h2> */}
    
    <div className="todo-container">

        <h1>{title}</h1>
        <AddItems 
            newItem = {newItem}
            setnewItem = {setnewItem}
            handleSubmit = {handleSubmit}
        />
        <SearchItems 
            search = {search}
            setsearch = {setsearch}
        />
        
        
        {(items.length) ? (
            <ListItem 
                items = {items.filter(items => ((items.data).toLowerCase()).includes(search.toLocaleLowerCase()))}
                key={items.id}
                handleChange = {handleChange}
                handleDel = {handleDel}
            />
        ) : (
            <p style={{fontWeight:"bold"}}>The Todo list is empty..</p>
        )}

    </div>

    </>
  )
};

export default TodoFrame;
