import { compose, createStore } from "redux";

import reducers from "./reducers";

export const makeStore = () =>
  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
export default makeStore();
