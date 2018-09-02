import React, { Component } from "react";
import List from "./List";

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      list: [{ id: 0, todoItem: "Initial Item" }]
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const value = this.inputNode.value;
    const newList = this.state.list;

    newList.push({
      id: newList.length,
      todoItem: value
    });

    this.setState({ list: newList });
    this.inputNode.value = "";
  };

  handleRemove = item => {
    const list = this.state.list;

    const newList = list.filter(i => {
      if (i.id !== item.id) {
        return i;
      }
    });

    this.setState({
      list: newList
    });
    return;
  };

  handleIsNull = () => {
    const value = this.inputNode.value;
    value === ""
      ? this.setState({ isEmpty: true })
      : this.setState({ isEmpty: false });
  };

  render() {
    return (
      <div className="container">
        <form className="row" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleIsNull}
            className="column column-80"
            ref={item => {
              this.inputNode = item;
            }}
            placeholder="Write it down!!!"
            type="text"
          />
          <button
            disabled={this.state.isEmpty}
            type="submit"
            className="column column-10 column-offset-10 button button-outline"
          >
            Add
          </button>
        </form>
        <div className="item-container">
          {this.state.list.map(i => (
            <List onRemove={this.handleRemove} key={i.id} items={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoAdd;
