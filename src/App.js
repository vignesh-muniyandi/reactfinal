import { Component } from "react";
import "./App.css";
 
 

import NameList from "./Comonents/NameList";


class App  extends Component{
  render() {
    return (
      <div className="App">

        <NameList ></NameList>
        {/* <Message />  */}
        {/*
        <EventBind />
        
        <UserGreeting />
         <ClassClick />
             <ParentComponent />

        <FuncitonClick />

 <Counter />
        <Greet name='vignesh' heroName='code hero' > 
          <p>
            your the best dont give your dream...:enjoy your study 

          </p>

          <button>success</button>
        </Greet>
        <Greet name='super man'/>
        <Greet name ='batman'/>
        <Welcome   name='welcome home' />  
        <Hello /> */}
      </div>
    );
  }
}

export default App;
