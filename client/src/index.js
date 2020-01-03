import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from "components/Auth/PrivateRoute";

import HomeLayout from "layouts/Home";
import LoginPage from "layouts/Login";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/custom-grid.css";
import "assets/css/main.css";
import "assets/css/nucleo-icons.css";

const history = createBrowserHistory();

import Example from "./components/DragAndDrop/example";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

ReactDOM.render(
  // <Router history={history}>
  //   <Switch>
  //     <Route path="/login" render={props => <LoginPage {...props} />} />
  //     <PrivateRoute
  //       path="/home"
  //       component={props => <HomeLayout {...props} />}
  //     />
  //     <Redirect from="/" to="/home" />
  //   </Switch>
  // </Router>,
  <DndProvider backend={Backend}>
    <Example />
  </DndProvider>,
  document.getElementById("root")
);
