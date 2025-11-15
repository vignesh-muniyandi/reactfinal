import React, { PureComponent } from "react";

class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment:'',
      topic:'react'
    };
  }

  handleUsernameChange = event  => {
    this.setState({
      username: event.target.value,
    });
  };

  hanaleCommentChange =  event =>{
    this.setState({
       comment: event.target.value
    })
  }

  handleTopicChange = event =>{
    this.setState({
        topic: event.target.value
    })
  }
  handleSubmit = event =>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
  }


  render() {
    const {username ,comment,topic} =this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input
            type="text"
            value={ username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>comment</label>
          <textarea
            type="text"
            value={ comment}
            onChange={this.hanaleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic}  onChange={this.handleTopicChange}>
            <option>react</option>
            <option>veo</option>
            <option>Angular</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
