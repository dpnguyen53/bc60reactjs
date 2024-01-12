import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Cybersoft";
  age = 18;

  showInfo() {
    return (
      <div>
        Hello {this.username} - Age: {this.age}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>* RenderingElements</h3>
        {this.showInfo()}
      </div>
    );
  }
}
