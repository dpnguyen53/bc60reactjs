import React, { Component } from "react";

export default class Child extends Component {
  handleResetUsername = () => {
    const usernameReset = "Cybersoft";
    this.props.resetUsername(usernameReset);
  };

  render() {
    const { usernameProps, ageProps } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <h4>
          Username: {usernameProps} - Age: {ageProps}
        </h4>
        <button className="btn btn-danger" onClick={this.handleResetUsername}>
          Reset Username
        </button>
      </div>
    );
  }
}
