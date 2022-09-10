import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <h1 style={{ background: "red", color: "white" }}>
        {this.props.counterValue}
      </h1>
    );
  }
}

export default NavBar;
