import React, { PureComponent } from 'react'

class Message extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message :'welcome visiter vignesh'
        }
    }

    changeMessage(){
        this.setState({
            message:'thankyou for subcribing'
        })
    }

    render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}> Subscribe</button>
          </div>
        );
    }
}

export default Message