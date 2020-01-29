import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "../ui/base";
import { Container, Header } from "../ui";

import { Checkout, Shop }  from "../pages";

const App = () => (
  <Container>
    <GlobalStyle />
    <Header>The Bill Murray Store</Header>
    <BrowserRouter>
      <Route path="/" exact component={Shop} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  </Container>
);

export default App;
