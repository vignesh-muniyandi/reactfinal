import React from 'react'
 function NameList() {

   const nameList = [
     {
       name: "vignesh",
       age: 23,
       salary: 10000000,
     },
     {
       name: "karthi",
       age: 25,
       salary: 2000000,
     },
     {
       name: "priyadharshini",
       age: 21,
       salary: 65262320652,
     },
   ];

   const named = nameList.map((nameList) => (
     <h1>
       hello {nameList.name} i think your age is {nameList.age} and your salary{" "}
       {nameList.salary}
     </h1>
   ));
  return (
    <div>
      {named}
    </div>
  );
}

export default NameList

