import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlingDemoClick() {
    console.log("handlingDemoClick");
  }

  handlingDemoClickParams(username, age) {
    console.log(username, age);
  }

  render() {
    return (
      <div>
        <h3>* HandlingEvents</h3>
        <button className="btn btn-success" onClick={this.handlingDemoClick}>
          Demo Click
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingDemoClickParams("Cybersoft", 18);
          }}
        >
          Demo Click Params
        </button>
      </div>
    );
  }
}
