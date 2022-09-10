import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    const incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    return (
      <>
        <Counter
          currentCounter={this.state.counter}
          incrementCounter={incrementCounter}
        />
        <Navbar counterValue={this.state.counter} />
      </>
    );
  }
}
export default App;
