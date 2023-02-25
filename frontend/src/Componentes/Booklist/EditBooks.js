import React from 'react'
import "./EditBooks.css"
  // title: String,
  // author: String,
  // ingredients: String,
  // date: String,
  // directions: String
function EditBooks() {
  return (
    <div className='EditBooks'>
        <h1 className='HeadingEditBook'>Edit Recipe</h1>
        <div className='Titlediv'>
            <label >title</label>
        <input className='Title' type="text" placeholder='Title of recipe'></input>
        </div>
      
        <div className='AuthorDiv'><label>author</label><input className='Author' type="text" placeholder='author'></input></div>
        <div className='Discribediv'><label>ingredients</label><input className='Discribe' type="text" placeholder="ingredients used"></input></div>
        <div className='Publisheddiv'><label>Date</label><input className='Published' type="text" placeholder='Date'></input></div>
        <div className='Publisherdiv'><label>directions</label><input className='Publisher' type="text" placeholder='how to cook?'></input></div>
        <button className="btn btn-primary" type='submit'  onClick={()=>{alert('your recipe is edited and saved')}}>Submit</button>
    </div>
  )
}


export default EditBooks