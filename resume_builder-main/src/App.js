import React from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/containers/LandingPage";
import FormPage from "./components/containers/CreateForm";
import Resume from "./components/pages/resume";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create" component={FormPage} />
          <Route exact path="/view" component={Resume} />
          <Route exact path="/edit" component={FormPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
