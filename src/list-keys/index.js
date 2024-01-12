import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUser: [
        { id: 1, name: "Nguyen" },
        { id: 2, name: "Lam" },
        { id: 3, name: "Phuc" },
      ],
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
      </div>
    );
  }
}
