
import './App.css';
import { useState,lazy,Suspense } from 'react';

import Home from "./components/Home"




function App() {

  const[data,setData] = useState();
  return (
    <div className="App">
      <input 
       name="data"
       value={data}
       placeholder="user/admin..."
       onChange={(e)=> { setData(e.target.value);  console.log(data);}}
      
      />
    
    <Home data={data}/>
    
    </div>
    
  );
}

export default App;
