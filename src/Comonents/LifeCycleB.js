import React, { PureComponent } from 'react'

class LifeCycleB extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "vignesh",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB ComonentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComonentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getsnashotBeforeUpdate");
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdete");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB