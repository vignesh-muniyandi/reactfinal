import React from 'react'

 function Person({nameList ,index}) {
  return (
    <div>
      <h1 key={index}>
        hello {nameList.name} i think your age is {nameList.age} and your salary{" "}
        {nameList.salary}
      </h1>
    </div>
  );
}

export default Person