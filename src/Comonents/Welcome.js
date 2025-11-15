import React, { PureComponent } from 'react'

class Welcome extends PureComponent {
 

    render() {
        return (
            <div> 
            <h1>Class Component{this.props.name}</h1>

            <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Welcome