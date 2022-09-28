import "./styles.css";
import {useReducer} from 'react'

export default function App() {
    const intialState ={count:0};

    const  reducer=(state,action)=>{
      switch(action.type) {
        case "increment":
          return {count:state.count+1};
        case "decrement":
          return {count:state.count-1};  
         default:
         throw new Error(); 
      }
    }

  // define the syntax for usereducer
     const[state,dispatch]= useReducer(reducer,intialState);
  return (
    <div className="App">

      <h1>Counter Application </h1>
      <h4>Count is : {state.count} </h4>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>

    </div>
  );
}
