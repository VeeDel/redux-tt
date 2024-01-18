import { useState } from "react";
import User from "./User";
import Home from "./components/Home";
import HomeContainer from "./containers/HomeContainer.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeContainer />{" "}
    </>
  );
}

export default App;
