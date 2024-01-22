import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: data,
      editUser: null,
    };
  }

  /**
   * Delete User
   * nhận use.id từ Users <= UserItem
   */
  handleDeleteUser = (id) => {
    const userFilter = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: userFilter,
    });
  };

  /**
   * Add/Update
   */
  handleSubmit = (user) => {
    if (user.id) {
      // Update
      // findIndex
      const index = this.state.users.findIndex((item) => item.id === user.id);
      // clone users
      const usersClone = [...this.state.users];
      // update usersClone by index
      if (index !== -1) {
        usersClone[index] = user;
      }
      // update state
      this.setState({
        users: usersClone,
      });
    } else {
      // ADD
      // tạo giá trị cho id
      const date = new Date();
      const userNew = { ...user, id: date.getTime() };
      // thêm user
      // clone users từ state
      const usersClone = [...this.state.users, userNew];
      // Cập nhật state
      this.setState({
        users: usersClone,
      });
    }
  };

  /**
   * Edit
   */
  handleEditUser = (user) => {
    this.setState({
      editUser: user,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                editUser: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          users={this.state.users}
          deleteUser={this.handleDeleteUser}
          editUser={this.handleEditUser}
        />
        <Modal submitUser={this.handleSubmit} editUser={this.state.editUser} />
      </div>
    );
  }
}

export default Home;
