import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BooksRecord.css";

function BooksRecord() {
  const [Bookrecord, setBookrecord] = useState({
    title: "",
    author: "",
    ingredients: "",
    date: "",
    directions: "",

  });

  const showIngredients = ()=>{
    
  }
  const showInstructions = ()=>{
    
  }
  // title: String,
  // author: String,
  // ingredients: String,
  // date: String,
  // directions: String

  useEffect(() => {}, []);

  return (
    <div className="BooksRecord">
      <Link to="/Booklist">
        <button className="btn btn-primary ShowBooklist">Show Recipes</button>
      </Link>
      <h1 >Todos Record</h1>
      <ol className="BookData">
        {/* <li> title : {Bookrecord.title}</li>
        <li> author : {Bookrecord.author}</li>
        <li> ingredients : {Bookrecord.ingredients}</li>
        <li> Date : {Bookrecord.date}</li>
        <li> directions : {Bookrecord.directions}</li> */}
      </ol>
      <button className="btn btn-primary my-2" onClick={showIngredients}>Ingredients</button>
      <button className="btn btn-primary my-2" onClick={showInstructions}>Instructions</button>


      <div className="Buttons">
        <button  className="btn btn-primary" onClick={()=>{alert('your recipe is deleted')}}>Delete Recipe</button>
        <Link to="/EditBooks">
          <button className="btn btn-primary" >Edit Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default BooksRecord;
