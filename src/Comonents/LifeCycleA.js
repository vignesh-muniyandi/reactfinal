import React, { PureComponent } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name:'vignesh'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA ComonentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComonentUpdate ')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getsnashotBeforeUpdate')
         return null

    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdete')
    }

    ChangeState = () =>{
        this.setState({
            name:'codeEvalution'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
          <div>
            <LifeCycleB/>
            <div>LifeCycleA</div>

            <button onClick={this.ChangeState}>Change State </button>
          </div>
        );
    }
}

export default LifeCycleA