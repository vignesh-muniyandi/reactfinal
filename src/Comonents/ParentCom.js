import React, { Component } from "react";

import MemoCom from "./MemoCom";

class ParentCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vignesh",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setSate({
        name: "vignesh",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <MemoCom name={this.state.name} />
        parent Component
      </div>
    );
  }
}

export default ParentCom;
