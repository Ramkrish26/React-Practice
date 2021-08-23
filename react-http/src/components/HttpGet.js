import React, { Component } from "react";
import axios from "axios";

class HttpGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ postList: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <h1>Http Practice</h1>
        <div>
          List of posts
          {postList.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default HttpGet;
