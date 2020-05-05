import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//page
import Login from "./page/login";
import Landing from "./page/landing";
import StudentCourse from "./page/studentCourse";
import MyCourse from "./page/myCourse";
import InstructorCourse from "./page/instructorCourse";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/course/student" exact component={StudentCourse} />
        <Route path="/course" exact component={MyCourse} />
        <Route Path="/course/instructor" exact component={InstructorCourse} />
      </Switch>
    </Router>
  );
}

export default App;
