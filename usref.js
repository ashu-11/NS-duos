import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const colorRef = useRef();
  const [color, setColor] = useState("red");
  const setData = () => {
    console.log(colorRef);

    setColor(colorRef.current.value);
  };
  console.log("rendered");
  return (
    <div className="App" style={{ background: color, height: "100vh" }}>
      <input placholder="enter the color.." ref={colorRef}  />
      <button onClick={setData}>submit</button>
    </div>
  );
}
