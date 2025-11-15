import React, { PureComponent } from 'react'

class ClassClick extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    clickHandler(){
        console.log('clicked tyhe button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler() }>click</button>
            </div>
            
        )
    }
}

export default ClassClick