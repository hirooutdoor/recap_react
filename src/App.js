import { useState } from "react";
import { Child } from "./Child";

export default function App() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => setText(e.target.value);

  const handleClick = () => setDisplay(!display);

  return (
    <>
      <div className="App">
        <input value={text} onChange={handleChange} />
        <br />
        <br />
        <button onClick={handleClick}>Display</button>
        <Child display={display} />
      </div>
    </>
  );
}
