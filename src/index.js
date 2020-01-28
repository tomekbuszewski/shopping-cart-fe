import * as React from "react";
import { render } from "react-dom";

const App = () => {
  const [message, setMessage] = React.useState("Hello");

  return <div onClick={() => setMessage("Hello there, clicker")}>{message}</div>
};

render(<App />, document.querySelector("#app"));
