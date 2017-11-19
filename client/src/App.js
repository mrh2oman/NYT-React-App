import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron/Jumbotron';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
      <Jumbotron />
      <Form>
        <input type ="search" />
      </Form>
      </Switch>
    </div>
  </Router>;

export default App;
