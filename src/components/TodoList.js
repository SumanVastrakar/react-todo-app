import React, { useState } from 'react'
import Todo from './Todo'
import DeleteItem from "./DeleteItem"

export default function TodoList() {
    const [todo, setTodo] = useState([

    ]);
    const getData=(text)=>{
     
        setTodo([...todo, text]);

    }
    console.log(todo)

  return (
    <div>
       
      <Todo  getData={getData} />
      <div className='container'>
      {
         todo.map((elem,index)=>(
            //  <li>{elem}</li>
            <div className="input-group mb-3 todoAddinput formedInput">
  {/* <div className="input-group-text"> */}
    {/* <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/> */}
    {/* <button>delete</button> */}
  {/* </div> */}
  {/* <input type="text" className="form-control" aria-label="Text input with checkbox"/> */}
  {/* <div className="ms-4">{elem}</div> */}
  <DeleteItem key={index} text={elem}/>
 </div>
         ))
        }
      </div>
    
    </div>
  )
}
