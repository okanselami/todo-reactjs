import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoAdd from "./TodoAdd";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <TodoAdd />
        <Footer />
      </div>
    );
  }
}

export default App;
