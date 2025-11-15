import React from 'react'

 function FuncitonClick() {


    function clickHandler(){
        console.log('button is clicked')
    }
  return (
    <div>
       <button onClick={clickHandler()}>click</button>
    </div>
  )
}

export default FuncitonClick


