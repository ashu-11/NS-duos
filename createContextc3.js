import {useContext} from 'react';
import counterContext from '../context/counterContext'
export default function C3() {

  const counterValue = useContext(counterContext);
  console.log("counetrvalue",counterValue);
  
  return (
    <div className="App">
      <h1>Inside c3 and counter value is {counterValue}</h1>
    </div>
  );
}
