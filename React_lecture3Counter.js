import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <>
        <h1 className="counter">{this.props.currentCounter}</h1>
        <button onClick={this.props.incrementCounter}>increment</button>
      </>
    );
  }
}
export default Counter;
