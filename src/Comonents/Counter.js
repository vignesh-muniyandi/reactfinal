import React, { PureComponent } from 'react'

class Counter extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

            count : 0
            
        }
    }

    increamet(){
       // this.setState({
         //   count:this.state.count + 1
       // },() => {
        //    console.log('callback value ' , this.state.count)
       // })
      // console.log(this.state.count)

      this.setState (prevState => ({
        count :prevState.count + 1
      }))
      console.log(this.state.count)
        
    }

    decreament(){
        this.setState({
            count :this.state.count - 1
        },() =>{
            console.log('the callback  value of decrement ' ,this.state.count)
        })
        console.log(this.state.count)
    }

    increametFive(){
        this.increamet();
        this.increamet();
        this.increamet();
        this.increamet();
        this.increamet();
    }
    

    render() {
        return (
          <div>
            <div>count {this.state.count}</div>

            <button onClick={() => this.increametFive()}> increament</button>
           <br></br>
           <button onClick={() => this.decreament()}>decrement</button>
          
          </div>
        );
    }
}

export default Counter