import React from 'react';
import './Style.css';

function Stylesheet(props) {
    let className =props.primary ? 'primary' :''
  return (
    <div>
      <h1 className={className }>sytleSheet</h1>
    </div>
  )
}

export default Stylesheet