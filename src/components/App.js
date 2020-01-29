import * as React from "react";

import GlobalStyle from "../ui/base";
import { Container } from "../ui";

import Shop from "./Shop";
import Cart from "./Cart";

const App = () => (
  <Container>
    <GlobalStyle />
    <Shop />
    <Cart />
  </Container>
);

export default App;
