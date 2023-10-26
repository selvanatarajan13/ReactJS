import React,{useEffect,useState} from "react";
import TodoFrame from "./Components/TodoFrame";
import apiRequest from "./apiRequest";

const Todo = () => {
    const API_URL = 'http://localhost:3500/items'
    // Pipe Operator " || "
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null)
    const [isloading, setisloading] = useState(true)

    // // Use Effect Hook
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL)
                if(!response.ok){
                    throw Error();
                } else{
                    console.log(response)
                    const listItems = await response.json()
                    setItems(listItems)
                    setError(null)
                }

            } catch (Error) {
                console.log(Error)
                setError(Error)
            } finally{
                setisloading(false)
            }
        }
        setTimeout(() => {
            (async () => fetchItems())()    
        },1000)
    }, [])
    

    const handleChange = async (id) => {
       console.log(`${id}`)

       const listItems =items.map((items) => (
        items.id === id ? {...items, checked:!items.checked} : items
       ))
       
       setItems(listItems)

       const upItems = items.filter((items) => items.id === id)
       console.log(upItems,"get item id")

       const updateObj = {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({checked:!upItems[0].checked})
       }

       const req_URL = `${API_URL}/${id}`;
       const result = await apiRequest(req_URL,updateObj);

       if(result){
        setError(result)
        console.log(result,"Todo")
       }
       
    }

    const handleDel = async (id) => {
        const delItem = items.filter((items) => (
            items.id !== id))

        setItems(delItem);

        const upItems = items.filter((items) => items.id === id)
       console.log(upItems,"get item id")

       const delObj = {
        method:'DELETE'
       }

       const req_URL = `${API_URL}/${id}`;
       const result = await apiRequest(req_URL,delObj);

       if(result){
        setError(result)
        console.log(result,"Todo")
       }
        
    }
    
  return (
    <article>
        {isloading && <p>Data is loading...</p>}
        {error && <p>Server is not connect!!</p>}
        {!isloading && !error &&
            <TodoFrame 
            items = {items}
            setItems = {setItems}
            key={items.id}
            handleChange = {handleChange}
            handleDel = {handleDel}
            title = "React ToDo List"
            API_URL={API_URL}
            setError = {setError}
        />}        
    </article>
  );
};

export default Todo;
