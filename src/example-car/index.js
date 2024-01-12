import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImage: "./images/red-car.jpg",
    };
  }

  changeUrlImage = (urlImage) => {
    this.setState({
      urlImage,
    });
  };

  render() {
    return (
      <div className="container">
        <h3>* ExampleCar</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={this.state.urlImage} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.changeUrlImage("./images/red-car.jpg");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.changeUrlImage("./images/black-car.jpg");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-light"
              onClick={() => {
                this.changeUrlImage("./images/silver-car.jpg");
              }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
