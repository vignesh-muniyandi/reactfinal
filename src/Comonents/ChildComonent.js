import React from 'react'

function ChildComonent(props) {
  return (
    <div>
      <button  onClick={() => props.greetHandler('child')}>chilld parent </button>
    </div>
  )
}

export default ChildComonent