import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    // this.handleLogin = this.handleLogin.bind(this);
    // console.log("constructor");

    this.state = {
      isLogin: false,
      username: "Nguyen",
    };
  }

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  renderUI() {
    if (this.state.isLogin) {
      return (
        <>
          <h4>Hello {this.state.username}</h4>
          <button className="btn btn-danger" onClick={this.handleLogout}>
            Logout
          </button>
        </>
      );
    } else {
      return (
        <button className="btn btn-success" onClick={this.handleLogin}>
          Login
        </button>
      );
    }
  }

  render() {
    // console.log("render");
    return (
      <div>
        <h3>* State</h3>
        {this.renderUI()}
      </div>
    );
  }
}
