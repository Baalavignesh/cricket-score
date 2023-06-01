import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Score from "./components/Score/Score";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Score />
    </>
  );
}

export default App;
