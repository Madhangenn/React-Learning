import React from 'react'
import { useState } from 'react';


const Content = () => {

  const [items, setItems] = useState(
    [  { id:1,
    checked: true,
    item : "Madhan"
   },
   { id:2,
    checked : true,
    item : "Menaga"
   },
   { id:3,
    checked : true,
    item : "Trilosh"
   }]
  )




   
      // const[namee, setName] = useState("Trilosh")
      // const[name2, setName2] = useState("Trilosh")
    
      // const btnSubmit = (mode) => {
      //   const name = ["Madhan","Menaga","Trilosh"]
      //   const nameselect = Math.floor(Math.random()*3);
      //  if(mode == 0)
      //  {
      //     setName(namee => name[0])
      //  }
      //  else
      //  {
       
      //     setName(namee => name[nameselect])
      //  }
      // }
      // const pageLoad=(mode) =>{
      //   const name1 = ["Madhan","Menaga","Trilosh"]
      //   const nameselect1 = Math.floor(Math.random()*3);
      //   if(mode == 0)
      //   {
      //     setName2(name2 => name1[0])
      //   }
      //   else
      //   {
  
      //     setName2(name2 => name1[nameselect1])
      //   }
      // }

      // const btnRefresh = () =>{
      //   pageLoad(0);
      //   btnSubmit(0);
                
      // }


      // const[Count, setCount] = useState(99)
      
      // const increment =() =>{
      //   setCount(prevCount => prevCount+1)
      //   const name1 = ["Madhan","Menaga","Trilosh"]
      //   const nameselect1 = Math.floor(Math.random()*3);
      //   setName2(name2 => name1[nameselect1])
      // }

      // const decrease =() =>{
      //   setCount(prevCount => prevCount-1)
      // }

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li>
            <input type='checkbox' checked = {item.checked}></input>
            <label>{item.item}</label>
          </li>
        ))
        }

      </ul>


        {/* <p onLoad={pageLoad}> {name2} is the best in the world</p>
        <p> {namee} is the best in the world</p>
        <button name='Submit' onClick = {btnSubmit}>Submit</button>
        <br></br>
        <button onClick={decrease}>-</button>
        <span>{Count}</span>
        <button onClick={increment}>+</button>

        <button onClick={btnRefresh}>Refresh</button> */}
    </main>
  )
}

export default Content