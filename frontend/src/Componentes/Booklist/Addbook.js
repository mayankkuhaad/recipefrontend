import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Addbook.css"

function Addbook() {
  const Navigator = useNavigate();
  const [BookData,setBookData] = useState({
    title: "",
    author: "",
    ingredients: "",
    date : "",
    directions: ""
    
  })
  // title: String,
  // author: String,
  // ingredients: String,
  // date: String,
  // directions: String

  let submitHandle =()=>{
    console.log(BookData);
    axios.post("https://mayank-recipe.onrender.com/todolist",BookData).then((res)=>{
      alert('Recipe is added');
      Navigator("/Booklist");
    })
  }

  return (
    <div className='Addbook'>
        <Link to="/Booklist"><button className='btn btn-primary ShowBooklist'>Show All Recipes</button></Link>
        <h1 className='Heading'>Create a recipe</h1>
        <input className='form-control my-2' type="text" placeholder='title of the recipe' value={BookData.title} onChange={(e)=>{setBookData((data )=>{return {...data, title : e.target.value }}) }}></input>
        <input className='form-control my-2' type="text" placeholder='author' value={BookData.author} onChange={(e)=>{setBookData( (data )=>{return {...data, author : e.target.value }})}}></input>
        <input  type="text" className='form-control my-2' placeholder='ingredients used' value={BookData.ingredients} onChange={(e)=>{setBookData( (data )=>{return {...data, ingredients : e.target.value }})}}></input>
       
        <input className='form-control my-2' type="text" placeholder='Date' value={BookData.date} onChange={(e)=>{setBookData( (data )=>{return {...data, date : e.target.value }})}}></input>
        <input type="text" className='form-control my-2' placeholder='How to cook it?'value={BookData.directions} onChange={(e)=>{setBookData( (data )=>{return {...data, directions : e.target.value }})}}></input>
        <button className='btn btn-primary' type='submit'  onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Addbook
