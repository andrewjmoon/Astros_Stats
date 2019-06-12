import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Batters from "./components/Batters";
import Pitchers from "./components/Pitchers";

export default () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/batters" component={Batters} />
          <Route path="/pitchers" component={Pitchers} />
        </Switch>
      </div>
    </Router>
  );
};
