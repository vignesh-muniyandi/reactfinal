import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(){
        super()

        this.state ={
            message :'hello'
        }

        this.changeHandler =this.changeHandler.bind(this)
    }

    changeHandler (){
        this.setState({
            message:'goodbye'
        })
        console.log(this)
    }

  render() {
    return (
      <div>

        <div> <h1>{this.state.message} </h1></div>
       {/* <button onClick={this.changeHandler.bind(this)}>click</button> */}
       {/* <button onClick={() => {
            this.changeHandler
       }}> click</button> */}
       <button onClick={ this.changeHandler}> click</button>
        
      </div>
    )
  }
}

export default EventBind
