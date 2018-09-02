import React, { Component } from "react";

class List extends Component {
  state = {};

  handleClick = () => {
    this.props.onRemove(this.props.items);
  };
  render() {
    return (
      <div className="list-item">
        <ul>
          <li onClick={this.handleClick}>{this.props.items.todoItem}</li>
        </ul>
      </div>
    );
  }
}

export default List;
