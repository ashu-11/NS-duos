import React from "react";
import "./App.css"

class App extends React.Component {
  
constructor(){
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