import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Booklist.css";

function Booklist() {
  const [Books, setBooks] = useState([]);
  const Navigator = useNavigate();

  useEffect(() => {
    axios.get("https://mayank-recipe.onrender.com/todolist").then((res) => {
      console.log(res.data.BooksData);
      setBooks(res.data.BooksData);
    });
  }, []);

  const Handleclick = (e) => {
    console.log(e.target.innerHTML);
    Navigator("/BookRecord");
  };

  return (
    <div className="Booklist">
      <h1 className="Heading">ALL RECIPES</h1>
      <div className="ButtonBox">
        <Link to="/">
          <button  className="btn btn-primary mx-3 logOut">Log Out</button>
        </Link>
        <Link to="/Addbook">
          <button className="btn btn-primary AddBook">Add new recipe</button>
        </Link>
      </div>
      <div className="BooksContainer">
        {Books.map((book) => (
          <div className="Book" onClick={Handleclick}>
            <div className="Imgboog">
            <h4>Title:   {book.title}</h4>
              <h4>Author:   {book.author}</h4>
              <h4>Ingredients:   {book.ingredients}</h4>
            </div>
            <div className="Details">
              <h4>Date:   {book.date}</h4>
              <h4>Directions:   {book.directions}</h4>
    
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// title: String,
// author: String,
// ingredients: String,
// date: String,
// directions: String,

export default Booklist;
