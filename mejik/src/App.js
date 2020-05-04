import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//page
import Login from "./page/login";
import Landing from "./page/landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
