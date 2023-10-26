import { React, useState, useEffect } from "react";
import ComponentsRoute from "./RouterComponents/ComponentsRoute";
import Navigations from "./RouterComponents/Navigations";
import Function from "./RouterComponents/Function";
import Applogo from "./RouterComponents/Applogo";
import './App.css';
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";
import api from "./api/post"
// import SearchPost from "./RouterComponents/SearchPost";

const Header = () => {
  const [Search, setSearch] = useState('')
  const [posttitle, setposttitle] = useState('')
  const [postcontent, setpostcontent] = useState('')
  const navigate = useNavigate()
  const [searchresult, setsearchresult] = useState([])
  const [editTitle, seteditTitle] = useState('')
  const [editContent, seteditContent] = useState('')
  const [post, setpost] = useState([])

  // Fetch the post
  useEffect(() => {
    const fetchPost = async() => {
      try {
        const response = await api.get('/post')
        setpost(response.data)
      } catch (error) {
        if(error.response){
          console.log(error.response.data)
        }
        else{
          console.log(error.message)
        }
      }
    }

    fetchPost()
  }, [])
  

  // Add new post
  const handle_postitem = async(posttitle,postcontent) => {
    const id = post.length ? post[post.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: posttitle, datetime, content: postcontent };

    try {
      const response = await api.post('/post',newPost)
      const allpost = [...post, response.data]
      setpost(allpost)
      navigate('/')

    } catch (error) {
      if(error.response){
        console.log(error.response.data)
      }
      else{
        console.log(error.message)
      }
    }
  }

  // Search the Post
  useEffect(() => {
    const filterresult = post.filter((post) => ((post.title).toLocaleLowerCase()).includes(Search.toLocaleLowerCase()) || 
    ((post.content).toLocaleLowerCase()).includes(Search.toLocaleLowerCase())
    )
    setsearchresult(filterresult.reverse())
  }, [post, Search])
  
  const handlepost = (e) => {
    e.preventDefault()
    if(!posttitle) return;
    handle_postitem(posttitle,postcontent)
    setposttitle('')
    setpostcontent('')
  }

  // Delete the post
  const handleDel = async(id) => {
    try {  
      await api.delete(`post/${id}`)
      const del = post.filter(post => post.id !== id)
      setpost(del)
      navigate('/')
    } catch (error) {
      if(error.response){
        console.log(error.response.data)
      }
      else{
        console.log(error.message)
      }
    }
  }

  //Edit the post
  const handleEdit = async(id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updPost = { id, title: editTitle, datetime, content: editContent };
    try {
      const response = await api.put(`post/${id}`,updPost)
      setpost(post.map(post => post.id === id ? (response.data) : (post)))
      seteditTitle('')
      seteditContent('')
      navigate('/')
    } catch (error) {
      if(error.response){
        console.log(error.response.data)
      }
      else{
        console.log(error.message)
      }
    }
  }

  return (
    <>  
      <header className="App-header">
        <Applogo 
          title = "Mahend"
        />  
        <Navigations />
        <Function 
          Search = {Search}
          setSearch = {setSearch}
          // Searchpost = {Searchpost}
        />
      </header>
      <ComponentsRoute 
        post = {searchresult}
        setpost = {setpost}
        handlepost = {handlepost}
        posttitle = {posttitle}
        setposttitle = {setposttitle}
        postcontent = {postcontent}
        setpostcontent = {setpostcontent}
        handleDel = {handleDel}
        editTitle = {editTitle}
        seteditTitle = {seteditTitle}
        editContent = {editContent}
        seteditContent = {seteditContent}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default Header;
