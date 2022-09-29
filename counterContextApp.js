import "./styles.css";
import C1 from "./components/C1";
import counterContext from "./context/counterContext";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(4);
  
  return (
    <counterContext.Provider value={counter}>
      <div className="App">
        <C1 />
      </div>
    </counterContext.Provider>
  );
}
