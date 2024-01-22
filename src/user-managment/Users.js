import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderUsers = () => {
    const { users, deleteUser, editUser } = this.props;
    return users.map((user) => {
      return (
        <UserItem
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUsers()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
