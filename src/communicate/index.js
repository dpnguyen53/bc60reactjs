import React, { Component } from "react";
import Child from "./child";
import ChildFnc from "./childFnc";

export default class Communicate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Cybersoft",
      age: 5,
    };
  }

  hanleChangeUsername = () => {
    this.setState({
      username: "Nguyen",
    });
  };

  handleReset = (username) => {
    // nhận data từ component con
    // Cap nhat state
    this.setState({
      username,
    });
  };

  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h3>* Communicate</h3>
        <h4>
          Username: {username} - Age: {age}
        </h4>
        <button className="btn btn-success" onClick={this.hanleChangeUsername}>
          Change username
        </button>
        <Child
          usernameProps={username}
          ageProps={age}
          resetUsername={this.handleReset}
        />
        <ChildFnc usernameProps={username} ageProps={age} />
      </div>
    );
  }
}
