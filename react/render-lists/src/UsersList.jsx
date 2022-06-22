import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  state = {
    currentPage: 1,
  };

  prevButtonHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextButtonHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const itemsPerPage = 5;
    const users = this.props.usersList;
    return (
      <div>
        <Pagination
          goPrev={this.prevButtonHandler}
          goNext={this.nextButtonHandler}
          currentPage={this.state.currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {users.map(({ name, age, id }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
