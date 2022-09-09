
import React from "react";
import "./App.css"

class App extends React.Component {
//  whenever you want use state in component you need to add constructor 
constructor(){
  
//   super method is required for to call the parent component method or function, if we don't use super we are not able to use the state in component
  super();
  this.state= {
    counter:0
  }

}
render() {
    return <div>
              <h1 className="counter">{this.state.counter}</h1>
              <button  onClick={()=>{
               this.setState({counter:this.state.counter+1})
              }}>increment</button>
            </div>
  }  
}
export default App;
