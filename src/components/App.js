import * as React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

import GlobalStyle from "../ui/base";
import { Container, Header } from "../ui";

import { Checkout, Shop }  from "../pages";

const App = () => (
  <Container>
    <GlobalStyle />
    <HashRouter>
      <Header><Link to="/">The Bill Murray Store</Link></Header>
      <Route path="/" exact component={Shop} />
      <Route path="/checkout" component={Checkout} />
    </HashRouter>
  </Container>
);

export default App;
