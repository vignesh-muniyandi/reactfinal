import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(){
        super()

        this.state = {
            isLoggedIn: true
        }
    }
  render() {

    return   this.state.isLoggedIn && <div>welcome short circuit</div>

    // return  this.state.isLoggedIn ? (
   
    //     <div>welcome vignesh </div>
    //      ) : (
    //     <div>welcome gueest</div>
    // )

    // let message

    // if(this.state.isLoggedIn){
    //     message = <div>welcome vignesh</div>
       
    // }else{
    //    message =<div>welcome guest</div>
    // }

    // return(
    //     <div>{message}</div>
    // )
      //return (
    //   <div>
    //     Welcome vignseh
    //   </div>
       //)
    }
}

export default UserGreeting
