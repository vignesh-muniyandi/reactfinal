import React from 'react'
import Person from './Person';
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

   const named = nameList.map((nameList,index) => (
     <Person    nameList={nameList }/>
   ));
  return (
    <div>
      {named}
    </div>
  );
}

export default NameList

