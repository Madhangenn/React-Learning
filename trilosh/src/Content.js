import React from 'react'

const Content = () => {
    function nameChnage(){
        const name = ["Madhan","Menaga","Trilosh"]
        const nameselect = Math.floor(Math.random()*3);
        return name[nameselect];
      }

  return (
    <main>
        <p> {nameChnage()} is the best in the world</p>
    </main>
  )
}

export default Content