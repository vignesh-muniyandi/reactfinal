import React, { PureComponent } from 'react'
import ChildComonent from './ChildComonent'

class ParentComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

      arentName : 'parent'
    }
    this.greetParent =this.greetParent.bind(this)

  }
   
  greetParent(childName){
    alert(`hello  ${this.state.arentName} from ${childName}`)
  }


  render() {
    return (
      <div>
         < ChildComonent  greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent