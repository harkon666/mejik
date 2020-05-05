import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//page
import Login from "./page/login";
import Landing from "./page/landing";
import MyCourse from "./page/myCourse";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/my-course" exact component={MyCourse} />
      </Switch>
    </Router>
  );
}

export default App;
