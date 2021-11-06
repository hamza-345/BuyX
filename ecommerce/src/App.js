import React from "react";
import AppBar from "./components/Appbar";
import Home from "./components/Home";
import ProductHome from "./components/ProductHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <AppBar />
      <Container>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products/:id">
          <ProductHome />
        </Route>
        <Route path="/cart/:id?">
          <Cart />
        </Route>
      </Container>
    </Router>
  );
};

export default App;
