import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//page
import Login from "./page/login";
import Landing from "./page/landing";
import StudentCourse from "./page/studentCourse";
import MyCourse from "./page/myCourse";
import InstructorCourse from "./page/instructorCourse";
import Course from "./page/course";
import CreateCourse from "./page/createCourse";
import WatchCourse from "./page/watchCourse";
import Register from "./page/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/course/student" exact component={StudentCourse} />
        <Route path="/my-course" exact component={MyCourse} />
        <Route path="/course/instructor" exact component={InstructorCourse} />
        <Route path="/course" exact component={Course} />
        <Route path="/course/create" exact component={CreateCourse} />
        <Route path="/course/watch" exact component={WatchCourse} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
