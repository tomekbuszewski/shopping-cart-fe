import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

const App = () => {
  const [message, setMessage] = React.useState("Hello");

  return (
    <div onClick={() => setMessage("Hello there, clicker")}>{message}</div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app"),
);
