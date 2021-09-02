import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cafes from "./components/Cafes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cafes">
          <Cafes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
