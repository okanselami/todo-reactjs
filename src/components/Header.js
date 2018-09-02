import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <p>
          My First React App
          <span>
            <img
              alt="love-emoji"
              src="https://twemoji.maxcdn.com/2/72x72/2764.png"
            />
          </span>
        </p>
      </div>
    );
  }
}

export default Header;
