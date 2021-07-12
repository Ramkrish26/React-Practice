import axios from "axios";
import React, { Component } from "react";

class HttpPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    2
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.changeHandler}
            ></input>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default HttpPost;
