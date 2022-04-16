import React from 'react'
import {useState} from "react"
// import {fontawesomeIcon} from "@fortawesome/react-fontawesome"

export default function DeleteItem(props) {
    const [line,setLine] = useState(false);

    const cutIt=()=>{
setLine(true);
    }
  return (
      <div className="todoStyle">
          <div>
          <span className='delete' onClick={cutIt}>
            
             <img className="Deleteimg"src="https://library.kissclipart.com/20191231/yrq/kissclipart-trash-icon-bin-icon-pollution-icon-648a64dd192bf287.png" alt="" />
          </span>
          </div>
      <div>
      <li  className="textTodelete" style={{textDecoration: line?"line-through":""}}>{props.text}</li>
      </div>
  
      </div>
   

  )
}
