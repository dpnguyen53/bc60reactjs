import React, { Component } from "react";
import data from "./DataFilms.json";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUser: [
        { id: 1, name: "Nguyen" },
        { id: 2, name: "Lam" },
        { id: 3, name: "Phuc" },
      ],

      listMovie: data,
    };
  }

  renderListUser = () => {
    const { listUser } = this.state;
    return listUser.map((user) => {
      return (
        <li key={user.id}>
          {user.id} - {user.name}
        </li>
      );
    });
  };

  renderListMovie = () => {
    const { listMovie } = this.state;
    return (
      <div className="container">
        <div className="row">
          {listMovie.map((movie) => {
            return (
              <div key={movie.maPhim} className="col-md-3">
                <div className="card">
                  <img className="card-img-top" src={movie.hinhAnh} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    <p className="card-text">{movie.moTa}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>* ListKeys</h3>
        <ul>
          {/* {this.state.listUser.map((user) => {
            return (
              <li key={user.id}>
                {user.id} - {user.name}
              </li>
            );
          })} */}
          {this.renderListUser()}
        </ul>
        {this.renderListMovie()}
      </div>
    );
  }
}
